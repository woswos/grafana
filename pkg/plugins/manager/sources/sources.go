package sources

import (
	"context"
	"path/filepath"

	"github.com/grafana/grafana/pkg/extensions/pluginsintegration/cdn/source"
	"github.com/grafana/grafana/pkg/plugins"
	"github.com/grafana/grafana/pkg/plugins/config"
	"github.com/grafana/grafana/pkg/plugins/log"
	"github.com/grafana/grafana/pkg/plugins/pluginscdn"
	"github.com/grafana/grafana/pkg/setting"
)

type Service struct {
	cfg  *setting.Cfg
	pCfg *config.PluginManagementCfg
	log  log.Logger
	cdn  *pluginscdn.Service
}

func ProvideService(cfg *setting.Cfg, pCfg *config.PluginManagementCfg, cdn *pluginscdn.Service) *Service {
	return &Service{
		cfg:  cfg,
		pCfg: pCfg,
		cdn:  cdn,
		log:  log.New("plugin.sources"),
	}
}

func (s *Service) List(_ context.Context) []plugins.PluginSource {
	r := []plugins.PluginSource{
		NewLocalSource(plugins.ClassCore, corePluginPaths(s.cfg.StaticRootPath)),
	}
	r = append(r, s.externalPluginSources()...)
	r = append(r, s.pluginSettingSources()...)
	if s.pCfg.Features.PluginsCDNSyncLoaderEnabled {
		r = append(r, source.NewCDNSource(s.pCfg, s.cdn))
	}
	return r
}

func (s *Service) externalPluginSources() []plugins.PluginSource {
	localSrcs, err := DirAsLocalSources(s.cfg.PluginsPath, plugins.ClassExternal)
	if err != nil {
		s.log.Error("Failed to load external plugins", "error", err)
		return []plugins.PluginSource{}
	}

	srcs := make([]plugins.PluginSource, len(localSrcs))
	for i, src := range localSrcs {
		srcs[i] = src
	}

	return srcs
}

func (s *Service) pluginSettingSources() []plugins.PluginSource {
	sources := make([]plugins.PluginSource, 0, len(s.cfg.PluginSettings))
	for _, ps := range s.cfg.PluginSettings {
		path, exists := ps["path"]
		if !exists || path == "" {
			continue
		}

		sources = append(sources, NewLocalSource(plugins.ClassExternal, []string{path}))
	}

	return sources
}

// corePluginPaths provides a list of the Core plugin file system paths
func corePluginPaths(staticRootPath string) []string {
	datasourcePaths := filepath.Join(staticRootPath, "app/plugins/datasource")
	panelsPath := filepath.Join(staticRootPath, "app/plugins/panel")
	return []string{datasourcePaths, panelsPath}
}
