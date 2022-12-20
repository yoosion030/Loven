import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 12.5rem 4rem;
  height: 100vh;
`;

export const LogoWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const Grid = styled.div`
  flex: 1;
  display: grid;
  padding: 2px;
  grid-gap: 2px;
  grid-template-rows: 3fr 2fr;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #000000;
  & div {
    background-color: #ffffff;
    border-radius: 1.25rem;
  }
`;

export const TitleBox = styled.div`
  grid-column: 1 / span 3;
  padding: 6.25rem 5rem;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 4.375rem;
  line-height: 5rem;
`;

export const BoxTitle = styled.h1`
  font-weight: 400;
  font-size: 3.125rem;
  line-height: 3.375rem;
`;

export const BoardTitle = styled.h1`
  font-size: 5rem;
`;

export const Desc = styled.p`
  font-family: 'Noto Sans KR';
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: #808080;
`;

export const Box = styled.div`
  cursor: pointer;
  position: relative;
  gap: 1.875rem;
  padding: 4.688em 5.313em;
  &:hover {
    color: #ffffff;
    background-color: #000000;
    div {
      color: #ffffff;
      background-color: #000000;
    }
  }
`;

export const Count = styled.h2`
  margin-top: 1.875rem;
  text-align: right;
  font-size: 5.625rem;
`;

export const Participant = styled.p`
  width: 7.5rem;
  font-size: 0.75rem;
  text-align: center;
  margin-left: auto;
`;

export const RandomBox = styled(Box)`
  svg {
    position: absolute;
    left: 1.25rem;
    bottom: 0;
  }
`;

export const DirectBox = styled(Box)`
  svg {
    position: absolute;
    left: 0;
    bottom: 1.25rem;
  }
`;

export const BoardBox = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    position: absolute;
    left: 40%;
    top: 33%;
  }

  &:hover {
    color: #ffffff;
    background-color: #000000;
    div {
      color: #ffffff;
      background-color: #000000;
    }
    svg > path {
      fill: #ffffff;
    }
  }
`;
