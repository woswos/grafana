import React from 'react';
import { Portal } from '../../Portal/Portal';
import { usePlotContext } from '../context';
import { CursorPlugin } from './CursorPlugin';
import {
  DataFrame,
  FieldType,
  formattedValueToString,
  getDisplayProcessor,
  getFieldDisplayName,
  TimeZone,
} from '@grafana/data';
import { SeriesTable, SeriesTableRowProps, TooltipDisplayMode, VizTooltipContainer } from '../../VizTooltip';

interface TooltipPluginProps {
  mode?: TooltipDisplayMode;
  timeZone: TimeZone;
  data: DataFrame;
}

/**
 * @alpha
 */
export const TooltipPlugin: React.FC<TooltipPluginProps> = ({
  mode = TooltipDisplayMode.Single,
  timeZone,
  ...otherProps
}) => {
  const pluginId = 'PlotTooltip';
  const plotContext = usePlotContext();
  // GraphNG expects aligned data, let's take field 0 as x field. FTW
  let xField = otherProps.data.fields[0];

  if (!xField) {
    return null;
  }

  const xFieldFmt = xField.display || getDisplayProcessor({ field: xField, timeZone });

  return (
    <CursorPlugin id={pluginId}>
      {({ focusedSeriesIdx, focusedPointIdx, coords }) => {
        if (!plotContext.getPlotInstance()) {
          return null;
        }
        let tooltip = null;

        // when no no cursor interaction
        if (focusedPointIdx === null) {
          return null;
        }

        const xVal = xFieldFmt(xField!.values.get(focusedPointIdx)).text;

        // when interacting with a point in single mode
        if (mode === TooltipDisplayMode.Single && focusedSeriesIdx !== null) {
          const field = otherProps.data.fields[focusedSeriesIdx];
          const plotSeries = plotContext.getSeries();
          const fieldFmt = field.display || getDisplayProcessor({ field, timeZone });
          const value = fieldFmt(plotContext.data[focusedSeriesIdx!][focusedPointIdx]);

          tooltip = (
            <SeriesTable
              series={[
                {
                  // TODO: align with uPlot typings
                  color: (plotSeries[focusedSeriesIdx!].stroke as any)(),
                  label: getFieldDisplayName(field, otherProps.data),
                  value: value ? formattedValueToString(value) : null,
                },
              ]}
              timestamp={xVal}
            />
          );
        }

        if (mode === TooltipDisplayMode.Multi) {
          let series: SeriesTableRowProps[] = [];
          const plotSeries = plotContext.getSeries();

          for (let i = 0; i < plotSeries.length; i++) {
            const frame = otherProps.data;
            const field = frame.fields[i];
            if (
              field === xField ||
              field.type === FieldType.time ||
              field.type !== FieldType.number ||
              field.config.custom?.hideFrom?.tooltip
            ) {
              continue;
            }

            const value = field.display!(plotContext.data[i][focusedPointIdx]);

            series.push({
              // TODO: align with uPlot typings
              color: (plotSeries[i].stroke as any)!(),
              label: getFieldDisplayName(field, frame),
              value: value ? formattedValueToString(value) : null,
              isActive: focusedSeriesIdx === i,
            });
          }

          tooltip = <SeriesTable series={series} timestamp={xVal} />;
        }

        if (!tooltip) {
          return null;
        }

        return (
          <Portal>
            <VizTooltipContainer position={{ x: coords.viewport.x, y: coords.viewport.y }} offset={{ x: 10, y: 10 }}>
              {tooltip}
            </VizTooltipContainer>
          </Portal>
        );
      }}
    </CursorPlugin>
  );
};
