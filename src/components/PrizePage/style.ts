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

export const BackButton = styled.button`
  position: absolute;
  left: 20px;
  top: 20px;
  z-index: 5;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
`;

export const PrintButton = styled.button`
  position: absolute;
  width: 246px;
  height: 3.75rem;
  background-color: #f98543;
  color: #ffffff;
  border: none;
  border-radius: 100px;
  font-size: 1.25rem;
  cursor: pointer;
  font-weight: 600;
  left: 1700px;
  top: 1002px;

  @media print {
    display: none;
  }
`;
