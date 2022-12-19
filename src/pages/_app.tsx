import type { AppProps } from 'next/app';
import { GlobalStyle } from 'shared/styles/GlobalStyle';
import {} from '@next/font/local';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <GlobalStyle />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
