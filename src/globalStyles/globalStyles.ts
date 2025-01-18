import { css } from '@emotion/react';

import reset from './reset';

const globalStyles = () => css`
  ${reset()}

  html {
    font-size: 62.5%; /*NOTE: 1rem = 10px을 위한 트릭*/
  }

  body {
    box-sizing: border-box;
    padding: 0;
    padding-right: 1.2rem;
    margin: 0;

    font-family: 'Pretendard Variable', 'Noto Sans', sans-serif;
    font-size: 1.6rem;
    word-break: keep-all;
  }
`;

export default globalStyles;
