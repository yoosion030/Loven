import styled from '@emotion/styled';

export const RandomForm = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  background-color: #ffffff;
  border-radius: 1.25rem;
  padding: 8.125rem 0 7.5rem;

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
  width: 31.25rem;
  height: 100%;
  margin: 0 auto;
`;

export const ConferrerSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
`;

export const PrizeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #0000000e;
  z-index: 7;
`;
