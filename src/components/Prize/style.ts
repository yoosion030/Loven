import styled from '@emotion/styled';

export const Prize = styled.div`
  font-family: 'Song Myung';
  width: 50rem;
  height: 100vh;
  background: #ffffff;
  box-shadow: 2px 2px 6.25rem 10px rgba(0, 0, 0, 0.25);
  background-image: url('background.png');
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 2.188rem;
  background-position: center center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 5.625rem;
  margin: 3.125rem 0 6.25rem;
  p {
    display: inline-block;
    margin-right: 1.875rem;
  }
`;

export const WinnerSection = styled.div`
  display: flex;
  font-size: 2.5rem;
  justify-content: space-between;
  height: 6.25rem;
  padding: 0 8.75rem;
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
  height: 53.125rem;
  line-height: 4.063rem;
  padding: 0 7.5rem;
`;

export const DateSection = styled.div`
  text-align: center;
  margin: 1.25rem 0;
`;

export const ConferrerSection = styled.div`
  padding: 0 5rem;
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  text-align: center;
`;
