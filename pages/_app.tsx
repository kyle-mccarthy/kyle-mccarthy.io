import App from 'next/app';
import { Global } from '@emotion/core';
import AppContext from '../components/AppContext';
import theme from '../theme';
import Head from 'next/head';
import 'normalize.css';

export default class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Muli:300,400,500,700,800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Global
          styles={{
            body: {
              background: theme.background.main,
              color: theme.text.main,
              fontFamily: "'Muli', sans-serif"
            }
          }}
        />
        <AppContext>
          <Component {...pageProps} />
        </AppContext>
      </>
    );
  }
}
