import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle } from 'shared/styles/GlobalStyle';
import { Logo, Layout } from 'components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Head>
        <title>Loven</title>
      </Head>
      <GlobalStyle />
      <Logo />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export default MyApp;
