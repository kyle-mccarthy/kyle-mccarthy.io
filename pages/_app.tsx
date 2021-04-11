import App from "next/app";
import { ThemeProvider } from "theme-ui";
import Layout from "../components/Layout";
import theme from "../theme";
import "victormono";
import "@fontsource/raleway";
import "@fontsource/raleway/800.css";

export class AppExt extends App {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <style global jsx>
          {`
            @font-face {
              font-family: "Fuji";
              src: url("/assets/fonts/Fuji-Regular.woff");
              font-style: normal;
              font-weight: 400;
              font-display: swap;
            }

            @font-face {
              font-family: "Fuji";
              src: url("/assets/fonts/Fuji-Medium.woff");
              font-style: normal;
              font-weight: 500;
              font-display: swap;
            }

            @font-face {
              font-family: "Fuji";
              src: url("/assets/fonts/Fuji-Bold.woff");
              font-style: normal;
              font-weight: 600;
              font-display: swap;
            }
          `}
        </style>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </>
    );
  }
}

export default AppExt;
