// import { dark } from '@theme-ui/presets';
import type { Theme as ThemeUITheme } from "theme-ui";
import { TinyColor } from "@ctrl/tinycolor";
import { dark } from "@theme-ui/presets";
import { merge } from "theme-ui";

export const colors = {
  background: new TinyColor("#1C2227"),
  text: new TinyColor("#E7E8ED"),
  // primary: new TinyColor('#F76A75'),
  primary: new TinyColor("#E44740"),
  accent: new TinyColor("#FFCA00"),

  muted: new TinyColor("#3C4853"),
};

export const pallete = {
  background: colors.background.toHexString(),
  text: colors.text.toHexString(),
  primary: colors.primary.toHexString(),
  accent: colors.accent.toHexString(),
  muted: colors.muted.toHexString(),
};

const overrides = {
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
  breakpoints: ["40em", "56em", "64em"],
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: "16px",
    },
    a: {
      // color: colors.red.toHexString(),
      display: "inline-flex",
      alignItems: "center",
    },
    hr: {
      color: "muted",
    },
  },
  layout: {
    container: {
      maxWidth: 1024,
      ["@media(max-width:1024px)"]: {
        paddingLeft: 2,
        paddingRight: 2,
      },
    },
    body: {
      // background: '#1f1f1f',
      minHeight: "100vh",
      display: "flex",
    },
    sidebar: {
      // background: '#1a1a1a',
      padding: "48px 32px",
      maxWidth: 320,
    },
    content: {
      margin: "20px 80px",
    },
  },
  svg: {
    icon: {
      fill: "currentColor",
      width: "1em",
      height: "1em",
      display: "inline-block",
      transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      flexShrink: 0,
      userSelect: "none",
    },

    logo: {
      fill: pallete.text,
      width: "47px",
      height: "38px",
      display: "inline-block",
      transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      flexShrink: 0,
      userSelect: "none",
    },
  },
  text: {
    muted: {
      color: colors.text.setAlpha(0.8).toRgbString(),
    },
  },
};

const theme = merge.all(dark as ThemeUITheme, overrides);

export type Theme = typeof theme;

export default theme;
