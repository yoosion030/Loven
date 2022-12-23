import styled from '@emotion/styled';

export const TitleCell = styled.div`
  display: flex;
  grid-column: 1 / span 3;
  padding: 6.25rem 5rem 0;
  justify-content: space-between;
  img {
    margin-top: auto;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  gap: 1.875rem;
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
  font-size: 4.375rem;
  line-height: 5rem;

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
