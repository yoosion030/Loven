import { PrizePage } from 'components';
import { GetServerSideProps, NextPage } from 'next';
import { PrizeProps, PrizeType } from 'types/Prize';

const index: NextPage<PrizeProps> = ({ prize }) => {
  return <PrizePage prize={prize} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  console.log('직접 입력 상장 조회 api 요청');

  const prize: PrizeType = {
    id: 1,
    conferrer: '양세련',
    winner: '김경남',
    prize: '츤데레상',
    conferrer_group: '광주소프트웨어마이스터고등학교',
    content:
      '위 사람은 평소 겉은 차가워 보이지만위 사람은 평소 겉은 차가워 보이지만위 사람은 평소 겉은 차가워 보이지만위 사람은 평소 겉은 차가워 보이지만',
  };

  return {
    props: {
      prize,
    },
  };
};

export default index;
