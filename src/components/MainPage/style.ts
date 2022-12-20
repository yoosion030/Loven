import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 12.5rem;
  background-color: #000000;
`;

export const Grid = styled.div`
  flex: 1;
  display: grid;
  grid-gap: 2px;
  grid-template-rows: 3fr 2fr;
  grid-template-columns: 1fr 1fr 1fr;
  & div {
    background-color: #ffffff;
    border-radius: 1.25rem;
  }
`;
