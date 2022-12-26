import axios from 'axios';
import { PrizePage } from 'components';
import { GetServerSideProps, NextPage } from 'next';
import { PrizeProps, PrizeType } from 'types/Prize';

const index: NextPage<PrizeProps> = ({ prize }) => {
  return <PrizePage prize={prize} />;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const prize: PrizeType = (
    await axios.get(`http://10.82.17.155:8000/random/detail/${params?.id}`)
  ).data;

  return {
    props: {
      prize,
    },
  };
};

export default index;
