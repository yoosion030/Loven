import styled from '@emotion/styled';

export const TextareaSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Label = styled.p`
  margin-bottom: 1.25rem;
  font-weight: bold;
`;

export const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  flex: 1;
  background: #f1f1f1;
  border-radius: 1.25rem;
  padding: 1.875rem;
  border: none;
  outline: none;

  &:focus {
    box-shadow: 0 0 0 2px #f98543 inset;
  }
`;
