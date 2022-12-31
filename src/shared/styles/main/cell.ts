import styled from '@emotion/styled';

export const Cell = styled.div`
  cursor: pointer;
  position: relative;
  padding: 6.7vh 7.6vh;
  &:hover {
    color: #ffffff;
    background-color: #000000;
    div {
      color: #ffffff;
      background-color: #000000;
    }
  }
`;

export const CellTitle = styled.h1`
  font-weight: 400;
  font-size: 4.5vh;
  line-height: 4.8vh;
`;

export const Desc = styled.p`
  font-family: 'Noto Sans KR';
  font-weight: 400;
  font-size: 1.8vh;
  line-height: 2.7vh;
  color: #808080;
`;

export const Count = styled.h2`
  margin-top: 2.7vh;
  text-align: right;
  font-size: 8.1vh;
`;

export const Participant = styled.p`
  width: 7.5rem;
  margin-left: auto;
  text-align: center;
`;
