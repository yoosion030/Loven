import styled from '@emotion/styled';

export const BoardTitle = styled.h1`
  font-size: 5rem;
`;

export const BoardCell = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    position: absolute;
    left: 40%;
    top: 33%;
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
