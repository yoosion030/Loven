import styled from '@emotion/styled';

export const Prize = styled.div`
  font-family: 'Song Myung';
  width: 50rem;
  height: 100vh;
  background: #ffffff;
  background-image: url('/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 2.188rem;
  background-position: center center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 5.625rem;
  margin: 3rem 6.25rem;
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
  height: 34.375rem;
  line-height: 4.063rem;
  padding: 0 7.5rem;
  white-space: pre-line;
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
