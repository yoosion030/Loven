import styled from '@emotion/styled';
import { Cell } from 'shared/styles/board/cell';

export const PrizeCell = styled(Cell)``;

export const BoardHeader = styled.div`
  display: flex;
  margin-bottom: 55px;
`;

export const HeaderItem = styled.p`
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
