package secretkeepers

import (
	"context"
	"fmt"

	"github.com/grafana/grafana/pkg/registry/apis/secret/encryption/manager"
	"github.com/grafana/grafana/pkg/registry/apis/secret/secretkeepers/sqlkeeper"
	keepertypes "github.com/grafana/grafana/pkg/registry/apis/secret/secretkeepers/types"
	secretstorage "github.com/grafana/grafana/pkg/storage/secret"
)

type Service interface {
	GetKeeper(ctx context.Context, keeperType keepertypes.KeeperType, payloadConfig string) (keepertypes.Keeper, error)
}

type OSSKeeperService struct {
	encryptionManager *manager.EncryptionManager
	store             secretstorage.EncryptedValueStorage
}

func ProvideService(encryptionManager *manager.EncryptionManager, store secretstorage.EncryptedValueStorage) (OSSKeeperService, error) {
	return OSSKeeperService{
		encryptionManager: encryptionManager,
		store:             store,
	}, nil
}

func (ks OSSKeeperService) GetKeeper(ctx context.Context, keeperType keepertypes.KeeperType, payloadConfig string) (keepertypes.Keeper, error) {
	// Default SQL keeper
	if keeperType != keepertypes.SQLKeeperType {
		return nil, fmt.Errorf("missing configuration for keeper type %s", keeperType)
	}
	return sqlkeeper.NewSQLKeeper(ks.encryptionManager, ks.store)
}
