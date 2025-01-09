// SPDX-License-Identifier: AGPL-3.0-only

// Code generated by client-gen. DO NOT EDIT.

package fake

import (
	applyconfiguration "github.com/grafana/grafana/pkg/generated/applyconfiguration"
	clientset "github.com/grafana/grafana/pkg/generated/clientset/versioned"
	provisioningv0alpha1 "github.com/grafana/grafana/pkg/generated/clientset/versioned/typed/provisioning/v0alpha1"
	fakeprovisioningv0alpha1 "github.com/grafana/grafana/pkg/generated/clientset/versioned/typed/provisioning/v0alpha1/fake"
	servicev0alpha1 "github.com/grafana/grafana/pkg/generated/clientset/versioned/typed/service/v0alpha1"
	fakeservicev0alpha1 "github.com/grafana/grafana/pkg/generated/clientset/versioned/typed/service/v0alpha1/fake"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/watch"
	"k8s.io/client-go/discovery"
	fakediscovery "k8s.io/client-go/discovery/fake"
	"k8s.io/client-go/testing"
)

// NewSimpleClientset returns a clientset that will respond with the provided objects.
// It's backed by a very simple object tracker that processes creates, updates and deletions as-is,
// without applying any field management, validations and/or defaults. It shouldn't be considered a replacement
// for a real clientset and is mostly useful in simple unit tests.
//
// DEPRECATED: NewClientset replaces this with support for field management, which significantly improves
// server side apply testing. NewClientset is only available when apply configurations are generated (e.g.
// via --with-applyconfig).
func NewSimpleClientset(objects ...runtime.Object) *Clientset {
	o := testing.NewObjectTracker(scheme, codecs.UniversalDecoder())
	for _, obj := range objects {
		if err := o.Add(obj); err != nil {
			panic(err)
		}
	}

	cs := &Clientset{tracker: o}
	cs.discovery = &fakediscovery.FakeDiscovery{Fake: &cs.Fake}
	cs.AddReactor("*", "*", testing.ObjectReaction(o))
	cs.AddWatchReactor("*", func(action testing.Action) (handled bool, ret watch.Interface, err error) {
		gvr := action.GetResource()
		ns := action.GetNamespace()
		watch, err := o.Watch(gvr, ns)
		if err != nil {
			return false, nil, err
		}
		return true, watch, nil
	})

	return cs
}

// Clientset implements clientset.Interface. Meant to be embedded into a
// struct to get a default implementation. This makes faking out just the method
// you want to test easier.
type Clientset struct {
	testing.Fake
	discovery *fakediscovery.FakeDiscovery
	tracker   testing.ObjectTracker
}

func (c *Clientset) Discovery() discovery.DiscoveryInterface {
	return c.discovery
}

func (c *Clientset) Tracker() testing.ObjectTracker {
	return c.tracker
}

// NewClientset returns a clientset that will respond with the provided objects.
// It's backed by a very simple object tracker that processes creates, updates and deletions as-is,
// without applying any validations and/or defaults. It shouldn't be considered a replacement
// for a real clientset and is mostly useful in simple unit tests.
func NewClientset(objects ...runtime.Object) *Clientset {
	o := testing.NewFieldManagedObjectTracker(
		scheme,
		codecs.UniversalDecoder(),
		applyconfiguration.NewTypeConverter(scheme),
	)
	for _, obj := range objects {
		if err := o.Add(obj); err != nil {
			panic(err)
		}
	}

	cs := &Clientset{tracker: o}
	cs.discovery = &fakediscovery.FakeDiscovery{Fake: &cs.Fake}
	cs.AddReactor("*", "*", testing.ObjectReaction(o))
	cs.AddWatchReactor("*", func(action testing.Action) (handled bool, ret watch.Interface, err error) {
		gvr := action.GetResource()
		ns := action.GetNamespace()
		watch, err := o.Watch(gvr, ns)
		if err != nil {
			return false, nil, err
		}
		return true, watch, nil
	})

	return cs
}

var (
	_ clientset.Interface = &Clientset{}
	_ testing.FakeClient  = &Clientset{}
)

// ProvisioningV0alpha1 retrieves the ProvisioningV0alpha1Client
func (c *Clientset) ProvisioningV0alpha1() provisioningv0alpha1.ProvisioningV0alpha1Interface {
	return &fakeprovisioningv0alpha1.FakeProvisioningV0alpha1{Fake: &c.Fake}
}

// ServiceV0alpha1 retrieves the ServiceV0alpha1Client
func (c *Clientset) ServiceV0alpha1() servicev0alpha1.ServiceV0alpha1Interface {
	return &fakeservicev0alpha1.FakeServiceV0alpha1{Fake: &c.Fake}
}
