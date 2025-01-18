import { CSSProperties } from 'react';

import { ThemeProperty } from '@/types/theme';

export const color: ThemeProperty<CSSProperties['color']> = {
  primary: '#FFC300',
  gray500: '797979',
  gray100: 'F6F6F6',
  gray200: 'D0D0D0',
  placeHolder: 'B3B3B3',
};

export const fontWeight: ThemeProperty<CSSProperties['fontWeight']> = {
  normal: '400',
  medium: '500', // NOTE: 기본 weight
  semibold: '600',
  bold: '700',
  bolder: '800',
};

export const borderRadius: ThemeProperty<CSSProperties['borderRadius']> = {
  basic: '1rem',
};

// NOTE: 1rem = 10px
export const fontSize: ThemeProperty<CSSProperties['fontSize']> = {
  small: '1.4rem',
  basic: '1.6rem',
  mediumSmall: '2.0rem',
  medium: '2.4rem',
  large: '3.2rem',
  h2: '4.8rem',
};

const theme = { color, fontWeight, borderRadius, fontSize } as const;

export default theme;
