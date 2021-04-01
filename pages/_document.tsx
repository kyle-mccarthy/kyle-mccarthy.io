// src/pages/_document.js
import Document, {
  Html,
  Head,
  DocumentContext,
  Main,
  NextScript,
} from 'next/document';
import { InitializeColorMode } from 'theme-ui';

export default class extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    // Replace html lang attribute value with your language.
    return (
      <Html>
        <Head />
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
