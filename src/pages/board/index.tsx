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
  const randomPrizes: RandomPrizeType[] = [
    {
      id: 1,
      conferrer: '양세련',
      winner: '유시온',
      random: {
        prize: '츤데레상',
        content: '위 사람은 평소 겉은 차가워 보이지만...',
        winner_kind: 'student',
      },
      conferrer_group: '광주소프트웨어마이스터고등학교',
      secret: false,
    },
  ];

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
