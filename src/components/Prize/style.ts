import styled from '@emotion/styled';

export const Prize = styled.div`
  font-family: 'Song Myung';
  width: 73.5vh;
  height: 100vh;
  background: #ffffff;
  background-image: url('/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 3.1vh;
  background-position: center center;
  border-left: 1px solid #f98543;
  border-right: 1px solid #f98543;

  @media print {
    border: none;
  }

  @page {
    margin: 0;
  }
  body {
    margin: 1.6cm;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 9.5vh;
  margin: 3.2vh 6.7vh 7.5vh;
  p {
    display: inline-block;
    margin-right: 2.7vh;
  }
`;

export const WinnerSection = styled.div`
  display: flex;
  font-size: 3.6vh;
  justify-content: space-between;
  padding: 0 12.6vh;

  .winner {
    width: 30%;
    text-align: right;
  }
`;

export const ContentSection = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 49vh;
  line-height: 5.8vh;
  padding: 0 9.3vh;
  white-space: pre-line;
`;

export const DateSection = styled.div`
  text-align: center;
  margin: 1.8vh 0;
`;

export const ConferrerSection = styled.div`
  padding: 0 7.2vh;
  display: flex;
  justify-content: center;
  gap: 3.6vh;
  text-align: center;
`;
