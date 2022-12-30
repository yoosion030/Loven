import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';

export function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}

        html {
          font-size: 16px;
          @media screen and (max-width: 1800px) {
            font-size: 12px;
          }
          @media screen and (max-width: 640px) {
            font-size: 8px;
          }
        }

        body {
          font-family: 'Archivo Black', 'Noto Sans KR', 'Song Myung', sans-serif;
        }

        main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          padding: 2rem 10vw;
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
        input,
        textarea {
          font-family: 'Noto Sans KR', sans-serif;
        }
      `}
    />
  );
}
