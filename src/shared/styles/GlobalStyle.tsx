import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';

export function GlobalStyle() {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'Archivo Black';
          src: url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
          unicode-range: U+0041-005A, U+0061-007A;
        }

        @font-face {
          font-family: 'Noto Sans KR';
          src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
          unicode-range: U+AC00-D7A3;
        }

        ${emotionReset}

        body {
          font-family: 'Archivo Black', 'Noto Sans KR', sans-serif;
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
        }

        button,
        input {
          font-family: 'Noto Sans KR', sans-serif;
        }
      `}
    />
  );
}
