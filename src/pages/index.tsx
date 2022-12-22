import type { GetServerSideProps, NextPage } from 'next';
import { MainPage } from 'components';
import { CountType } from 'types/Count';
import { useEffect } from 'react';

const Home: NextPage<CountType> = count => {
  useEffect(() => {
    console.log('카운트 api 요청');
  }, []);
  return <MainPage count={count} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      randomCount: 24,
      DirectCount: 120,
    },
  };
};

export default Home;
