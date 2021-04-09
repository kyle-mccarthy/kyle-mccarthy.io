// import { dark } from '@theme-ui/presets';
import type { Theme } from 'theme-ui';
import { TinyColor } from '@ctrl/tinycolor';
import { dark } from '@theme-ui/presets';
import { merge } from 'theme-ui';

export const colors = {
  background: new TinyColor('#1C2227'),
  text: new TinyColor('#E7E7ED'),
  // primary: new TinyColor('#F76A75'),
  primary: new TinyColor('#E44740'),
  accent: new TinyColor('#FFCA00'),

  muted: new TinyColor('#586269'),
};

export const pallete = {
  background: colors.background.toHexString(),
  text: colors.text.toHexString(),
  primary: colors.primary.toHexString(),
  accent: colors.accent.toHexString(),
  muted: colors.background.lighten(15).toHexString(),
};

const theme: Theme = merge.all(dark, {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: pallete,
  fonts: {
    body: "'Raleway', Arial, Helvetica, sans-serif",
    heading: "'Fuji', Arial, Helvetica, sans-serif",
    monospace: "'Victor Mono', Menlo monospace",
  },
  fontWeights: {
    body: 400,
  },
  fontSize: {
    body: 16,
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      fontSize: 'body',
    },
    a: {
      // color: colors.red.toHexString(),
      display: 'inline-flex',
      alignItems: 'center',
    },
    hr: {
      color: 'muted',
    },
  },
  layout: {
    container: {
      maxWidth: 1024,
    },
    body: {
      // background: '#1f1f1f',
      minHeight: '100vh',
      display: 'flex',
    },
    sidebar: {
      // background: '#1a1a1a',
      padding: '48px 32px',
      maxWidth: 320,
    },
    content: {
      margin: '20px 80px',
    },
  },
  post: {
    container: {
      paddingTop: 4,
      paddingBottom: 4,

      borderBottomColor: 'muted',
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',
    },
    title: {
      fontSize: 7,
      display: 'block',
      marginBottom: 3,
      // color: 'primary',
      fontFamily: 'heading',
      lineHeight: 0.85,
      maxWidth: '600px',
      color: colors.primary.toRgbString(),
      textShadow: `3px 3px 0px ${colors.background.lighten(10).toRgbString()}`,
      // color: colors.accent.toRgbString(),
      // textShadow: `4px 4px 0px ${colors.primary.toHexString()}`,
    },
    meta: {
      fontSize: 0,
      marginBottom: 3,
      display: 'block',
      color: colors.text.setAlpha(0.8).toRgbString(),
    },
    summary: {
      marginBottom: 3,
      fontSize: 2,
      display: 'block',
    },
    link: {
      fontSize: 1,
      color: 'accent',
      ['& > a']: {
        color: 'inherit',
      },
    },
  },
}) as Theme;

export default theme;
