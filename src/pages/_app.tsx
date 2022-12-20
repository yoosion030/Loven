import type { AppProps } from 'next/app';
import { GlobalStyle } from 'shared/styles/GlobalStyle';
import { Logo, Layout } from 'components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <GlobalStyle />
      <Logo />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export default MyApp;
