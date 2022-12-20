import styled from '@emotion/styled';

export const RandomForm = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 130px 0 120px;

  svg {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

export const Form = styled.form`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;
  height: 100%;
  margin: 0 auto;
`;

export const ConferrerSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
