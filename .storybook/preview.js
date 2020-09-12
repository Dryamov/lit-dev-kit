import { storiesOf } from '@storybook/web-components';
import '@storybook/addon-console';
import { setConsoleOptions } from '@storybook/addon-console';
import { themes } from '@storybook/theming';

const STORYBOOK_THEME = process.env.STORYBOOK_THEME

const customViewports = {
  responsive: {
    name: 'Responsive',
    styles: {
      width: '100%',
      height: '100%',
    },
  },
  fullHD: {
    name: 'Full HD',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
  IPadPro: {
    name: 'IPad Pro',
    styles: {
      width: '1024px',
      height: '1366px',
    },
  },
  IPhoneX: {
    name: 'IPhone X',
    styles: {
      width: '375px',
      height: '821px',
    },
  },
};

const customBackgrounds = [
  {
    name: 'dark',
    value: '#333333'
  },
  {
    name: 'light',
    value: '#F8F8F8'
  },
  {
    name: 'twitter',
    value: '#00aced'
  },
  {
    name: 'facebook',
    value: '#3b5998'
  }];

setConsoleOptions({
  panelExclude: [/\[HMR\]/],
  log: '📜 Log',
  warn: '⚠️ Warning',
  error: '❌ Error'
});

export const parameters = {
  controls: { expanded: true },
  viewport: { viewports: customViewports },
  backgrounds: { values: customBackgrounds },
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: themes[STORYBOOK_THEME],
  },
}

const req = require.context('../src', true, /\.stories\.(js|jsx|ts|tsx|mdx)$/);
storiesOf(req, module)
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}