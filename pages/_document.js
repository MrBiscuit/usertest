// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Add the Maze code snippet here */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function (m, a, z, e) {
                  var s, t;
                  try {
                    t = m.sessionStorage.getItem('maze-us');
                  } catch (err) {}
                  if (!t) {
                    t = new Date().getTime();
                    try {
                      m.sessionStorage.setItem('maze-us', t);
                    } catch (err) {}
                  }
                  s = a.createElement('script');
                  s.src = z + '?t=' + t + '&apiKey=' + e;
                  s.async = true;
                  a.getElementsByTagName('head')[0].appendChild(s);
                  m.mazeUniversalSnippetApiKey = e;
                })(window, document, 'https://snippet.maze.co/maze-universal-loader.js', '03da466a-f372-4a67-99a5-61e5418cadc8');
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
