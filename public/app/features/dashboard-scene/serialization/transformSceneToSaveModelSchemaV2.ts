import { get, omit } from 'lodash';

import { AnnotationQuery } from '@grafana/data';
import { config } from '@grafana/runtime';
import {
  behaviors,
  dataLayers,
  SceneDataQuery,
  SceneDataTransformer,
  SceneGridRow,
  SceneVariableSet,
  VizPanel,
} from '@grafana/scenes';
import { DataSourceRef } from '@grafana/schema';
import { DASHBOARD_SCHEMA_VERSION } from 'app/features/dashboard/state/DashboardMigrator';

import {
  DashboardV2Spec,
  defaultDashboardV2Spec,
  defaultFieldConfigSource,
  PanelKind,
  PanelQueryKind,
  TransformationKind,
  FieldConfigSource,
  DataTransformerConfig,
  PanelQuerySpec,
  DataQueryKind,
  GridLayoutItemKind,
  QueryOptionsSpec,
  QueryVariableKind,
  TextVariableKind,
  IntervalVariableKind,
  DatasourceVariableKind,
  CustomVariableKind,
  ConstantVariableKind,
  GroupByVariableKind,
  AdhocVariableKind,
  AnnotationQueryKind,
  DataLink,
  LibraryPanelKind,
  Element,
  RepeatOptions,
  GridLayoutRowKind,
} from '../../../../../packages/grafana-schema/src/schema/dashboard/v2alpha0';
import { DashboardDataLayerSet } from '../scene/DashboardDataLayerSet';
import { DashboardScene, DashboardSceneState } from '../scene/DashboardScene';
import { PanelTimeRange } from '../scene/PanelTimeRange';
import { RowRepeaterBehavior } from '../scene/RowRepeaterBehavior';
import { DashboardGridItem } from '../scene/layout-default/DashboardGridItem';
import { DefaultGridLayoutManager } from '../scene/layout-default/DefaultGridLayoutManager';
import { dashboardSceneGraph } from '../utils/dashboardSceneGraph';
import {
  getLibraryPanelBehavior,
  getPanelIdForVizPanel,
  getQueryRunnerFor,
  getVizPanelKeyForPanelId,
  isLibraryPanel,
  calculateGridItemDimensions,
} from '../utils/utils';

import { sceneVariablesSetToSchemaV2Variables } from './sceneVariablesSetToVariables';
import { transformCursorSynctoEnum } from './transformToV2TypesUtils';

// FIXME: This is temporary to avoid creating partial types for all the new schema, it has some performance implications, but it's fine for now
type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export function transformSceneToSaveModelSchemaV2(scene: DashboardScene, isSnapshot = false): DashboardV2Spec {
  const oldDash = scene.state;
  const timeRange = oldDash.$timeRange!.state;

  const controlsState = oldDash.controls?.state;
  const refreshPicker = controlsState?.refreshPicker;

  const dashboardSchemaV2: DeepPartial<DashboardV2Spec> = {
    //dashboard settings
    id: oldDash.id ? oldDash.id : undefined,
    title: oldDash.title,
    description: oldDash.description ?? '',
    cursorSync: getCursorSync(oldDash),
    liveNow: getLiveNow(oldDash),
    preload: oldDash.preload,
    editable: oldDash.editable,
    links: oldDash.links,
    tags: oldDash.tags,
    schemaVersion: DASHBOARD_SCHEMA_VERSION,
    // EOF dashboard settings

    // time settings
    timeSettings: {
      timezone: timeRange.timeZone,
      from: timeRange.from,
      to: timeRange.to,
      autoRefresh: refreshPicker?.state.refresh || '',
      autoRefreshIntervals: refreshPicker?.state.intervals,
      quickRanges: [], //FIXME is coming timepicker.time_options,
      hideTimepicker: controlsState?.hideTimeControls ?? false,
      weekStart: timeRange.weekStart,
      fiscalYearStartMonth: timeRange.fiscalYearStartMonth,
      nowDelay: timeRange.UNSAFE_nowDelay,
    },
    // EOF time settings

    // variables
    variables: getVariables(oldDash),
    // EOF variables

    // elements
    elements: getElements(oldDash),
    // EOF elements

    // annotations
    annotations: getAnnotations(oldDash),
    // EOF annotations

    // layout
    layout: {
      kind: 'GridLayout',
      spec: {
        items: getGridLayoutItems(oldDash, isSnapshot),
      },
    },
    // EOF layout
  };

  try {
    validateDashboardSchemaV2(dashboardSchemaV2);
    return dashboardSchemaV2 as DashboardV2Spec;
  } catch (reason) {
    console.error('Error transforming dashboard to schema v2: ' + reason, dashboardSchemaV2);
    throw new Error('Error transforming dashboard to schema v2: ' + reason);
  }
}

function getCursorSync(state: DashboardSceneState) {
  const cursorSync = state.$behaviors?.find((b): b is behaviors.CursorSync => b instanceof behaviors.CursorSync)?.state
    .sync;

  return transformCursorSynctoEnum(cursorSync);
}

function getLiveNow(state: DashboardSceneState) {
  const liveNow =
    state.$behaviors?.find((b): b is behaviors.LiveNowTimer => b instanceof behaviors.LiveNowTimer)?.isEnabled ||
    undefined;
  // hack for validator
  if (liveNow === undefined) {
    return Boolean(defaultDashboardV2Spec().liveNow);
  }
  return Boolean(liveNow);
}

function getGridLayoutItems(
  state: DashboardSceneState,
  isSnapshot?: boolean
): Array<GridLayoutItemKind | GridLayoutRowKind> {
  const body = state.body;
  let elements: Array<GridLayoutItemKind | GridLayoutRowKind> = [];
  if (body instanceof DefaultGridLayoutManager) {
    for (const child of body.state.grid.state.children) {
      if (child instanceof DashboardGridItem) {
        // TODO: handle panel repeater scenario
        if (child.state.variableName) {
          elements = elements.concat(repeaterToLayoutItems(child, isSnapshot));
        } else {
          elements.push(gridItemToGridLayoutItemKind(child, isSnapshot));
        }
      } else if (child instanceof SceneGridRow) {
        if (child.state.key!.indexOf('-clone-') > 0 && !isSnapshot) {
          // Skip repeat rows
          continue;
        }
        elements.push(gridRowToLayoutRowKind(child, isSnapshot));
      }
    }
  }

  return elements;
}

export function gridItemToGridLayoutItemKind(
  gridItem: DashboardGridItem,
  isSnapshot = false,
  yOverride?: number
): GridLayoutItemKind {
  let elementGridItem: GridLayoutItemKind | undefined;
  let x = 0,
    y = 0,
    width = 0,
    height = 0;

  let gridItem_ = gridItem;

  if (!(gridItem_.state.body instanceof VizPanel)) {
    throw new Error('DashboardGridItem body expected to be VizPanel');
  }

  // Get the grid position and size
  height = (gridItem_.state.variableName ? gridItem_.state.itemHeight : gridItem_.state.height) ?? 0;
  x = gridItem_.state.x ?? 0;
  y = gridItem_.state.y ?? 0;
  width = gridItem_.state.width ?? 0;
  const repeatVar = gridItem_.state.variableName;

  // FIXME: which name should we use for the element reference, key or something else ?
  const elementName = gridItem_.state.body.state.key ?? 'DefaultName';
  elementGridItem = {
    kind: 'GridLayoutItem',
    spec: {
      x,
      y: yOverride ?? y,
      width: width,
      height: height,
      element: {
        kind: 'ElementReference',
        name: elementName,
      },
    },
  };

  if (repeatVar) {
    const repeat: RepeatOptions = {
      mode: 'variable',
      value: repeatVar,
    };

    if (gridItem_.state.maxPerRow) {
      repeat.maxPerRow = gridItem_.getMaxPerRow();
    }

    if (gridItem_.state.repeatDirection) {
      repeat.direction = gridItem_.getRepeatDirection();
    }

    elementGridItem.spec.repeat = repeat;
  }

  if (!elementGridItem) {
    throw new Error('Unsupported grid item type');
  }

  return elementGridItem;
}

function getRowRepeatVariable(row: SceneGridRow): string | undefined {
  if (row.state.$behaviors) {
    for (const behavior of row.state.$behaviors) {
      if (behavior instanceof RowRepeaterBehavior) {
        return behavior.state.variableName;
      }
    }
  }
  return undefined;
}

function gridRowToLayoutRowKind(row: SceneGridRow, isSnapshot = false): GridLayoutRowKind {
  const children = row.state.children.map((child) => {
    if (!(child instanceof DashboardGridItem)) {
      throw new Error('Unsupported row child type');
    }
    const y = (child.state.y ?? 0) - (row.state.y ?? 0) - 1;
    return gridItemToGridLayoutItemKind(child, isSnapshot, y);
  });

  return {
    kind: 'GridLayoutRow',
    spec: {
      title: row.state.title,
      y: row.state.y ?? 0,
      collapsed: Boolean(row.state.isCollapsed),
      elements: children,
      repeat: getRowRepeatVariable(row),
    },
  };
}

function getElements(state: DashboardSceneState) {
  const panels = state.body.getVizPanels() ?? [];
  const panelsArray = panels.reduce((acc: Element[], vizPanel: VizPanel) => {
    if (isLibraryPanel(vizPanel)) {
      const behavior = getLibraryPanelBehavior(vizPanel)!;
      const elementSpec: LibraryPanelKind = {
        kind: 'LibraryPanel',
        spec: {
          name: behavior.state.name,
          uid: behavior.state.uid,
        },
      };
      acc.push(elementSpec);
    } else {
      const elementSpec: PanelKind = {
        kind: 'Panel',
        spec: {
          id: getPanelIdForVizPanel(vizPanel),
          title: vizPanel.state.title,
          description: vizPanel.state.description ?? '',
          links: getPanelLinks(vizPanel),
          data: {
            kind: 'QueryGroup',
            spec: {
              queries: getVizPanelQueries(vizPanel),
              transformations: getVizPanelTransformations(vizPanel),
              queryOptions: getVizPanelQueryOptions(vizPanel),
            },
          },
          vizConfig: {
            kind: vizPanel.state.pluginId,
            spec: {
              pluginVersion: vizPanel.state.pluginVersion ?? '',
              options: vizPanel.state.options,
              fieldConfig: (vizPanel.state.fieldConfig as FieldConfigSource) ?? defaultFieldConfigSource(),
            },
          },
        },
      };
      acc.push(elementSpec);
    }

    return acc;
  }, []);
  // create elements

  const elements = createElements(panelsArray);
  return elements;
}

function getPanelLinks(panel: VizPanel): DataLink[] {
  const vizLinks = dashboardSceneGraph.getPanelLinks(panel);
  if (vizLinks) {
    return vizLinks.state.rawLinks ?? [];
  }
  return [];
}

function getVizPanelQueries(vizPanel: VizPanel): PanelQueryKind[] {
  const queries: PanelQueryKind[] = [];
  const queryRunner = getQueryRunnerFor(vizPanel);
  const vizPanelQueries = queryRunner?.state.queries;
  const datasource = queryRunner?.state.datasource;

  if (vizPanelQueries) {
    vizPanelQueries.forEach((query) => {
      const dataQuery: DataQueryKind = {
        kind: getDataQueryKind(query),
        spec: omit(query, 'datasource', 'refId', 'hide'),
      };
      const querySpec: PanelQuerySpec = {
        datasource: datasource ?? getDefaultDataSourceRef(),
        query: dataQuery,
        refId: query.refId,
        hidden: Boolean(query.hide),
      };
      queries.push({
        kind: 'PanelQuery',
        spec: querySpec,
      });
    });
  }
  return queries;
}

export function getDataQueryKind(query: SceneDataQuery): string {
  // If the query has a datasource, use the datasource type, otherwise return empty kind
  return query.datasource?.type ?? getDefaultDataSourceRef()?.type ?? '';
}

export function getDataQuerySpec(query: SceneDataQuery): Record<string, any> {
  const dataQuerySpec = {
    kind: getDataQueryKind(query),
    spec: query,
  };
  return dataQuerySpec;
}

function getVizPanelTransformations(vizPanel: VizPanel): TransformationKind[] {
  let transformations: TransformationKind[] = [];
  const dataProvider = vizPanel.state.$data;
  if (dataProvider instanceof SceneDataTransformer) {
    const transformationList = dataProvider.state.transformations;
    if (transformationList.length === 0) {
      return [];
    }
    transformationList.forEach((transformationItem) => {
      const transformation = transformationItem as DataTransformerConfig;
      const transformationSpec: DataTransformerConfig = {
        id: transformation.id,
        disabled: transformation.disabled,
        filter: {
          id: transformation.filter?.id ?? '',
          options: transformation.filter?.options ?? {},
        },
        options: transformation.options,
      };

      if (transformation.topic !== undefined) {
        transformationSpec.topic = transformation.topic;
      }

      transformations.push({
        kind: transformation.id,
        spec: transformationSpec,
      });
    });
  }
  return transformations;
}

function getVizPanelQueryOptions(vizPanel: VizPanel): QueryOptionsSpec {
  let queryOptions: QueryOptionsSpec = {};
  const queryRunner = getQueryRunnerFor(vizPanel);

  if (queryRunner) {
    queryOptions.maxDataPoints = queryRunner.state.maxDataPoints;

    if (queryRunner.state.cacheTimeout) {
      queryOptions.cacheTimeout = queryRunner.state.cacheTimeout;
    }

    if (queryRunner.state.queryCachingTTL) {
      queryOptions.queryCachingTTL = queryRunner.state.queryCachingTTL;
    }
    if (queryRunner.state.minInterval) {
      queryOptions.interval = queryRunner.state.minInterval;
    }
  }

  const panelTime = vizPanel.state.$timeRange;

  if (panelTime instanceof PanelTimeRange) {
    queryOptions.timeFrom = panelTime.state.timeFrom;
    queryOptions.timeShift = panelTime.state.timeShift;
    queryOptions.hideTimeOverride = panelTime.state.hideTimeOverride;
  }
  return queryOptions;
}

function createElements(panels: Element[]): Record<string, Element> {
  return panels.reduce(
    (acc, panel) => {
      const key = panel.kind === 'Panel' ? getVizPanelKeyForPanelId(panel.spec.id) : panel.spec.uid;
      acc[key] = panel;
      return acc;
    },
    {} as Record<string, Element>
  );
}

function repeaterToLayoutItems(repeater: DashboardGridItem, isSnapshot = false): GridLayoutItemKind[] {
  if (!isSnapshot) {
    return [gridItemToGridLayoutItemKind(repeater)];
  } else {
    if (repeater.state.body instanceof VizPanel && isLibraryPanel(repeater.state.body)) {
      // TODO: implement
      // const { x = 0, y = 0, width: w = 0, height: h = 0 } = repeater.state;
      // return [vizPanelToPanel(repeater.state.body, { x, y, w, h }, isSnapshot)];
      return [];
    }

    if (repeater.state.repeatedPanels) {
      const { h, w, columnCount } = calculateGridItemDimensions(repeater);
      const panels = repeater.state.repeatedPanels!.map((panel, index) => {
        let x = 0,
          y = 0;
        if (repeater.state.repeatDirection === 'v') {
          x = repeater.state.x!;
          y = index * h;
        } else {
          x = (index % columnCount) * w;
          y = repeater.state.y! + Math.floor(index / columnCount) * h;
        }

        const gridPos = { x, y, w, h };

        const result: GridLayoutItemKind = {
          kind: 'GridLayoutItem',
          spec: {
            x: gridPos.x,
            y: gridPos.y,
            width: gridPos.w,
            height: gridPos.h,
            repeat: {
              mode: 'variable',
              value: repeater.state.variableName!,
              maxPerRow: repeater.getMaxPerRow(),
              direction: repeater.state.repeatDirection,
            },
            element: {
              kind: 'ElementReference',
              name: panel.state.key!,
            },
          },
        };
        return result;
      });

      return panels;
    }
    return [];
  }
}

function getVariables(oldDash: DashboardSceneState) {
  const variablesSet = oldDash.$variables;

  // variables is an array of all variables kind (union)
  let variables: Array<
    | QueryVariableKind
    | TextVariableKind
    | IntervalVariableKind
    | DatasourceVariableKind
    | CustomVariableKind
    | ConstantVariableKind
    | GroupByVariableKind
    | AdhocVariableKind
  > = [];

  if (variablesSet instanceof SceneVariableSet) {
    variables = sceneVariablesSetToSchemaV2Variables(variablesSet);
  }

  return variables;
}

function getAnnotations(state: DashboardSceneState): AnnotationQueryKind[] {
  const data = state.$data;
  if (!(data instanceof DashboardDataLayerSet)) {
    return [];
  }
  const annotations: AnnotationQueryKind[] = [];
  for (const layer of data.state.annotationLayers) {
    if (!(layer instanceof dataLayers.AnnotationsDataLayer)) {
      continue;
    }
    const result: AnnotationQueryKind = {
      kind: 'AnnotationQuery',
      spec: {
        builtIn: Boolean(layer.state.query.builtIn),
        name: layer.state.query.name,
        datasource: layer.state.query.datasource || getDefaultDataSourceRef(),
        enable: Boolean(layer.state.isEnabled),
        hide: Boolean(layer.state.isHidden),
        iconColor: layer.state.query.iconColor,
      },
    };

    // Check if DataQueryKind exists
    const queryKind = getAnnotationQueryKind(layer.state.query);
    if (layer.state.query.query?.kind === queryKind) {
      result.spec.query = {
        kind: queryKind,
        spec: layer.state.query.query.spec,
      };
    }

    // If filter is an empty array, don't save it
    if (layer.state.query.filter?.ids?.length) {
      result.spec.filter = layer.state.query.filter;
    }

    annotations.push(result);
  }
  return annotations;
}

export function getAnnotationQueryKind(annotationQuery: AnnotationQuery): string {
  if (annotationQuery.datasource?.type) {
    return annotationQuery.datasource.type;
  } else {
    const ds = getDefaultDataSourceRef();
    if (ds) {
      return ds.type!; // in the datasource list from bootData "id" is the type
    }
    // if we can't find the default datasource, return grafana as default
    return 'grafana';
  }
}

export function getDefaultDataSourceRef(): DataSourceRef | undefined {
  // we need to return the default datasource configured in the BootConfig
  const defaultDatasource = config.bootData.settings.defaultDatasource;

  // get default datasource type
  const dsList = config.bootData.settings.datasources ?? {};
  const ds = dsList[defaultDatasource];

  if (ds) {
    return { type: ds.meta.id, uid: ds.name }; // in the datasource list from bootData "id" is the type
  }

  return undefined;
}

// Function to know if the dashboard transformed is a valid DashboardV2Spec
function validateDashboardSchemaV2(dash: any): dash is DashboardV2Spec {
  if (typeof dash !== 'object' || dash === null) {
    throw new Error('Dashboard is not an object or is null');
  }

  if (typeof dash.title !== 'string') {
    throw new Error('Title is not a string');
  }
  if (typeof dash.description !== 'string') {
    throw new Error('Description is not a string');
  }
  if (typeof dash.cursorSync !== 'string') {
    throw new Error('CursorSync is not a string');
  }
  if (typeof dash.liveNow !== 'boolean') {
    throw new Error('LiveNow is not a boolean');
  }
  if (typeof dash.preload !== 'boolean') {
    throw new Error('Preload is not a boolean');
  }
  if (typeof dash.editable !== 'boolean') {
    throw new Error('Editable is not a boolean');
  }
  if (!Array.isArray(dash.links)) {
    throw new Error('Links is not an array');
  }
  if (!Array.isArray(dash.tags)) {
    throw new Error('Tags is not an array');
  }

  if (dash.id !== undefined && typeof dash.id !== 'number') {
    throw new Error('ID is not a number');
  }

  // Time settings
  if (typeof dash.timeSettings !== 'object' || dash.timeSettings === null) {
    throw new Error('TimeSettings is not an object or is null');
  }
  if (typeof dash.timeSettings.timezone !== 'string') {
    throw new Error('Timezone is not a string');
  }
  if (typeof dash.timeSettings.from !== 'string') {
    throw new Error('From is not a string');
  }
  if (typeof dash.timeSettings.to !== 'string') {
    throw new Error('To is not a string');
  }
  if (typeof dash.timeSettings.autoRefresh !== 'string') {
    throw new Error('AutoRefresh is not a string');
  }
  if (!Array.isArray(dash.timeSettings.autoRefreshIntervals)) {
    throw new Error('AutoRefreshIntervals is not an array');
  }
  if (!Array.isArray(dash.timeSettings.quickRanges)) {
    throw new Error('QuickRanges is not an array');
  }
  if (typeof dash.timeSettings.hideTimepicker !== 'boolean') {
    throw new Error('HideTimepicker is not a boolean');
  }
  if (typeof dash.timeSettings.weekStart !== 'string') {
    throw new Error('WeekStart is not a string');
  }
  if (typeof dash.timeSettings.fiscalYearStartMonth !== 'number') {
    throw new Error('FiscalYearStartMonth is not a number');
  }
  if (dash.timeSettings.nowDelay !== undefined && typeof dash.timeSettings.nowDelay !== 'string') {
    throw new Error('NowDelay is not a string');
  }

  // Other sections
  if (!Array.isArray(dash.variables)) {
    throw new Error('Variables is not an array');
  }
  if (typeof dash.elements !== 'object' || dash.elements === null) {
    throw new Error('Elements is not an object or is null');
  }
  if (!Array.isArray(dash.annotations)) {
    throw new Error('Annotations is not an array');
  }

  // Layout
  if (typeof dash.layout !== 'object' || dash.layout === null) {
    throw new Error('Layout is not an object or is null');
  }
  if (dash.layout.kind !== 'GridLayout') {
    throw new Error('Layout kind is not GridLayout');
  }
  if (typeof dash.layout.spec !== 'object' || dash.layout.spec === null) {
    throw new Error('Layout spec is not an object or is null');
  }
  if (!Array.isArray(dash.layout.spec.items)) {
    throw new Error('Layout spec items is not an array');
  }

  return true;
}
