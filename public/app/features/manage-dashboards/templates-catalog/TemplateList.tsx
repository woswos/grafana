import { useState } from 'react';

import { Box, EmptySearchResult, Grid, Input, Pagination, Select, Stack } from '@grafana/ui';

import { TemplateItem } from './TemplateItem';
import { useTemplateDashboards } from './hooks';
import { SORT_BY_OPTIONS, SortBy } from './types';

interface TemplateListProps {}

export function TemplateList({}: TemplateListProps) {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState(SORT_BY_OPTIONS[0].value);
  const [filter, setFilter] = useState('');
  const { dashboards, pages, loading, error, page: currentPage } = useTemplateDashboards({ sortBy, page, filter });

  return (
    <Stack gap={3} direction="column">
      <Stack justifyContent="space-between">
        <Input
          placeholder="Search"
          value={filter}
          onChange={(e) => setFilter(e.currentTarget.value)}
          loading={loading}
        />
        <Box maxWidth={100}>
          <Select
            placeholder="Sort By"
            onChange={(option) => setSortBy(option.value as SortBy)}
            value={sortBy}
            options={SORT_BY_OPTIONS}
            isSearchable={false}
          />
        </Box>
      </Stack>
      {error && <div>Error loading dashboards</div>}
      {dashboards && dashboards.length > 0 ? (
        <>
          <Grid columns={3} gap={2} alignItems="stretch">
            {dashboards.map((d) => (
              <TemplateItem key={d.slug} dashboard={d} />
            ))}
          </Grid>
          <Pagination
            onNavigate={(toPage) => setPage(toPage)}
            numberOfPages={pages}
            currentPage={currentPage}
            hideWhenSinglePage
          />
        </>
      ) : (
        <EmptySearchResult>No Dashboards</EmptySearchResult>
      )}
    </Stack>
  );
}
