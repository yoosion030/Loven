import axios from 'axios';
import { BoardPage } from 'components';
import { GetServerSideProps } from 'next';
import { PrizesType } from 'types/Prize';
import { RandomPrizeType } from 'types/Random';
import { DirectPrizeType } from 'types/Direct';

const index = (prizes: PrizesType) => {
  return <BoardPage prizes={prizes} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const randomPrizes: RandomPrizeType[] = (
    await axios.get('http://10.82.17.155:8000/random/board')
  ).data;

  const directPrizes: DirectPrizeType[] = (
    await axios.get('http://10.82.17.155:8000/direct/board')
  ).data;

  return {
    props: {
      randomPrizes,
      directPrizes,
    },
  };
};

export default index;
