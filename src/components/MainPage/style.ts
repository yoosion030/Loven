import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 12.5rem 4.625rem;
  height: 100vh;
`;

export const LogoWrapper = styled.div`
  text-align: center;
  margin-bottom: 3em;
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

export const BoxTitle = styled.h1`
  font-weight: 400;
  font-size: 3.125rem;
  line-height: 3.375rem;
`;

export const BoardTitle = styled.h1`
  font-size: 5rem;
`;

export const TitleBox = styled.div`
  grid-column: 1 / span 3;
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
  gap: 30px;
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
  margin-top: 30px;
  text-align: right;
  font-size: 90px;
`;

export const Participant = styled.p`
  width: 120px;
  font-size: 12px;
  text-align: center;
  margin-left: auto;
`;

export const RandomBox = styled(Box)`
  svg {
    position: absolute;
    left: 20px;
    bottom: 0;
  }
`;

export const DirectBox = styled(Box)`
  svg {
    position: absolute;
    left: 0;
    bottom: 20px;
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
