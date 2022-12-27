import axios from 'axios';
import { PrizePage } from 'components';
import { GetServerSideProps, NextPage } from 'next';
import { PrizeProps, PrizeType } from 'types/Prize';

const index: NextPage<PrizeProps> = ({ prize }) => {
  return <PrizePage prize={prize} />;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const prize: PrizeType = (
    await axios.get(`${process.env.BASE_URL}/direct/detail/${params?.id}`)
  ).data;

  return {
    props: {
      prize,
    },
  };
};

export default index;
