import styled from '@emotion/styled';

export const Label = styled.p`
  margin-bottom: 20px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  height: 60px;
  outline: none;
  border-radius: 10px;
  background: #f1f1f1;
  border: none;
  padding: 0 40px;

  &:focus {
    box-shadow: 0 0 0 2px #f98543 inset;
  }
`;
