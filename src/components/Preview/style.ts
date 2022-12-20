import styled from '@emotion/styled';

export const Preview = styled.div`
  position: absolute;
  bottom: 3rem;
  z-index: 5;
  right: 11rem;
  height: 50px;
  display: flex;
  cursor: pointer;

  @keyframes slide {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-150px);
    }
  }

  &:hover {
    .desc {
      display: block;
    }
  }
`;

export const PreviewDesc = styled.div`
  display: none;
  width: 170px;
  height: 100%;
  background-color: #ffffff;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.25);
  line-height: 50px;
  text-align: center;
  transform: translateX(30px);
`;

export const Icon = styled.div`
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100%;
  background-color: #000000;
  border-radius: 25px;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.25);
`;
