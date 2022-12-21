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
  gap: 1.875rem;
`;

export const PrizeCell = styled(Cell)`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
`;

export const ButtonCell = styled(Cell)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.875rem;
  padding: 2.5rem 0;
  text-align: center;
  grid-column: 1 / span 2;
`;

export const CheckboxSection = styled.label`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const ButtonWrapper = styled.div`
  width: 31.25rem;
  margin: 0 auto;
`;

export const PrizeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #0000000e;
  z-index: 7;
`;
