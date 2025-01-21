package grpcutils

import (
	"context"
	"encoding/base64"
	"encoding/json"
	"testing"

	"github.com/go-jose/go-jose/v3/jwt"
	"github.com/grafana/authlib/authn"
	"github.com/grafana/authlib/types"
	"github.com/stretchr/testify/require"
)

const header = "{\"alg\":\"none\",\"typ\":\"at+jwt\"}"

func TestInProcExchanger_Exchange(t *testing.T) {
	t.Run("should return the token successfully", func(t *testing.T) {
		exchanger := ProvideInProcExchanger()

		tokenExchResponse, err := exchanger.Exchange(context.Background(), authn.TokenExchangeRequest{})

		expectedJWT := createExpectedJWT(t)

		require.NoError(t, err)
		require.NotNil(t, tokenExchResponse)
		require.Equal(t, expectedJWT, tokenExchResponse.Token)
	})
}

func createExpectedJWT(t *testing.T) string {
	t.Helper()

	expectedClaims := authn.Claims[authn.AccessTokenClaims]{
		Claims: jwt.Claims{
			Audience: []string{"resourceStore"},
			Issuer:   "grafana",
			Subject:  types.NewTypeID(types.TypeAccessPolicy, "1"),
		},
		Rest: authn.AccessTokenClaims{
			Namespace:            "*",
			Permissions:          []string{"folder.grafana.app:*", "dashboard.grafana.app:*"},
			DelegatedPermissions: []string{"folder.grafana.app:*", "dashboard.grafana.app:*"},
		}}

	payload, err := json.Marshal(expectedClaims)
	require.NoError(t, err)

	return base64.RawURLEncoding.EncodeToString([]byte(header)) + "." + base64.RawURLEncoding.EncodeToString(payload) + "."
}
