package authorizer

import (
	"context"
	"errors"

	"k8s.io/apiserver/pkg/authorization/authorizer"

	"github.com/grafana/authlib/authz"
	"github.com/grafana/authlib/claims"
	"github.com/grafana/grafana/pkg/apimachinery/utils"
)

type FolderLookup = func(ctx context.Context, auth claims.AuthInfo, group, resource, namespace, name string) (string, error)

func NewResourceAuthorizer(c authz.AccessClient, lookup FolderLookup) authorizer.Authorizer {
	return ResourceAuthorizer{
		client: c,
		lookup: lookup,
	}
}

// ResourceAuthorizer is used to translate authorizer.Authorizer calls to claims.AccessClient calls
type ResourceAuthorizer struct {
	client authz.AccessClient
	lookup FolderLookup
}

func (r ResourceAuthorizer) Authorize(ctx context.Context, attr authorizer.Attributes) (authorizer.Decision, string, error) {
	if !attr.IsResourceRequest() {
		return authorizer.DecisionNoOpinion, "", nil
	}

	auth, ok := claims.From(ctx)
	if !ok {
		return authorizer.DecisionDeny, "", errors.New("no auth info found for request")
	}

	verb := attr.GetVerb()
	folder := ""

	// Create will not (yet) have a folder -- it may be in the payload for this request
	if r.lookup != nil && verb != utils.VerbCreate {
		var err error
		folder, err = r.lookup(ctx, auth,
			attr.GetAPIGroup(),
			attr.GetResource(),
			attr.GetNamespace(),
			attr.GetName())

		if err != nil {
			return authorizer.DecisionDeny, "Error reading folder", err
		}
	}

	res, err := r.client.Check(ctx, auth, authz.CheckRequest{
		Verb:        verb,
		Group:       attr.GetAPIGroup(),
		Resource:    attr.GetResource(),
		Namespace:   attr.GetNamespace(),
		Name:        attr.GetName(),
		Subresource: attr.GetSubresource(),
		Path:        attr.GetPath(),
		Folder:      folder,
	})

	if err != nil {
		return authorizer.DecisionDeny, "", err
	}

	if !res.Allowed {
		return authorizer.DecisionDeny, "unauthorized request", nil
	}

	return authorizer.DecisionAllow, "", nil
}
