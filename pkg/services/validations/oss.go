package validations

import (
	"net/http"

	"github.com/grafana/grafana/pkg/services/datasources"
)

type OSSDataSourceRequestValidator struct{}

func (*OSSDataSourceRequestValidator) Validate(*datasources.DataSource, *http.Request) error {
	return nil
}

func ProvideValidator() *OSSDataSourceRequestValidator {
	return &OSSDataSourceRequestValidator{}
}
