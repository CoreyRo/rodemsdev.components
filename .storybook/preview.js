import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { configure, addParameters } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'

const customViewports = {
  smDesktop: {
    name: 'Small Desktop',
    styles: {
      width: '1366px',
      height: '768px',
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',
  viewport: {
    viewports: {...INITIAL_VIEWPORTS, ...MINIMAL_VIEWPORTS, ...customViewports},
    defaultViewport: 'responsive',
  },
}

addParameters({
  docs: {
      container: DocsContainer,
      page: DocsPage,
      layout: 'fullscreen',
      viewport: {
        viewports: {...INITIAL_VIEWPORTS, ...MINIMAL_VIEWPORTS, ...customViewports},
        defaultViewport: 'responsive',
      },
  }
})