import styled from '@emotion/styled';
import { Cell } from 'shared/styles/direct/cell';

export const Grid = styled.form`
  height: 100%;
  display: grid;
  grid-gap: 2px;
  grid-template-rows: 5fr 2fr;
  grid-template-columns: 1fr 1fr;
`;

export const PersonCell = styled(Cell)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ConferrerSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const PrizeCell = styled(Cell)`
  display: flex;
  flex-direction: column;
`;

export const ButtonCell = styled(Cell)`
  padding: 40px 0;
  text-align: center;
  grid-column: 1 / span 2;
`;

export const ButtonWrapper = styled.div`
  width: 500px;
  margin: 0 auto;
`;
