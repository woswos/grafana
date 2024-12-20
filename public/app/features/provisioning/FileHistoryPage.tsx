import { useParams } from 'react-router-dom-v5-compat';

import { Card, EmptyState, Spinner, Stack, Text, TextLink } from '@grafana/ui';
import { Page } from 'app/core/components/Page/Page';

import { isNotFoundError } from '../alerting/unified/api/util';

import { useGetRepositoryHistoryWithPathQuery, useGetRepositoryStatusQuery } from './api';
import { HistoryListResponse } from './api/types';
import { PROVISIONING_URL } from './constants';

export default function FileHistoryPage() {
  const params = useParams();
  const name = params['name'] ?? '';
  const path = params['*'] ?? '';
  const query = useGetRepositoryStatusQuery({ name });
  const history = useGetRepositoryHistoryWithPathQuery({ name, path });
  const notFound = query.isError && isNotFoundError(query.error);

  return (
    <Page
      navId="provisioning"
      pageNav={{
        text: `History: ${path}`, //,
        subTitle: query.data?.spec?.title ?? 'Repository',
      }}
    >
      <Page.Contents isLoading={false}>
        {notFound ? (
          <EmptyState message={`Repository not found`} variant="not-found">
            <Text element={'p'}>Make sure the repository config exists in the configuration file.</Text>
            <TextLink href={PROVISIONING_URL}>Back to repositories</TextLink>
          </EmptyState>
        ) : (
          //@ts-expect-error TODO fix history response types
          <div>{history.data ? <HistoryView history={history.data} path={path} repo={name} /> : <Spinner />}</div>
        )}
      </Page.Contents>
    </Page>
  );
}

interface Props {
  history: HistoryListResponse;
  path: string;
  repo: string;
}

function HistoryView({ history, path, repo }: Props) {
  if (!history.items) {
    return <div>not found</div>;
  }

  return (
    <Stack direction={'column'}>
      <h5>History</h5>
      {history.items.map((item) => (
        <Card href={`${PROVISIONING_URL}/${repo}/file/${path}?ref=${item.ref}`} key={item.ref}>
          <Card.Heading>{item.message}</Card.Heading>
          <Card.Meta>
            <Stack gap={1}>
              <span key={item.ref}>Authors:</span>
              <Stack>
                {item.authors.map((a) => (
                  <span key={a.username}>
                    <a href={`https://github.com/${a.username}`}>{a.name}</a>
                  </span>
                ))}
              </Stack>
            </Stack>
          </Card.Meta>
        </Card>
      ))}
    </Stack>
  );
}
