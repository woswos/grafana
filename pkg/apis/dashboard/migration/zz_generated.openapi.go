//go:build !ignore_autogenerated
// +build !ignore_autogenerated

// SPDX-License-Identifier: AGPL-3.0-only

// Code generated by openapi-gen. DO NOT EDIT.

package migration

import (
	common "k8s.io/kube-openapi/pkg/common"
	spec "k8s.io/kube-openapi/pkg/validation/spec"
)

func GetOpenAPIDefinitions(ref common.ReferenceCallback) map[string]common.OpenAPIDefinition {
	return map[string]common.OpenAPIDefinition{
		"github.com/grafana/grafana/pkg/apis/dashboard/migration.DashboardSpec": schema_pkg_apis_dashboard_migration_DashboardSpec(ref),
	}
}

func schema_pkg_apis_dashboard_migration_DashboardSpec(ref common.ReferenceCallback) common.OpenAPIDefinition {
	return common.OpenAPIDefinition{
		Schema: spec.Schema{
			SchemaProps: spec.SchemaProps{
				Description: "DashboardSpec is a specification for a migrated dashboard body. This is used by the kubernetes internal dashboard API version.",
				Type:        []string{"object"},
				Properties: map[string]spec.Schema{
					"refresh": {
						SchemaProps: spec.SchemaProps{
							Type:   []string{"string"},
							Format: "",
						},
					},
					"schemaVersion": {
						SchemaProps: spec.SchemaProps{
							Default: 0,
							Type:    []string{"integer"},
							Format:  "int32",
						},
					},
					"title": {
						SchemaProps: spec.SchemaProps{
							Default: "",
							Type:    []string{"string"},
							Format:  "",
						},
					},
				},
				Required: []string{"schemaVersion", "title"},
			},
		},
	}
}
