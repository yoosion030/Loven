import styled from '@emotion/styled';

export const NotFoundPage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1.25rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 1.25rem;
  z-index: 5;

  svg {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

export const Title = styled.h1`
  color: #f98543;
  font-size: 8.125rem;
  -webkit-text-stroke: 5px #000000;
`;

export const Desc = styled.p`
  line-height: 1.563rem;
  text-align: center;
`;
