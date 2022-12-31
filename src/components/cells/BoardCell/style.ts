import styled from '@emotion/styled';

export const BoardTitle = styled.h1`
  font-size: 7.2vh;
`;

export const BoardCell = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    top: 12vh;
    position: absolute;
    left: 23vh;
    width: 20vh;
    height: 7.3vh;
  }

  &:hover {
    color: #ffffff;
    background-color: #000000;
    div {
      color: #ffffff;
      background-color: #000000;
    }
    svg > path {
      fill: #ffffff;
    }
  }
`;
