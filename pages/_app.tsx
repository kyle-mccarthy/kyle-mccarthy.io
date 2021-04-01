import App from 'next/app';
import { ThemeProvider } from 'theme-ui';
import Layout from '../components/Layout';
import theme from '../theme';
import 'victormono';
import '@fontsource/raleway';
import '@fontsource/raleway/800.css';

export class AppExt extends App {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <style global jsx>
          {`
            @font-face {
              font-family: 'Fuji';
              src: url('/assets/fonts/Fuji-Regular.woff');
              font-style: normal;
              font-weight: 400;
              font-display: swap;
            }

            @font-face {
              font-family: 'Fuji';
              src: url('/assets/fonts/Fuji-Medium.woff');
              font-style: normal;
              font-weight: 500;
              font-display: swap;
            }

            @font-face {
              font-family: 'Fuji';
              src: url('/assets/fonts/Fuji-Bold.woff');
              font-style: normal;
              font-weight: 600;
              font-display: swap;
            }

            @font-face {
              font-family: 'Special';
              src: url('/assets/pangram/Fuji-Bold.woff');
              font-style: normal;
              font-weight: 400;
              font-display: swap;
            }
            @font-face {
              font-family: 'Special3';
              src: url('/assets/pangram/Stellar-Bold.otf');
              font-style: normal;
              font-weight: 400;
              font-display: swap;
            }

            @font-face {
              font-family: 'Special2';
              src: url('/assets/pangram/bitmap/NeueBit-Bold.woff');
              font-style: normal;
              font-weight: 600;
              font-display: swap;
            }

            @font-face {
              font-family: 'Special4';
              src: url('/assets/pangram/bitmap/Mondwest-Bold.woff');
              font-style: normal;
              font-weight: 600;
              font-display: swap;
            }

            @font-face {
              font-family: 'Alt';
              src: url('/assets/pangram/bitmap/NeueBit-Bold.woff');
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
