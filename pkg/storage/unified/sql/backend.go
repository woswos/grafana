package sql

import (
	"context"
	"database/sql"
	"errors"
	"fmt"
	"math"
	"sync"
	"time"

	"github.com/google/uuid"
	"go.opentelemetry.io/otel/attribute"
	semconv "go.opentelemetry.io/otel/semconv/v1.26.0"
	"go.opentelemetry.io/otel/trace"
	"go.opentelemetry.io/otel/trace/noop"
	"google.golang.org/protobuf/proto"
	apierrors "k8s.io/apimachinery/pkg/api/errors"

	"github.com/grafana/dskit/backoff"
	"github.com/grafana/grafana/pkg/infra/log"
	"github.com/grafana/grafana/pkg/storage/unified/resource"
	"github.com/grafana/grafana/pkg/storage/unified/sql/db"
	"github.com/grafana/grafana/pkg/storage/unified/sql/dbutil"
	"github.com/grafana/grafana/pkg/storage/unified/sql/sqltemplate"
)

const tracePrefix = "sql.resource."
const defaultPollingInterval = 100 * time.Millisecond

type Backend interface {
	resource.StorageBackend
	resource.DiagnosticsServer
	resource.LifecycleHooks
}

type BackendOptions struct {
	DBProvider      db.DBProvider
	Tracer          trace.Tracer
	PollingInterval time.Duration
}

func NewBackend(opts BackendOptions) (Backend, error) {
	if opts.DBProvider == nil {
		return nil, errors.New("no db provider")
	}
	if opts.Tracer == nil {
		opts.Tracer = noop.NewTracerProvider().Tracer("sql-backend")
	}
	ctx, cancel := context.WithCancel(context.Background())

	pollingInterval := opts.PollingInterval
	if pollingInterval == 0 {
		pollingInterval = defaultPollingInterval
	}
	return &backend{
		done:            ctx.Done(),
		cancel:          cancel,
		log:             log.New("sql-resource-server"),
		tracer:          opts.Tracer,
		dbProvider:      opts.DBProvider,
		pollingInterval: pollingInterval,
	}, nil
}

type backend struct {
	// server lifecycle
	done     <-chan struct{}
	cancel   context.CancelFunc
	initOnce sync.Once
	initErr  error

	// o11y
	log    log.Logger
	tracer trace.Tracer

	// database
	dbProvider db.DBProvider
	db         db.DB
	dialect    sqltemplate.Dialect

	// watch streaming
	//stream chan *resource.WatchEvent
	pollingInterval time.Duration
}

func (b *backend) Init(ctx context.Context) error {
	b.initOnce.Do(func() {
		b.initErr = b.initLocked(ctx)
	})
	return b.initErr
}

func (b *backend) initLocked(ctx context.Context) error {
	db, err := b.dbProvider.Init(ctx)
	if err != nil {
		return fmt.Errorf("initialize resource DB: %w", err)
	}
	b.db = db

	driverName := db.DriverName()
	b.dialect = sqltemplate.DialectForDriver(driverName)
	if b.dialect == nil {
		return fmt.Errorf("no dialect for driver %q", driverName)
	}

	return b.db.PingContext(ctx)
}

func (b *backend) IsHealthy(ctx context.Context, r *resource.HealthCheckRequest) (*resource.HealthCheckResponse, error) {
	// ctxLogger := s.log.FromContext(log.WithContextualAttributes(ctx, []any{"method", "isHealthy"}))

	if err := b.db.PingContext(ctx); err != nil {
		return nil, err
	}

	return &resource.HealthCheckResponse{Status: resource.HealthCheckResponse_SERVING}, nil
}

func (b *backend) Stop(_ context.Context) error {
	b.cancel()
	return nil
}

// GetResourceStats implements Backend.
func (b *backend) GetResourceStats(ctx context.Context, namespace string, minCount int) ([]resource.ResourceStats, error) {
	ctx, span := b.tracer.Start(ctx, tracePrefix+".GetResourceStats")
	defer span.End()

	req := &sqlStatsRequest{
		SQLTemplate: sqltemplate.New(b.dialect),
		Namespace:   namespace,
		MinCount:    minCount, // not used in query... yet?
	}

	res := make([]resource.ResourceStats, 0, 100)
	err := b.db.WithTx(ctx, ReadCommittedRO, func(ctx context.Context, tx db.Tx) error {
		rows, err := dbutil.QueryRows(ctx, tx, sqlResourceStats, req)
		if err != nil {
			return err
		}
		for rows.Next() {
			row := resource.ResourceStats{}
			err = rows.Scan(&row.Namespace, &row.Group, &row.Resource, &row.Count, &row.ResourceVersion)
			if err != nil {
				return err
			}
			if row.Count > int64(minCount) {
				res = append(res, row)
			}
		}
		return err
	})

	return res, err
}

func (b *backend) WriteEvent(ctx context.Context, event resource.WriteEvent) (int64, error) {
	_, span := b.tracer.Start(ctx, tracePrefix+"WriteEvent")
	defer span.End()

	// Lock the key and get a new resource version
	rv, err := b.lockKey(ctx, event.Key)
	if err != nil {
		_ = b.unlockKey(event.Key)
		return 0, fmt.Errorf("lock key: %w", err)
	}

	switch event.Type {
	case resource.WatchEvent_ADDED:
		if event.ObjectOld != nil {
			err = b.restore(ctx, event, rv)
		} else {
			err = b.create(ctx, event, rv)
		}
	case resource.WatchEvent_MODIFIED:
		err = b.update(ctx, event, rv)
	case resource.WatchEvent_DELETED:
		err = b.delete(ctx, event, rv)
	default:
		_ = b.unlockKey(event.Key)
		return 0, fmt.Errorf("unsupported event type")
	}
	if err != nil {
		_ = b.unlockKey(event.Key)
		return 0, fmt.Errorf("write event: %w", err)
	}
	// unlock the key.
	err = b.unlockKey(event.Key)
	if err != nil {
		return 0, fmt.Errorf("unlock key: %w", err)
	}

	// Wait for head to catch'up to ensure read-after-write consistency.
	err = b.waitForRevision(ctx, event.Key.Group, event.Key.Resource, rv)
	if err != nil {
		return 0, fmt.Errorf("wait for revision: %w", err)
	}
	return rv, err
}

func (b *backend) create(ctx context.Context, event resource.WriteEvent, rv int64) error {
	ctx, span := b.tracer.Start(ctx, tracePrefix+"Create")
	defer span.End()
	guid := uuid.New().String()
	err := b.db.WithTx(ctx, ReadCommitted, func(ctx context.Context, tx db.Tx) error {
		folder := ""
		if event.Object != nil {
			folder = event.Object.GetFolder()
		}
		// 1. Insert into resource
		if _, err := dbutil.Exec(ctx, tx, sqlResourceInsert, sqlResourceRequest{
			SQLTemplate:     sqltemplate.New(b.dialect),
			WriteEvent:      event,
			Folder:          folder,
			GUID:            guid,
			ResourceVersion: rv,
		}); err != nil {
			return fmt.Errorf("insert into resource: %w", err)
		}

		// 2. Insert into resource history
		if _, err := dbutil.Exec(ctx, tx, sqlResourceHistoryInsert, sqlResourceRequest{
			SQLTemplate:     sqltemplate.New(b.dialect),
			WriteEvent:      event,
			Folder:          folder,
			GUID:            guid,
			ResourceVersion: rv,
		}); err != nil {
			return fmt.Errorf("insert into resource history: %w", err)
		}
		return nil
	})
	return err
}

func (b *backend) update(ctx context.Context, event resource.WriteEvent, rv int64) error {
	ctx, span := b.tracer.Start(ctx, tracePrefix+"Update")
	defer span.End()
	guid := uuid.New().String()
	err := b.db.WithTx(ctx, ReadCommitted, func(ctx context.Context, tx db.Tx) error {
		folder := ""
		if event.Object != nil {
			folder = event.Object.GetFolder()
		}
		// 1. Update resource
		_, err := dbutil.Exec(ctx, tx, sqlResourceUpdate, sqlResourceRequest{
			SQLTemplate:     sqltemplate.New(b.dialect),
			WriteEvent:      event,
			Folder:          folder,
			GUID:            guid,
			ResourceVersion: rv,
		})
		if err != nil {
			return fmt.Errorf("initial resource update: %w", err)
		}

		// 2. Insert into resource history
		if _, err := dbutil.Exec(ctx, tx, sqlResourceHistoryInsert, sqlResourceRequest{
			SQLTemplate:     sqltemplate.New(b.dialect),
			WriteEvent:      event,
			Folder:          folder,
			GUID:            guid,
			ResourceVersion: rv,
		}); err != nil {
			return fmt.Errorf("insert into resource history: %w", err)
		}
		return nil
	})

	return err
}

func (b *backend) delete(ctx context.Context, event resource.WriteEvent, rv int64) error {
	ctx, span := b.tracer.Start(ctx, tracePrefix+"Delete")
	defer span.End()
	guid := uuid.New().String()

	err := b.db.WithTx(ctx, ReadCommitted, func(ctx context.Context, tx db.Tx) error {
		folder := ""
		if event.Object != nil {
			folder = event.Object.GetFolder()
		}
		// 1. delete from resource
		_, err := dbutil.Exec(ctx, tx, sqlResourceDelete, sqlResourceRequest{
			SQLTemplate: sqltemplate.New(b.dialect),
			WriteEvent:  event,
			GUID:        guid,
		})
		if err != nil {
			return fmt.Errorf("delete resource: %w", err)
		}

		// 2. Add event to resource history
		if _, err := dbutil.Exec(ctx, tx, sqlResourceHistoryInsert, sqlResourceRequest{
			SQLTemplate:     sqltemplate.New(b.dialect),
			WriteEvent:      event,
			Folder:          folder,
			GUID:            guid,
			ResourceVersion: rv,
		}); err != nil {
			return fmt.Errorf("insert into resource history: %w", err)
		}
		return nil
	})

	return err
}

func (b *backend) restore(ctx context.Context, event resource.WriteEvent, rv int64) error {
	ctx, span := b.tracer.Start(ctx, tracePrefix+"Restore")
	defer span.End()
	guid := uuid.New().String()
	err := b.db.WithTx(ctx, ReadCommitted, func(ctx context.Context, tx db.Tx) error {
		folder := ""
		if event.Object != nil {
			folder = event.Object.GetFolder()
		}

		// 1. Re-create resource
		// Note: we may want to replace the write event with a create event, tbd.
		if _, err := dbutil.Exec(ctx, tx, sqlResourceInsert, sqlResourceRequest{
			SQLTemplate:     sqltemplate.New(b.dialect),
			WriteEvent:      event,
			Folder:          folder,
			GUID:            guid,
			ResourceVersion: rv,
		}); err != nil {
			return fmt.Errorf("insert into resource: %w", err)
		}

		// 2. Insert into resource history
		if _, err := dbutil.Exec(ctx, tx, sqlResourceHistoryInsert, sqlResourceRequest{
			SQLTemplate:     sqltemplate.New(b.dialect),
			WriteEvent:      event,
			Folder:          folder,
			GUID:            guid,
			ResourceVersion: rv,
		}); err != nil {
			return fmt.Errorf("insert into resource history: %w", err)
		}

		// 3. Update all resource history entries with the new UID
		// Note: we do not update any history entries that have a deletion timestamp included. This will become
		// important once we start using finalizers, as the initial delete will show up as an update with a deletion timestamp included.
		if _, err := dbutil.Exec(ctx, tx, sqlResoureceHistoryUpdateUid, sqlResourceHistoryUpdateRequest{
			SQLTemplate: sqltemplate.New(b.dialect),
			WriteEvent:  event,
			OldUID:      string(event.ObjectOld.GetUID()),
			NewUID:      string(event.Object.GetUID()),
		}); err != nil {
			return fmt.Errorf("update history uid: %w", err)
		}
		return nil
	})

	return err
}

func (b *backend) ReadResource(ctx context.Context, req *resource.ReadRequest) *resource.BackendReadResponse {
	_, span := b.tracer.Start(ctx, tracePrefix+".Read")
	defer span.End()

	// TODO: validate key ?
	readReq := &sqlResourceReadRequest{
		SQLTemplate: sqltemplate.New(b.dialect),
		Request:     req,
		Response:    NewReadResponse(),
	}
	sr := sqlResourceRead
	if req.ResourceVersion > 0 {
		// read a specific version
		sr = sqlResourceHistoryRead
	}

	var res *resource.BackendReadResponse
	err := b.db.WithTx(ctx, ReadCommittedRO, func(ctx context.Context, tx db.Tx) error {
		var err error
		res, err = dbutil.QueryRow(ctx, tx, sr, readReq)
		// if not found, look for latest deleted version (if requested)
		if errors.Is(err, sql.ErrNoRows) && req.IncludeDeleted {
			sr = sqlResourceHistoryRead
			readReq2 := &sqlResourceReadRequest{
				SQLTemplate: sqltemplate.New(b.dialect),
				Request:     req,
				Response:    NewReadResponse(),
			}
			res, err = dbutil.QueryRow(ctx, tx, sr, readReq2)
			return err
		}
		return err
	})

	if errors.Is(err, sql.ErrNoRows) {
		return &resource.BackendReadResponse{
			Error: resource.NewNotFoundError(req.Key),
		}
	} else if err != nil {
		return &resource.BackendReadResponse{Error: resource.AsErrorResult(err)}
	}

	return res
}

func (b *backend) ListIterator(ctx context.Context, req *resource.ListRequest, cb func(resource.ListIterator) error) (int64, error) {
	_, span := b.tracer.Start(ctx, tracePrefix+"List")
	defer span.End()

	if req.Options == nil || req.Options.Key.Group == "" || req.Options.Key.Resource == "" {
		return 0, fmt.Errorf("missing group or resource")
	}

	// TODO: think about how to handler VersionMatch. We should be able to use latest for the first page (only).

	// TODO: add support for RemainingItemCount

	if req.ResourceVersion > 0 || req.NextPageToken != "" {
		return b.listAtRevision(ctx, req, cb)
	}

	return b.listLatest(ctx, req, cb)
}

type listIter struct {
	rows   db.Rows
	offset int64
	listRV int64

	// any error
	err error

	// The row
	rv        int64
	value     []byte
	namespace string
	name      string
	folder    string
}

// ContinueToken implements resource.ListIterator.
func (l *listIter) ContinueToken() string {
	return ContinueToken{ResourceVersion: l.listRV, StartOffset: l.offset}.String()
}

func (l *listIter) Error() error {
	return l.err
}

func (l *listIter) Name() string {
	return l.name
}

func (l *listIter) Namespace() string {
	return l.namespace
}

func (l *listIter) Folder() string {
	return l.folder
}

// ResourceVersion implements resource.ListIterator.
func (l *listIter) ResourceVersion() int64 {
	return l.rv
}

// Value implements resource.ListIterator.
func (l *listIter) Value() []byte {
	return l.value
}

// Next implements resource.ListIterator.
func (l *listIter) Next() bool {
	if l.rows.Next() {
		l.offset++
		l.err = l.rows.Scan(&l.rv, &l.namespace, &l.name, &l.folder, &l.value)
		return true
	}
	return false
}

// waitForRevision waits for events with a resource version lower than the given revision to be committed.
func (b *backend) waitForRevision(ctx context.Context, group string, resource string, rv int64) error {
	ba := backoff.New(ctx, backoff.Config{
		MinBackoff: time.Millisecond,
		MaxBackoff: 50 * time.Millisecond,
	})
	var head int64
	var err error
	for head < rv {
		err := b.db.WithTx(ctx, ReadCommittedRO, func(ctx context.Context, tx db.Tx) error {
			head, err = headResourceVersion(ctx, tx, b.dialect, group, resource)
			if err != nil {
				return err
			}
			return nil
		})
		if err != nil {
			return fmt.Errorf("get head resource version: %w", err)
		}
		ba.Wait()
	}
	return nil
}

var _ resource.ListIterator = (*listIter)(nil)

// listLatest fetches the resources from the resource table.
func (b *backend) listLatest(ctx context.Context, req *resource.ListRequest, cb func(resource.ListIterator) error) (int64, error) {
	if req.NextPageToken != "" {
		return 0, fmt.Errorf("only works for the first page")
	}
	if req.ResourceVersion > 0 {
		return 0, fmt.Errorf("only works for the 'latest' resource version")
	}

	iter := &listIter{}
	err := b.db.WithTx(ctx, ReadCommittedRO, func(ctx context.Context, tx db.Tx) error {
		// head := b.headRV(ctx, req.Options.Key)
		// if head > 0 {
		// 	// Some of the keys are ahead of HEAD, we need to read from the history table
		// 	req.ResourceVersion = head
		// 	return b.listAtRevision(ctx, req, cb)
		// }

		// TODO: We need to run getHead and listAtRevision in a single transaction otherwise we might get
		// some keys that are ahead of head and some that are behind.
		var err error
		headRV, err := headResourceVersion(ctx, tx, b.dialect, req.Options.Key.Group, req.Options.Key.Resource)
		if err != nil {
			return err
		}
		iter.listRV = headRV

		// Check if there are any inflight requests
		cnt, err := countInflightRequests(ctx, tx, b.dialect, req.Options.Key.Group, req.Options.Key.Resource)
		if err != nil {
			return err
		}
		if cnt > 0 {
			// Some of the keys are ahead of HEAD, we need to read from the history table
			req.ResourceVersion = headRV
			return b.listAtRevisionQuery(ctx, tx, req, iter, cb)
		}

		listReq := sqlResourceListRequest{
			SQLTemplate: sqltemplate.New(b.dialect),
			Request:     new(resource.ListRequest),
		}
		listReq.Request = proto.Clone(req).(*resource.ListRequest)

		rows, err := dbutil.QueryRows(ctx, tx, sqlResourceList, listReq)
		if rows != nil {
			defer func() {
				if err := rows.Close(); err != nil {
					b.log.Warn("listLatest error closing rows", "error", err)
				}
			}()
		}
		if err != nil {
			return err
		}

		iter.rows = rows
		return cb(iter)
	})
	return iter.listRV, err
}

// listAtRevision fetches the resources from the resource_history table at a specific revision.
func (b *backend) listAtRevision(ctx context.Context, req *resource.ListRequest, cb func(resource.ListIterator) error) (int64, error) {
	// Get the RV
	iter := &listIter{listRV: req.ResourceVersion}
	if req.NextPageToken != "" {
		continueToken, err := GetContinueToken(req.NextPageToken)
		if err != nil {
			return 0, fmt.Errorf("get continue token: %w", err)
		}
		iter.listRV = continueToken.ResourceVersion
		iter.offset = continueToken.StartOffset

		if req.ResourceVersion != 0 && req.ResourceVersion != iter.listRV {
			return 0, apierrors.NewBadRequest("request resource version does not math token")
		}
	}
	if iter.listRV < 1 {
		return 0, apierrors.NewBadRequest("expecting an explicit resource version query")
	}

	err := b.db.WithTx(ctx, ReadCommittedRO, func(ctx context.Context, tx db.Tx) error {
		return b.listAtRevisionQuery(ctx, tx, req, iter, cb)
	})
	return iter.listRV, err
}

func (b *backend) listAtRevisionQuery(ctx context.Context, tx db.ContextExecer, req *resource.ListRequest, iter *listIter, cb func(resource.ListIterator) error) error {
	limit := int64(0) // ignore limit
	if iter.offset > 0 {
		limit = math.MaxInt64 // a limit is required for offset
	}
	listReq := sqlResourceHistoryListRequest{
		SQLTemplate: sqltemplate.New(b.dialect),
		Request: &historyListRequest{
			ResourceVersion: iter.listRV,
			Limit:           limit,
			Offset:          iter.offset,
			Options:         req.Options,
		},
	}

	rows, err := dbutil.QueryRows(ctx, tx, sqlResourceHistoryList, listReq)
	if rows != nil {
		defer func() {
			if err := rows.Close(); err != nil {
				b.log.Warn("listAtRevision error closing rows", "error", err)
			}
		}()
	}
	if err != nil {
		return err
	}

	iter.rows = rows
	return cb(iter)
}

func (b *backend) WatchWriteEvents(ctx context.Context) (<-chan *resource.WrittenEvent, error) {
	// Get the latest RV
	since, err := b.listLatestRVs(ctx)
	if err != nil {
		return nil, fmt.Errorf("get the latest resource version: %w", err)
	}
	// Start the poller
	stream := make(chan *resource.WrittenEvent, 100)
	go b.poller(ctx, since, stream)
	return stream, nil
}

func (b *backend) poller(ctx context.Context, since groupResourceRV, stream chan<- *resource.WrittenEvent) {
	t := time.NewTicker(b.pollingInterval)
	defer close(stream)
	defer t.Stop()

	for {
		select {
		case <-b.done:
			return
		case <-t.C:
			ctx, span := b.tracer.Start(ctx, tracePrefix+"poller")
			// List the latest RVs
			grv, err := b.listLatestRVs(ctx)
			if err != nil {
				b.log.Error("get the latest resource version", "err", err)
				t.Reset(b.pollingInterval)
				continue
			}
			for group, items := range grv {
				for resource := range items {
					// If we haven't seen this resource before, we start from 0
					if _, ok := since[group]; !ok {
						since[group] = make(map[string]int64)
					}
					if _, ok := since[group][resource]; !ok {
						since[group][resource] = 0
					}

					// Poll for new events
					next, err := b.poll(ctx, group, resource, since[group][resource], grv[group][resource], stream)
					if err != nil {
						b.log.Error("polling for resource", "err", err)
						t.Reset(b.pollingInterval)
						continue
					}
					if next > since[group][resource] {
						since[group][resource] = next
					}
				}
			}

			t.Reset(b.pollingInterval)
			span.End()
		}
	}
}

// listLatestRVs returns the latest resource version for each (Group, Resource) pair.
func (b *backend) listLatestRVs(ctx context.Context) (groupResourceRV, error) {
	ctx, span := b.tracer.Start(ctx, tracePrefix+"listLatestRVs")
	defer span.End()
	var grvs []*groupResourceVersion
	err := b.db.WithTx(ctx, ReadCommittedRO, func(ctx context.Context, tx db.Tx) error {
		var err error
		grvs, err = dbutil.Query(ctx, tx, sqlResourceVersionList, &sqlResourceVersionListRequest{
			SQLTemplate:          sqltemplate.New(b.dialect),
			groupResourceVersion: new(groupResourceVersion),
		})

		return err
	})
	if err != nil {
		return nil, err
	}

	since := groupResourceRV{}
	for _, grv := range grvs {
		if since[grv.Group] == nil {
			since[grv.Group] = map[string]int64{}
		}
		since[grv.Group][grv.Resource] = grv.ResourceVersion
	}

	return since, nil
}

// headResourceVersion returns the resource version of the backend store for the given group and resource.
// This has the same meaning as the ETCD Header Revision.
func headResourceVersion(ctx context.Context, x db.ContextExecer, d sqltemplate.Dialect, group, resource string) (headRV int64, err error) {
	res, err := dbutil.QueryRow(ctx, x, sqlResourceVersionHead, sqlResourceVersionHeadRequest{
		SQLTemplate: sqltemplate.New(d),
		Group:       group,
		Resource:    resource,
		Response:    new(resourceVersionResponse),
	})
	if err != nil {
		return 0, fmt.Errorf("get resource version: %w", err)
	}
	return res.ResourceVersion, nil
}

// countInflightRequests returns the number of currently locked keys.
func countInflightRequests(ctx context.Context, x db.ContextExecer, d sqltemplate.Dialect, group, resource string) (count int64, err error) {
	res, err := dbutil.QueryRow(ctx, x, sqlResourceLockCount, sqlResourceLockCountRequest{
		SQLTemplate: sqltemplate.New(d),
		Group:       group,
		Resource:    resource,
		Response:    new(lockCountResponse),
	})
	if errors.Is(err, sql.ErrNoRows) {
		return 1, nil
	} else if err != nil {
		return 0, fmt.Errorf("get resource version: %w", err)
	}
	return res, nil
}

func (b *backend) poll(ctx context.Context, grp string, res string, since int64, maxrv int64, stream chan<- *resource.WrittenEvent) (int64, error) {
	ctx, span := b.tracer.Start(ctx, tracePrefix+"poll")
	defer span.End()
	var records []*historyPollResponse
	err := b.db.WithTx(ctx, ReadCommittedRO, func(ctx context.Context, tx db.Tx) error {
		var err error

		records, err = dbutil.Query(ctx, tx, sqlResourceHistoryPoll, &sqlResourceHistoryPollRequest{
			SQLTemplate:          sqltemplate.New(b.dialect),
			Resource:             res,
			Group:                grp,
			SinceResourceVersion: since,
			MaxResourceVersion:   maxrv,
			Response:             &historyPollResponse{},
		})
		return err
	})
	if err != nil {
		return 0, fmt.Errorf("poll history: %w", err)
	}

	var nextRV int64
	for _, rec := range records {
		if rec.Key.Group == "" || rec.Key.Resource == "" || rec.Key.Name == "" {
			return nextRV, fmt.Errorf("missing key in response")
		}
		nextRV = rec.ResourceVersion
		prevRV := rec.PreviousRV
		if prevRV == nil {
			prevRV = new(int64)
		}
		stream <- &resource.WrittenEvent{
			WriteEvent: resource.WriteEvent{
				Value: rec.Value,
				Key: &resource.ResourceKey{
					Namespace: rec.Key.Namespace,
					Group:     rec.Key.Group,
					Resource:  rec.Key.Resource,
					Name:      rec.Key.Name,
				},
				Type:       resource.WatchEvent_Type(rec.Action),
				PreviousRV: *prevRV,
			},
			Folder:          rec.Folder,
			ResourceVersion: rec.ResourceVersion,
			// Timestamp:  , // TODO: add timestamp
		}
	}

	return nextRV, nil
}

// lockKey locks the resource for update and returns a new resource version.
// The resource version is a timestamp in microseconds guaranteed to be greater than previously generated timestamps.
// However it's not guaranteed to be unique and multiple resources may have the same resource version. This is a design
// tradeoff to avoid a global lock per resource and is provider high throughput.
// The lock is acquired in it's own transaction to ensure it's visible to other transactions.
func (b *backend) lockKey(ctx context.Context, key *resource.ResourceKey) (newVersion int64, err error) {
	ctx, span := b.tracer.Start(ctx, tracePrefix+"version_atomic_inc", trace.WithAttributes(
		semconv.K8SNamespaceName(key.Namespace),
		attribute.String("k8s.resource.group", key.Group),
		attribute.String("k8s.resource.type", key.Resource),
		attribute.String("k8s.resource.namespace", key.Namespace),
		attribute.String("k8s.resource.name", key.Name),
	))
	defer span.End()

	var rv int64
	err = b.db.WithTx(ctx, ReadCommitted, func(ctx context.Context, tx db.Tx) error {
		// 1. Lock the resource by inserting a row into the resource_lock table.
		_, err := dbutil.Exec(ctx, tx, sqlResourceLockInsert, sqlResourceLockInsertRequest{
			SQLTemplate: sqltemplate.New(b.dialect),
			Key:         key,
		})
		if err != nil {
			return fmt.Errorf("lock the resource: %w", err)
		}

		rv, err = dbutil.QueryRow(ctx, tx, sqlResourceLockGet, sqlResourceLockGetRequest{
			SQLTemplate: sqltemplate.New(b.dialect),
			Key:         key,
			Response:    new(resourceVersionResponse),
		})
		return err
	})
	return rv, err
}

// unlockKey unlocks the resource.
func (b *backend) unlockKey(key *resource.ResourceKey) error {
	return b.db.WithTx(
		context.Background(), // Background to ensure the Lock is removed even if the request is canceled.
		ReadCommitted, func(ctx context.Context, tx db.Tx) error {
			_, err := dbutil.Exec(ctx, tx, sqlResourceLockDelete, sqlResourceLockInsertRequest{
				SQLTemplate: sqltemplate.New(b.dialect),
				Key:         key,
			})
			return err
		})
}
