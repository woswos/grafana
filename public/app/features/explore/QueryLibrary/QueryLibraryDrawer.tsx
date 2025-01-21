import { selectors } from '@grafana/e2e-selectors';
import { TabbedContainer, TabConfig } from '@grafana/ui';

import { t } from '../../../core/internationalization';
import { useSelector } from '../../../types';
import { QUERY_LIBRARY_GET_LIMIT, queryLibraryApi } from '../../query-library/api/factory';
import { ExploreDrawer } from '../ExploreDrawer';

import { QueryLibrary } from './QueryLibrary';
import { useQueryLibraryContext } from './QueryLibraryContext';

/**
 * Drawer with query library feature. Handles its own state and should be included in some top level component.
 */
export function QueryLibraryDrawer() {
  const { drawerOpened, activeDatasources, closeDrawer } = useQueryLibraryContext();
  const queryTemplatesCount = useSelector(queryLibraryApi.endpoints.allQueryTemplates.select()).data?.length || 0;

  // TODO: the tabbed container is here mainly for close button and some margins maybe make sense to use something
  //  else as there is only one tab.
  const tabs: TabConfig[] = [
    {
      label: `${t('explore.rich-history.query-library', 'Query library')} (${queryTemplatesCount}/${QUERY_LIBRARY_GET_LIMIT})`,
      value: 'Query library',
      content: <QueryLibrary activeDatasources={activeDatasources} />,
      icon: 'book',
    },
  ];

  return (
    drawerOpened && (
      <ExploreDrawer initialHeight={'75vh'}>
        <TabbedContainer
          tabs={tabs}
          onClose={() => {
            closeDrawer();
          }}
          defaultTab={'Query library'}
          closeIconTooltip={t('explore.rich-history.close-tooltip', 'Close query history')}
          testId={selectors.pages.Explore.QueryHistory.container}
        />
      </ExploreDrawer>
    )
  );
}
