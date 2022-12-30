import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle } from 'shared/styles/GlobalStyle';
import { Logo, Layout } from 'components';

function MyApp({ Component, pageProps }: AppProps) {
  const TEAM = '히죽팀';
  const URL = 'https://loven.vercel.app';
  const OG_IMAGE = '';
  const PROJECT_NAME = 'Loven';
  const DESC = '간단 상장 제작 서비스 Loven 입니다.';

  return (
    <main>
      <Head>
        <title>Loven</title>
        <meta
          name="google-site-verification"
          content="wP0hduGgCyQtm7VRO927Vh5HLMo7wo1jSmg47PmE240"
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="광주소프트웨어마이스터고등학교,간단 상장 제작,Loven"
        />
        <meta name="author" content={TEAM} />
        <meta name="description" content={DESC} />

        <meta name="og:title" content={PROJECT_NAME} />
        <meta name="og:site_name" content={PROJECT_NAME} />
        <meta name="og:description" content={DESC} />
        <meta name="og:type" content="website" />
        <meta name="og:url" content={URL} />
        <meta property="og:image" content={OG_IMAGE} />

        <meta name="twitter:title" content={PROJECT_NAME} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={URL} />
        <meta name="twitter:creator" content={TEAM} />
        <meta name="twitter:image" content={OG_IMAGE} />
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
