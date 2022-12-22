import styled from '@emotion/styled';

export const Grid = styled.div`
  display: grid;
  height: 100%;
  grid-gap: 2px;
  grid-template-rows: 1fr 6fr;
  position: relative;
`;

export const Background = styled.div`
  position: absolute;
  bottom: -2px;
  left: 200px;
`;
