import styled from '@emotion/styled';

export const Label = styled.p`
  margin-bottom: 1.25rem;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  height: 3.75rem;
  outline: none;
  border-radius: 10px;
  background: #f1f1f1;
  border: none;
  padding: 0 2.5rem;

  &:focus {
    box-shadow: 0 0 0 2px #f98543 inset;
  }
`;
