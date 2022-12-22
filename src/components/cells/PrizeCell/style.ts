import styled from '@emotion/styled';
import { Cell } from 'shared/styles/board/cell';

export const PrizeCell = styled(Cell)`
  position: relative;
  overflow: scroll;
  height: auto;
`;

export const BoardHeader = styled.div`
  display: flex;
  margin: 55px 0;
`;

export const HeaderItem = styled.p`
  position: relative;
  z-index: 2;
  font-weight: bold;

  :nth-of-type(1) {
    width: 200px;
  }
  :nth-of-type(2) {
    width: 200px;
  }
  :nth-of-type(3) {
    width: 300px;
  }
  :nth-of-type(4) {
    width: 400px;
  }
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  right: 80px;
`;

export const FilterState = styled.div`
  font-family: Noto Sans;
  width: 60px;
  text-align: end;
`;
