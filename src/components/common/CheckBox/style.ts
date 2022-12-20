import styled from '@emotion/styled';

export const Label = styled.label`
  display: inline-block;
  position: relative;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    display: none;
  }

  /* Create a custom checkbox */
  .checkmark {
    display: block;
    position: relative;
    height: 20px;
    width: 20px;
    border: 3px solid #f98543;
    border-radius: 3px;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    width: 5px;
    height: 10px;
    left: 4px;
    top: 2px;
    border: solid #f98543;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
