import styled from '@emotion/styled';

export const Preview = styled.div`
  position: absolute;
  bottom: 3rem;
  z-index: 5;
  right: 11rem;
  height: 3.125rem;
  display: flex;
  cursor: pointer;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  &:hover {
    .icon {
      animation: rotate 1s linear infinite;
    }
  }
`;

export const PreviewDesc = styled.div`
  width: 9.375rem;
  height: 100%;
  background-color: #ffffff;
  border-bottom-left-radius: 3.125rem;
  border-top-left-radius: 3.125rem;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.25);
  line-height: 3.125rem;
  transform: translateX(30px);
  padding-left: 1.25rem;
`;

export const Icon = styled.div`
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.125rem;
  height: 100%;
  background-color: #000000;
  border-radius: 1.563rem;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.25);
`;
