import '@emotion/react';
import { Theme as ThemeType } from '../../../theme';

export {};

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ThemeType {}
}
