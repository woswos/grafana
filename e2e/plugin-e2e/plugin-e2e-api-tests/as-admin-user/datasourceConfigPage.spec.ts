import { expect, test } from '@grafana/plugin-e2e';

import { formatExpectError } from '../errors';

test.describe('test createDataSourceConfigPage fixture, saveAndTest and toBeOK matcher', () => {
  test('invalid credentials should return an error', async ({ createDataSourceConfigPage, page }) => {
    const configPage = await createDataSourceConfigPage({ type: 'prometheus' });
    await page.getByPlaceholder('http://localhost:9090').fill('http://localhost:9090');
    await expect(
      configPage.saveAndTest(),
      formatExpectError('Expected save data source config to fail when Prometheus server is not running')
    ).not.toBeOK();
  });

  test('valid credentials should return a 200 status code', async ({ createDataSourceConfigPage, page }) => {
    const configPage = await createDataSourceConfigPage({ type: 'prometheus' });
    configPage.mockHealthCheckResponse({ status: 200 });
    await page.getByPlaceholder('http://localhost:9090').fill('http://localhost:9090');
    await expect(
      configPage.saveAndTest(),
      formatExpectError('Expected data source config to be successfully saved')
    ).toBeOK();
  });
});

test.describe('test data source with frontend only health check', () => {
  test('valid credentials should display a success alert on the page', async ({
    createDataSourceConfigPage,
    page,
    selectors,
  }) => {
    const configPage = await createDataSourceConfigPage({ type: 'jaeger' });
    const healthCheckPath = `${selectors.apis.DataSource.proxy(configPage.datasource.uid)}/api/services`;
    await page.route(healthCheckPath, async (route) => {
      await route.fulfill({ status: 200, body: 'OK' });
    });
    await page.getByPlaceholder('http://localhost:16686').fill('http://localhost:16686');
    await expect(configPage.saveAndTest({ path: healthCheckPath })).toBeOK();
    await expect(
      configPage,
      formatExpectError('Expected data source config to display success alert after save')
    ).toHaveAlert('success', { hasNotText: 'Datasource updated' });
  });
});
