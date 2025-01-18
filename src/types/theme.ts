import theme from '@/globalStyles/theme';
import '@emotion/react';

export type ThemeProperty<T> = {
  [key: string]: T;
};

export type ThemeType = typeof theme;
