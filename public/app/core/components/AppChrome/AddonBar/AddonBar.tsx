import { css, cx } from '@emotion/css';
import { cloneDeep } from 'lodash';

import { GrafanaTheme2 } from '@grafana/data';
import { FlexItem } from '@grafana/experimental';
import { config } from '@grafana/runtime';
import { Dropdown, Icon, ToolbarButton, useStyles2 } from '@grafana/ui';
import { useGrafana } from 'app/core/context/GrafanaContext';
import { contextSrv } from 'app/core/core';
import { useSelector } from 'app/types/store';

import { HistoryContainer } from '../History/HistoryContainer';
import { enrichHelpItem } from '../MegaMenu/utils';
import { NewsContainer } from '../News/NewsContainer';
import { QuickAdd } from '../QuickAdd/QuickAdd';
import { TopNavBarMenu } from '../TopBar/TopNavBarMenu';

export const ADDON_BAR_WIDTH = 48;

export function AddonBar() {
  const styles = useStyles2(getStyles);
  const { chrome } = useGrafana();
  const state = chrome.useState();
  const navIndex = useSelector((s) => s.navIndex);
  const helpNode = cloneDeep(navIndex['help']);
  const enrichedHelpNode = helpNode ? enrichHelpItem(helpNode) : undefined;
  const profileNode = navIndex['profile'];
  const unifiedHistoryEnabled = config.featureToggles.unifiedHistory;

  const onToggleAddonBar = () => {
    chrome.update({ addonBar: !state.addonBar });
  };

  if (!state.addonBar) {
    return (
      <button type="button" className={cx(styles.toggleButton, styles.expandButton)} onClick={onToggleAddonBar}>
        <Icon name="angle-left" size="xl" />
      </button>
    );
  }

  return (
    <div className={styles.addonBar}>
      {profileNode && (
        <Dropdown overlay={() => <TopNavBarMenu node={profileNode} />} placement="bottom-end">
          <ToolbarButton
            className={styles.profileButton}
            imgSrc={contextSrv.user.gravatarUrl}
            imgAlt="User avatar"
            aria-label="Profile"
          />
        </Dropdown>
      )}
      <FlexItem grow={1} />
      <QuickAdd />
      {unifiedHistoryEnabled && <HistoryContainer />}
      {enrichedHelpNode && (
        <Dropdown overlay={() => <TopNavBarMenu node={enrichedHelpNode} />} placement="bottom-end">
          <ToolbarButton iconOnly icon="question-circle" aria-label="Help" />
        </Dropdown>
      )}
      {config.newsFeedEnabled && <NewsContainer />}
      <ToolbarButton
        icon="monitor"
        className={styles.kioskToggle}
        onClick={chrome.onToggleKioskMode}
        tooltip="Enable kiosk mode"
      />
      <button type="button" className={styles.toggleButton} onClick={onToggleAddonBar}>
        <Icon name="angle-right" size="xl" />
      </button>
    </div>
  );
}

function getStyles(theme: GrafanaTheme2) {
  return {
    kioskToggle: css({
      [theme.breakpoints.down('lg')]: {
        display: 'none',
      },
    }),
    addonBar: css({
      width: `${ADDON_BAR_WIDTH}px`,
      background: theme.colors.background.primary,
      borderLeft: `1px solid ${theme.colors.border.weak}`,
      position: 'fixed',
      top: 0,
      bottom: 0,
      right: 0,
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(0.5),
      paddingBottom: theme.spacing(6),
    }),
    toggleButton: css({
      position: 'absolute',
      width: '36px',
      height: '36px',
      background: theme.colors.background.primary,
      bottom: '8px',
      display: 'flex',
      alignContent: 'center',
      alignItems: 'center',
      zIndex: theme.zIndex.modal,
      boxShadow: 'none',
      border: 'none',
      borderRadius: '50%',
      [theme.transitions.handleMotion('no-preference', 'reduce')]: {
        transition: theme.transitions.create(['background'], {
          duration: theme.transitions.duration.short,
        }),
      },
      ':hover': {
        background: theme.colors.secondary.shade,
      },
    }),
    profileButton: css({
      padding: theme.spacing(0, 0.5),
      img: {
        borderRadius: theme.shape.radius.circle,
        height: '24px',
        marginRight: 0,
        width: '24px',
      },
    }),
    expandButton: css({
      width: '42px',
      height: '48px',
      scale: 1,
      right: -16,
      border: `1px solid ${theme.colors.border.weak}`,
      borderRight: 'none',
      boxShadow: theme.shadows.z2,
      padding: theme.spacing(1, 1, 1, 0.3),
      borderRadius: '50% 0 0 50%',
      [theme.transitions.handleMotion('no-preference', 'reduce')]: {
        transition: theme.transitions.create(['right', 'scale', 'background'], {
          duration: theme.transitions.duration.short,
        }),
      },
      ':hover': {
        right: 0,
        scale: 1.05,
        background: theme.colors.secondary.shade,
      },
    }),
  };
}
