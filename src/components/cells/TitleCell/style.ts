import styled from '@emotion/styled';

export const TitleCell = styled.div`
  display: flex;
  grid-column: 1 / span 3;
  padding: 9vh 7.2vh 0;
  justify-content: space-between;
  img {
    margin-top: auto;
    width: 47.3vh;
    height: 32.9vh;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  gap: 2.7vh;
  flex-direction: column;
  p {
    opacity: 1;
  }

  @keyframes fourthFadeIn {
    90% {
      opacity: 0;
      transform: translateY(10px);
    }

    from {
      opacity: 0;
    }
  }
  .desc {
    animation: fourthFadeIn 2s;
  }
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 6.3vh;
  line-height: 7.2vh;

  @keyframes firstFadeIn {
    30% {
      opacity: 0;
      transform: translateY(10px);
    }

    from {
      opacity: 0;
    }
  }

  @keyframes secondFadeIn {
    50% {
      opacity: 0;
      transform: translateY(10px);
    }

    from {
      opacity: 0;
    }
  }

  @keyframes thirdFadeIn {
    70% {
      opacity: 0;
      transform: translateY(10px);
    }

    from {
      opacity: 0;
    }
  }

  p {
    :nth-of-type(1) {
      animation: firstFadeIn 2s;
    }
    :nth-of-type(2) {
      animation: secondFadeIn 2s;
    }
    :nth-of-type(3) {
      animation: thirdFadeIn 2s;
    }
  }
`;
