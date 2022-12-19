import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';

export function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}
        /* noto-sans-kr-regular - latin */
        @font-face {
          font-family: 'Noto Sans KR';
          src: url('../fonts/noto-sans-kr-v27-latin-regular.eot'); /* IE9 Compat Modes */
          src: local(''),
            url('../fonts/noto-sans-kr-v27-latin-regular.eot?#iefix')
              format('embedded-opentype'),
            /* IE6-IE8 */ url('../fonts/noto-sans-kr-v27-latin-regular.woff2')
              format('woff2'),
            /* Super Modern Browsers */
              url('../fonts/noto-sans-kr-v27-latin-regular.woff') format('woff'),
            /* Modern Browsers */
              url('../fonts/noto-sans-kr-v27-latin-regular.ttf')
              format('truetype');
          /* Safari, Android, iOS */
        }

        /* archivo-black-regular - latin */
        @font-face {
          font-family: 'Archivo Black';
          src: url('../fonts/archivo-black-v17-latin-regular.eot'); /* IE9 Compat Modes */
          src: local(''),
            url('../fonts/archivo-black-v17-latin-regular.eot?#iefix')
              format('embedded-opentype'),
            /* IE6-IE8 */ url('../fonts/archivo-black-v17-latin-regular.woff2')
              format('woff2'),
            /* Super Modern Browsers */
              url('../fonts/archivo-black-v17-latin-regular.woff')
              format('woff'),
            /* Modern Browsers */
              url('../fonts/archivo-black-v17-latin-regular.ttf')
              format('truetype');
          /* Safari, Android, iOS */
          unicode-range: U+0041-005A, U+0061-007A;
        }

        body {
          font-family: 'Archivo Black', 'Noto Sans KR', sans-serif;
          font-size: 16px;
        }

        a {
          text-decoration: none;
        }

        body::-webkit-scrollbar {
          width: 16px;
        }

        body::-webkit-scrollbar-thumb {
          border-radius: 10px;
          height: 56px;
          background-clip: content-box;
        }

        body::-webkit-scrollbar-thumb:hover {
          background-color: #cbcbcb;
        }

        *,
        *::after,
        *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
          font-family: inherit;
        }

        button,
        input {
          font-family: 'Noto Sans KR', sans-serif;
        }
      `}
    />
  );
}
