import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 12.5rem 4rem;
  height: 100vh;
`;

export const Grid = styled.div`
  flex: 1;
  display: grid;
  padding: 2px;
  grid-gap: 2px;
  grid-template-rows: 3fr 2fr;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #000000;
  & div {
    background-color: #ffffff;
    border-radius: 1.25rem;
  }
`;
