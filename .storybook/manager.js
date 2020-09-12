import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

const STORYBOOK_THEME=process.env.STORYBOOK_THEME
addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  theme: themes[STORYBOOK_THEME],
  selectedPanel: undefined,
  initialActive: 'sidebar',
  showRoots: true,
});