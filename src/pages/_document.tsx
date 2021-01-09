import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ja">
        <Head></Head>
        <body>
          <Main />
          <script>
            window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {}
          </script>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
