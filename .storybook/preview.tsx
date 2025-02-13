import React from 'react';

import type { Preview } from '@storybook/react';

import '@/styles/variables.scss';
import '@/styles/globals.scss';
import '@/styles/reset.scss';

const GlobalStyles = `
  @font-face {
    font-family: 'Pretendard';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff2');
    font-display: swap;
  }

  body {
    font-family: 'Pretendard',  sans-serif;
  }
  .storyWrapper{
   margin: 2.4rem 
   
  }
`;

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        { name: 'White', value: '#ffffff' },
        { name: 'Dark', value: '#000' },
        { name: 'Light', value: '#f9f9f9' },
      ],
      default: 'Light',
    },
  },
  decorators: [
    (Story) => (
      <div>
        <style>{GlobalStyles}</style>
        <div className="storyWrapper">{Story()}</div>
      </div>
    ),
  ],
};

export default preview;
