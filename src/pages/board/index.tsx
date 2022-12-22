import axios from 'axios';
import { BoardPage } from 'components';
import { GetServerSideProps } from 'next';
import { PrizesType, PrizeType } from 'types/Prize';

const index = (prizes: PrizesType) => {
  return <BoardPage prizes={prizes} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const randomPrizes: PrizeType[] = [
    {
      id: 1,
      conferrer: '양세련',
      winner: '김경남',
      prize: '츤데레상츤데레상츤데레상',
      conferrer_group: '광주소프트웨어마이스터고등학교',
      content:
        '위 사람은 평소 겉은 차가워 보이지만위 사람은 평소 겉은 차가워 보이지만위 사람은 평소 겉은 차가워 보이지만위 사람은 평소 겉은 차가워 보이지만',
    },
  ];

  const directPrizes: PrizeType[] = (
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
