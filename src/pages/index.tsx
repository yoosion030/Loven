import type { GetServerSideProps, NextPage } from 'next';
import { MainPage } from 'components';
import { CountDataType, CountType } from 'types/Count';
import { useEffect } from 'react';
import axios from 'axios';

const Home: NextPage<CountType> = count => {
  return <MainPage count={count} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data }: CountDataType = await axios.get(
      `http://10.82.17.155:8001/prize/count`,
    );

    return {
      props: {
        random: data.random.toString().padStart(2, '0'),
        direct: data.direct.toString().padStart(2, '0'),
      },
    };
  } catch (e) {
    return {
      props: {
        random: 0,
        direct: 0,
      },
    };
  }
};

export default Home;
