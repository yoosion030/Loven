import axios from 'axios';
import { PrizePage } from 'components';
import { GetServerSideProps, NextPage } from 'next';
import { PrizeProps, PrizeType } from 'types/Prize';

const index: NextPage<PrizeProps> = ({ prize }) => {
  return <PrizePage prize={prize} />;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const prize: PrizeType = (
      await axios.get(`${process.env.BASE_URL}/direct/detail/${params?.id}`)
    ).data;

    return {
      props: {
        prize,
      },
    };
  } catch (e) {
    const prize = {
      conferrer: '',
      winner: '',
      prize: '',
      conferrer_group: '',
      content: '잘못된 요청입니다.',
    };

    return {
      props: {
        prize,
      },
    };
  }
};

export default index;
