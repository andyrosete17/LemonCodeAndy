 
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CacheProvider } from '@emotion/react';
import { cache } from '@emotion/css';
import createEmotionServer from '@emotion/server/create-instance';

const { extractCritical } = createEmotionServer(cache);
// Para evitar los saltos de estilo cuando hace la carga, se usa
// Esto se ejecuta en el servidor, y lo que hace es indicar que se espere a que se cargue el css antes de renderizar la pagina

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          (
            <CacheProvider value={cache}>
              <App {...props} />
            </CacheProvider>
          ),
      });
    const initialProps = await Document.getInitialProps(ctx);
    const { css, ids } = extractCritical(initialProps.html);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-emotion={`${cache.key} ${ids.join(' ')}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        </>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
