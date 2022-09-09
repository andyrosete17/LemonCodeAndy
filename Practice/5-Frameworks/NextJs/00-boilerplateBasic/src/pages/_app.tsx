import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '../common/theme/';

const App: FC<AppProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <ThemeProvider>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
};

export default App;

// esta documento es para tema de estilos globales y todo lo que quieres que sea generico para todos, es como el app.tsx
