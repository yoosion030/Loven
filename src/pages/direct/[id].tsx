import axios from 'axios';
import { PrizePage } from 'components';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { PrizeProps, PrizeType } from 'types/Prize';

const index: NextPage<PrizeProps> = ({ prize }) => {
  return <PrizePage prize={prize} />;
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext,
) => {
  const prize: PrizeType = (
    await axios.get(`http://10.82.17.155:8000/direct/detail/${ctx.params?.id}`)
  ).data;

  return {
    props: {
      prize,
    },
  };
};

export default index;
