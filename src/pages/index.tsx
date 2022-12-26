import type { GetServerSideProps, NextPage } from 'next';
import { MainPage } from 'components';
import { CountDataType, CountType } from 'types/Count';
import { useEffect } from 'react';
import axios from 'axios';

const Home: NextPage<CountType> = count => {
  useEffect(() => {
    console.log('카운트 api 요청');
  }, []);
  return <MainPage count={count} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data }: CountDataType = await axios.get(
    `http://10.82.17.155:8000/prize/count`,
  );

  return {
    props: {
      random: data.random,
      direct: data.direct,
    },
  };
};

export default Home;
