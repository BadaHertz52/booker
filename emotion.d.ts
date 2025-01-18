/*eslint-disable*/
import '@emotion/react';
import { ThemeType } from '@/types/theme';

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
