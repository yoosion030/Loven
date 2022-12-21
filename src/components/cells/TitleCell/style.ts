import styled from '@emotion/styled';

export const TitleCell = styled.div`
  display: flex;
  grid-column: 1 / span 3;
  padding: 6.25rem 5rem 0;
  justify-content: space-between;
  img {
    margin-top: auto;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  gap: 1.875rem;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 4.375rem;
  line-height: 5rem;
`;
