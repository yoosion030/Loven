import styled from '@emotion/styled';

export const Cell = styled.div`
  cursor: pointer;
  position: relative;
  gap: 1.875rem;
  padding: 4.688em 5.313em;
  &:hover {
    color: #ffffff;
    background-color: #000000;
    div {
      color: #ffffff;
      background-color: #000000;
    }
  }
`;

export const CellTitle = styled.h1`
  font-weight: 400;
  font-size: 3.125rem;
  line-height: 3.375rem;
`;

export const Desc = styled.p`
  font-family: 'Noto Sans KR';
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: #808080;
`;

export const Count = styled.h2`
  margin-top: 1.875rem;
  text-align: right;
  font-size: 5.625rem;
`;

export const Participant = styled.p`
  width: 120px;
  margin-left: auto;
  text-align: center;
`;
