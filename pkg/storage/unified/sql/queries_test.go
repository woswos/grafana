package sql

import (
	"testing"
	"text/template"

	"github.com/grafana/grafana/pkg/storage/unified/resource"
	"github.com/grafana/grafana/pkg/storage/unified/sql/sqltemplate/mocks"
)

func TestUnifiedStorageQueries(t *testing.T) {
	mocks.CheckQuerySnapshots(t, mocks.TemplateTestSetup{
		RootDir: "testdata",
		Templates: map[*template.Template][]mocks.TemplateTestCase{
			sqlResourceDelete: {
				{
					Name: "simple",
					Data: &sqlResourceRequest{
						SQLTemplate: mocks.NewTestingSQLTemplate(),
						WriteEvent: resource.WriteEvent{
							Key: &resource.ResourceKey{
								Namespace: "nn",
								Group:     "gg",
								Resource:  "rr",
								Name:      "name",
							},
						},
					},
				},
			},
			sqlResourceInsert: {
				{
					Name: "simple",
					Data: &sqlResourceRequest{
						SQLTemplate: mocks.NewTestingSQLTemplate(),
						WriteEvent: resource.WriteEvent{
							Key: &resource.ResourceKey{
								Namespace: "nn",
								Group:     "gg",
								Resource:  "rr",
								Name:      "name",
							},
							Type:       resource.WatchEvent_ADDED,
							PreviousRV: 123,
						},
						Folder: "fldr",
					},
				},
			},
			sqlResourceUpdate: {
				{
					Name: "single path",
					Data: &sqlResourceRequest{
						SQLTemplate: mocks.NewTestingSQLTemplate(),
						WriteEvent: resource.WriteEvent{
							Key: &resource.ResourceKey{
								Namespace: "nn",
								Group:     "gg",
								Resource:  "rr",
								Name:      "name",
							},
						},
						Folder: "fldr",
					},
				},
			},
			sqlResourceRead: {
				{
					Name: "without_resource_version",
					Data: &sqlResourceReadRequest{
						SQLTemplate: mocks.NewTestingSQLTemplate(),
						Request: &resource.ReadRequest{
							Key: &resource.ResourceKey{
								Namespace: "nn",
								Group:     "gg",
								Resource:  "rr",
								Name:      "name",
							},
						},
						Response: NewReadResponse(),
					},
				},
			},

			sqlResourceList: {
				{
					Name: "filter_on_namespace",
					Data: &sqlResourceListRequest{
						SQLTemplate: mocks.NewTestingSQLTemplate(),
						Request: &resource.ListRequest{
							Limit: 10,
							Options: &resource.ListOptions{
								Key: &resource.ResourceKey{
									Namespace: "ns",
								},
							},
						},
					},
				},
			},

			sqlResourceHistoryList: {
				{
					Name: "single path",
					Data: &sqlResourceHistoryListRequest{
						SQLTemplate: mocks.NewTestingSQLTemplate(),
						Request: &historyListRequest{
							Limit: 10,
							Options: &resource.ListOptions{
								Key: &resource.ResourceKey{
									Namespace: "ns",
								},
							},
						},
						Response: new(resource.ResourceWrapper),
					},
				},
			},
			sqlResourceHistoryPoll: {
				{
					Name: "single path",
					Data: &sqlResourceHistoryPollRequest{
						SQLTemplate:          mocks.NewTestingSQLTemplate(),
						Resource:             "res",
						Group:                "group",
						SinceResourceVersion: 1234,
						MaxResourceVersion:   2345,
						Response:             new(historyPollResponse),
					},
				},
			},

			sqlResourceHistoryRead: {
				{
					Name: "single path",
					Data: &sqlResourceReadRequest{
						SQLTemplate: mocks.NewTestingSQLTemplate(),
						Request: &resource.ReadRequest{
							ResourceVersion: 123,
							Key: &resource.ResourceKey{
								Namespace: "ns",
								Group:     "gp",
								Resource:  "rs",
								Name:      "nm",
							},
						},
						Response: NewReadResponse(),
					},
				},
			},

			sqlResoureceHistoryUpdateUid: {
				{
					Name: "modify uids in history",
					Data: &sqlResourceHistoryUpdateRequest{
						SQLTemplate: mocks.NewTestingSQLTemplate(),
						WriteEvent: resource.WriteEvent{
							Key: &resource.ResourceKey{
								Namespace: "nn",
								Group:     "gg",
								Resource:  "rr",
								Name:      "name",
							},
							PreviousRV: 1234,
						},
						OldUID: "old-uid",
						NewUID: "new-uid",
					},
				},
			},

			sqlResourceHistoryInsert: {
				{
					Name: "insert into resource_history",
					Data: &sqlResourceRequest{
						SQLTemplate: mocks.NewTestingSQLTemplate(),
						WriteEvent: resource.WriteEvent{
							Key: &resource.ResourceKey{
								Namespace: "nn",
								Group:     "gg",
								Resource:  "rr",
								Name:      "name",
							},
							PreviousRV: 1234,
						},
						Folder: "fldr",
					},
				},
			},

			sqlResourceVersionHead: {
				{
					Name: "single path",
					Data: &sqlResourceVersionHeadRequest{
						SQLTemplate: mocks.NewTestingSQLTemplate(),
						Resource:    "resource",
						Group:       "group",
						Response:    new(resourceVersionResponse),
					},
				},
			},
			sqlResourceVersionList: {
				{
					Name: "single path",
					Data: &sqlResourceVersionListRequest{
						SQLTemplate:          mocks.NewTestingSQLTemplate(),
						groupResourceVersion: new(groupResourceVersion),
					},
				},
			},

			sqlResourceStats: {
				{
					Name: "query",
					Data: &sqlStatsRequest{
						SQLTemplate: mocks.NewTestingSQLTemplate(),
						MinCount:    10, // Not yet used in query (only response filter)
					},
				},
				{
					Name: "query-namespace",
					Data: &sqlStatsRequest{
						SQLTemplate: mocks.NewTestingSQLTemplate(),
						Namespace:   "default",
						MinCount:    10, // Not yet used in query (only response filter)
					},
				},
				{
					Name: "query-folder",
					Data: &sqlStatsRequest{
						SQLTemplate: mocks.NewTestingSQLTemplate(),
						Namespace:   "default",
						Folder:      "folder",
						MinCount:    10, // Not yet used in query (only response filter)
					},
				},
			},
			sqlResourceLockInsert: {
				{
					Name: "insert",
					Data: &sqlResourceLockInsertRequest{
						SQLTemplate: mocks.NewTestingSQLTemplate(),
						Key: &resource.ResourceKey{
							Namespace: "ns",
							Group:     "gp",
							Resource:  "rs",
							Name:      "nm",
						},
					},
				},
			},
			sqlResourceLockCount: {
				{
					Name: "count",
					Data: &sqlResourceLockCountRequest{
						SQLTemplate: mocks.NewTestingSQLTemplate(),
						Namespace:   "ns",
						Group:       "gp",
						Resource:    "rs",
						Response:    new(lockCountResponse),
					},
				},
			},
			sqlResourceLockGet: {
				{
					Name: "get",
					Data: &sqlResourceLockGetRequest{
						SQLTemplate: mocks.NewTestingSQLTemplate(),
						Key: &resource.ResourceKey{
							Namespace: "ns",
							Group:     "gp",
							Resource:  "rs",
							Name:      "nm",
						},
						Response: new(resourceVersionResponse),
					},
				},
			},
			sqlResourceLockDelete: {
				{
					Name: "unlock",
					Data: &sqlResourceLockInsertRequest{
						SQLTemplate: mocks.NewTestingSQLTemplate(),
						Key: &resource.ResourceKey{
							Namespace: "ns",
							Group:     "gp",
							Resource:  "rs",
							Name:      "nm",
						},
					},
				},
			},
		}})
}
