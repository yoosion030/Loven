import styled from '@emotion/styled';
import { Cell } from 'shared/styles/board/cell';

export const PrizeCell = styled(Cell)`
  position: relative;
  overflow: scroll;
  flex: 1;
  overflow-x: hidden;
`;

export const BoardHeader = styled.div`
  display: flex;
  margin: 3.438rem 0;
`;

export const HeaderItem = styled.p`
  position: relative;
  z-index: 2;
  font-weight: bold;

  :nth-of-type(1) {
    width: 12.5rem;
  }
  :nth-of-type(2) {
    width: 12.5rem;
  }
  :nth-of-type(3) {
    width: 18.75rem;
  }
  :nth-of-type(4) {
    width: 25rem;
  }
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: fixed;
  right: 30vh;
`;

export const FilterState = styled.div`
  font-family: Noto Sans;
  width: 3.75rem;
  text-align: end;
`;
