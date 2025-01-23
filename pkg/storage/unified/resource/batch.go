package resource

import (
	"context"
	"errors"
	"fmt"
	"io"
	"net/http"
	"time"

	"google.golang.org/grpc/metadata"

	authlib "github.com/grafana/authlib/types"
	"github.com/grafana/grafana/pkg/apimachinery/utils"
)

const grpcMetaKeyCollection = "x-gf-batch-collection"
const grpcMetaKeyRebuildCollection = "x-gf-batch-rebuild-collection"
const grpcMetaKeySkipValidation = "x-gf-batch-skip-validation"

func grpcMetaValueIsTrue(vals []string) bool {
	return len(vals) == 1 && vals[0] == "true"
}

type BatchRequestIterator interface {
	Next() bool

	// The next event we should process
	Request() *BatchRequest

	// Rollback requested
	RollbackRequested() bool
}

type BatchProcessingBackend interface {
	ProcessBatch(ctx context.Context, setting BatchSettings, iter BatchRequestIterator) *BatchResponse
}

type BatchSettings struct {
	// All requests will be within this namespace/group/resource
	Collection []*ResourceKey

	// The batch will include everything from the collection
	// - all existing values will be removed/replaced if the batch completes successfully
	RebuildCollection bool

	// The byte[] payload and folder has already been validated - no need to decode and verify
	SkipValidation bool
}

func (x *BatchSettings) ToMD() metadata.MD {
	md := make(metadata.MD)
	if len(x.Collection) > 0 {
		for _, v := range x.Collection {
			md[grpcMetaKeyCollection] = append(md[grpcMetaKeyCollection], v.SearchID())
		}
	}
	if x.RebuildCollection {
		md[grpcMetaKeyRebuildCollection] = []string{"true"}
	}
	if x.SkipValidation {
		md[grpcMetaKeySkipValidation] = []string{"true"}
	}
	return md
}

func NewBatchSettings(md metadata.MD) (BatchSettings, error) {
	settings := BatchSettings{}
	for k, v := range md {
		switch k {
		case grpcMetaKeyCollection:
			for _, c := range v {
				key := &ResourceKey{}
				err := key.ReadSearchID(c)
				if err != nil {
					return settings, fmt.Errorf("error reading collection metadata: %s / %w", c, err)
				}
				settings.Collection = append(settings.Collection, key)
			}
		case grpcMetaKeyRebuildCollection:
			settings.RebuildCollection = grpcMetaValueIsTrue(v)
		case grpcMetaKeySkipValidation:
			settings.SkipValidation = grpcMetaValueIsTrue(v)
		}
	}
	return settings, nil
}

// BatchWrite implements ResourceServer.
// All requests must be to the same NAMESPACE/GROUP/RESOURCE
func (s *server) BatchProcess(stream ResourceStore_BatchProcessServer) error {
	backend, ok := s.backend.(BatchProcessingBackend)
	if !ok {
		return fmt.Errorf("backend does not support batched requests")
	}

	ctx := stream.Context()
	user, ok := authlib.AuthInfoFrom(ctx)
	if !ok || user == nil {
		return stream.SendAndClose(&BatchResponse{
			Error: &ErrorResult{
				Message: "no user found in context",
				Code:    http.StatusUnauthorized,
			},
		})
	}

	md, ok := metadata.FromIncomingContext(ctx)
	if !ok {
		return stream.SendAndClose(&BatchResponse{
			Error: &ErrorResult{
				Message: "unable to read metadata gRPC request",
				Code:    http.StatusPreconditionFailed,
			},
		})
	}
	runner := &batchRunner{
		checker: make(map[string]authlib.ItemChecker), // Can create
		stream:  stream,
	}
	settings, err := NewBatchSettings(md)
	if err != nil {
		return stream.SendAndClose(&BatchResponse{
			Error: &ErrorResult{
				Message: "error reading settings",
				Reason:  err.Error(),
				Code:    http.StatusPreconditionFailed,
			},
		})
	}

	if len(settings.Collection) < 1 {
		return stream.SendAndClose(&BatchResponse{
			Error: &ErrorResult{
				Message: "Missing target collection(s) in request header",
				Code:    http.StatusBadRequest,
			},
		})
	}

	// HACK!!! always allow everything!!!!!!
	access := authlib.FixedAccessClient(true)

	if settings.RebuildCollection {
		for _, k := range settings.Collection {
			// Can we delete the whole collection
			rsp, err := access.Check(ctx, user, authlib.CheckRequest{
				Namespace: k.Namespace,
				Group:     k.Group,
				Resource:  k.Resource,
				Verb:      utils.VerbDeleteCollection,
			})
			if err != nil || !rsp.Allowed {
				return stream.SendAndClose(&BatchResponse{
					Error: &ErrorResult{
						Message: fmt.Sprintf("Requester must be able to: %s", utils.VerbDeleteCollection),
						Code:    http.StatusForbidden,
					},
				})
			}

			// This will be called for each request -- with the folder ID
			runner.checker[k.SearchID()], err = access.Compile(ctx, user, authlib.ListRequest{
				Namespace: k.Namespace,
				Group:     k.Group,
				Resource:  k.Resource,
				Verb:      utils.VerbCreate,
			})
			if err != nil {
				return stream.SendAndClose(&BatchResponse{
					Error: &ErrorResult{
						Message: fmt.Sprintf("unable to compile create request"),
						Code:    http.StatusForbidden,
					},
				})
			}
		}
	} else {
		return stream.SendAndClose(&BatchResponse{
			Error: &ErrorResult{
				Message: "Batch currently only supports RebuildCollection",
				Code:    http.StatusBadRequest,
			},
		})
	}

	// BatchProcess requests
	rsp := backend.ProcessBatch(ctx, settings, runner)
	if rsp == nil {
		rsp = &BatchResponse{
			Error: &ErrorResult{
				Code:    http.StatusInternalServerError,
				Message: "Nothing returned from process batch",
			},
		}
	}

	// Rebuild any changed indexes
	for _, summary := range rsp.Summary {
		started := time.Now()
		idx, rv, err := s.search.build(ctx, NamespacedResource{
			Namespace: summary.Namespace,
			Group:     summary.Group,
			Resource:  summary.Resource,
		}, summary.Count, summary.ResourceVersion)
		if err != nil {
			return err // should not happen
		}
		count, err := idx.DocCount(ctx, "")
		if err != nil {
			return err // should not happen
		}
		elapsed := time.Since(started)
		fmt.Printf("Index: %s / size:%d / rv:%d / elapsed: %s\n", summary.Resource, count, rv, elapsed.String())
	}

	fmt.Printf("Finished (SQL batch loop)\n")
	return stream.SendAndClose(rsp)
}

var (
	_ BatchRequestIterator = (*batchRunner)(nil)
)

type batchRunner struct {
	stream   ResourceStore_BatchProcessServer
	rollback bool
	request  *BatchRequest
	err      error
	checker  map[string]authlib.ItemChecker
}

// Next implements BatchRequestIterator.
func (b *batchRunner) Next() bool {
	if b.rollback {
		return true
	}

	b.request, b.err = b.stream.Recv()
	if errors.Is(b.err, io.EOF) {
		b.err = nil
		b.rollback = false
		b.request = nil
		return false
	}

	if b.err != nil {
		b.rollback = true
		return true
	}

	if b.request != nil {
		key := b.request.Key
		k := fmt.Sprintf("%s/%s/%s", key.Namespace, key.Group, key.Resource)
		checker, ok := b.checker[k]
		if !ok {
			b.err = fmt.Errorf("missing access control for: %s", k)
			b.rollback = true
		} else if !checker(key.Namespace, key.Name, b.request.Folder) {
			b.err = fmt.Errorf("not allowed to create resource")
			b.rollback = true
		}
		return true
	}
	return false
}

// Request implements BatchRequestIterator.
func (b *batchRunner) Request() *BatchRequest {
	if b.rollback {
		return nil
	}
	return b.request
}

// RollbackRequested implements BatchRequestIterator.
func (b *batchRunner) RollbackRequested() bool {
	if b.rollback {
		b.rollback = false // break iterator
		return true
	}
	return false
}
