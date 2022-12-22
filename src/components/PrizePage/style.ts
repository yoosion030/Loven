import styled from '@emotion/styled';

export const PrizePage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  /* margin: 0 auto; */

  * {
    -webkit-print-color-adjust: exact !important; /* Chrome, Safari 6 – 15.3, Edge */
    color-adjust: exact !important; /* Firefox 48 – 96 */
    print-color-adjust: exact !important;
  }
`;
