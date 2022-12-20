import styled from '@emotion/styled';
import { Cell } from 'shared/styles/direct/cell';

export const Grid = styled.form`
  height: 100%;
  display: grid;
  grid-gap: 2px;
  grid-template-rows: 4fr 1fr;
  grid-template-columns: 1fr 1fr;
`;

export const PersonCell = styled(Cell)``;

export const PrizeCell = styled(Cell)``;

export const ButtonCell = styled(Cell)`
  grid-column: 1 / span 2;
`;
