import styled from '@emotion/styled';

export const Prize = styled.div`
  font-family: 'Song Myung';
  width: 800px;
  height: 100vh;
  background: #ffffff;
  box-shadow: 2px 2px 100px 10px rgba(0, 0, 0, 0.25);
  background-image: url('background.png');
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 35px;
  background-position: center center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 90px;
  margin: 50px 0 100px;
  p {
    display: inline-block;
    margin-right: 30px;
  }
`;

export const WinnerSection = styled.div`
  display: flex;
  font-size: 40px;
  justify-content: space-between;
  height: 100px;
  padding: 0 140px;
  p {
    width: 40%;
  }

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
  height: 550px;
  line-height: 65px;
  padding: 0 120px;
`;

export const DateSection = styled.div`
  text-align: center;
  margin: 20px 0;
`;

export const ConferrerSection = styled.div`
  padding: 0 80px;
  display: flex;
  justify-content: center;
  gap: 40px;
  text-align: center;
`;
