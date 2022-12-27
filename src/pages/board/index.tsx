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
    await axios.get(`${process.env.BASE_URL}/random/board`)
  ).data;

  const directPrizes: DirectPrizeType[] = await (
    await axios.get(`${process.env.BASE_URL}/direct/board`)
  ).data;

  return {
    props: {
      randomPrizes,
      directPrizes,
    },
  };
};

export default index;
