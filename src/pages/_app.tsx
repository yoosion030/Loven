import type { AppProps } from 'next/app';
import { GlobalStyle } from 'shared/styles/GlobalStyle';
import { Archivo_Black, Noto_Sans } from '@next/font/google';

export const archive_black = Archivo_Black({
  weight: ['400'],
  variable: '--font-archivo_black',
  subsets: ['latin'],
});
export const noto_sans = Noto_Sans({ weight: ['400'] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <GlobalStyle />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
