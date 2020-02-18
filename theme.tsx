import { TinyColor } from '@ctrl/tinycolor';

const background = new TinyColor('#121212');
const border = new TinyColor('#343434');
const error = new TinyColor('#CF6679');
const black = new TinyColor('#000000');
const white = new TinyColor('#FFFFFF');
const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};

const primary = new TinyColor('#5ed2ec');
const secondary = new TinyColor('#5eecbf');

const emphasisMap = { main: 0.87, secondary: 0.6, disabled: 0.38 };

const spacing = (...args: number[]) => {
  if (args.length === 1) {
    return args[0] * 8;
  }
  return args.map(a => `${a * 8}px`).join(' ');
};

// text contrast should be 15.8:1
// standard is 4.5:1

export const theme = {
  background: {
    color: background,
    main: background.toHexString()
  },
  colors: {
    white,
    primary,
    secondary
  },
  elevation: {
    0: background.lighten(0).toHexString(),
    1: background.lighten(3).toHexString(),
    2: background.lighten(5).toHexString(),
    3: background.lighten(7).toHexString(),
    5: background.lighten(8).toHexString(),
    6: background.lighten(9).toHexString(),
    // 5: background.lighten(10).toHexString(),
    8: background.lighten(11).toHexString(),
    // 7: background.lighten(11.5).toHexString(),
    12: background.lighten(12).toHexString(),
    // 9: background.lighten(12.5).toHexString(),
    // 10: background.lighten(13).toHexString(),
    // 11: background.lighten(13.5).toHexString(),
    16: background.lighten(14).toHexString(),
    // 13: background.lighten(14.25).toHexString(),
    // 14: background.lighten(14.5).toHexString(),
    // 15: background.lighten(14.75).toHexString(),
    18: background.lighten(15).toHexString(),
    24: background.lighten(16).toHexString()
  },
  pallete: {
    background: {
      main: background.toHexString(),
      on: white.toHexString()
    },
    surface: {
      main: background.toHexString(),
      on: white.toHexString()
    },
    error: {
      main: error.toHexString(),
      on: black.toHexString()
    },
    primary: {
      on: black.toHexString()
    }
  },
  text: {
    /* high: white.mix(background, 13).toHexString(), */
    /* medium: white.mix(background, 40).toHexString(), */
    /* disabled: white.mix(background, 62).toHexString() */
    main: white.setAlpha(0.87).toString() as string,
    secondary: white.setAlpha(0.6).toString() as string,
    disabled: white.setAlpha(0.38).toString() as string
  },
  emphasis: (
    color: TinyColor,
    variant: 'main' | 'secondary' | 'disabled' = 'main'
  ) => {
    return color.setAlpha(emphasisMap[variant]).toString() as string;
  },
  alpha: (color: TinyColor, alpha: number) => {
    return color.setAlpha(alpha);
  },
  breakpoints: {
    values: breakpoints,
    down: (bp: 'xs' | 'sm' | 'md' | 'lg' | number) =>
      `@media(min-width: ${typeof bp === 'string' ? breakpoints[bp] : bp}px)`,
    up: (bp: 'xs' | 'sm' | 'md' | 'lg' | number) =>
      `@media(max-width: ${typeof bp === 'string' ? breakpoints[bp] : bp}px)`
  },
  spacing,
  typography: {
    h1: {
      marginTop: 0
    },
    h2: {
      marginTop: 0
    },
    h3: {
      marginTop: 0
    },
    h4: {
      marginTop: 0
    },
    h5: {
      marginTop: 0
    },
    h6: {
      marginTop: 0
    },
    body: {
      marginTop: 0,
      lineHeight: 1.35,
      fontWeight: 300
    },
    body2: { marginTop: 0 },
    span: {
      marginTop: 0,

      display: 'block'
    },
    subtitle2: {
      marginTop: 0,
      textTransform: 'uppercase',
      fontSize: 14,
      fontWeight: 800,
      letterSpacing: 1
    }
  },
  divider: white.setAlpha(0.24).toString() as string
};

export default theme;
