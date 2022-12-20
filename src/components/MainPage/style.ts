import styled from '@emotion/styled';

export const Grid = styled.div`
  height: 100%;
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
