import * as S from './style';
import { BoardPrize } from 'components';
import { DirectType } from 'types/Direct';
import { RadomPrizeType } from 'types/Random';

const PrizeCell = () => {
  const prizes: RadomPrizeType[] = [
    {
      id: 1,
      conferrer: '양세련',
      winner: '김경남',
      prize: '츤데레상츤데레상츤데레상',
      conferrer_group: '광주소프트웨어마이스터고등학교',
      content:
        '위 사람은 평소 겉은 차가워 보이지만위 사람은 평소 겉은 차가워 보이지만위 사람은 평소 겉은 차가워 보이지만위 사람은 평소 겉은 차가워 보이지만',
      winner_kind: 'teacher',
    },
    {
      id: 2,
      conferrer: '양세련',
      winner: '양세련',
      prize: '명상',
      content: '수업시간에 그만 좀 자asdfasjhfsdabnmgsdhljkbdgk',
      conferrer_group: '광주소프트웨어마이스터고등학교',
      winner_kind: 'student',
    },
  ];

  return (
    <S.PrizeCell>
      <S.BoardHeader>
        <S.HeaderItem>수여자</S.HeaderItem>
        <S.HeaderItem>수상자</S.HeaderItem>
        <S.HeaderItem>상 이름</S.HeaderItem>
        <S.HeaderItem>내용</S.HeaderItem>
      </S.BoardHeader>
      {prizes.map((prize: RadomPrizeType, i) => (
        <BoardPrize prize={prize} key={i} />
      ))}
    </S.PrizeCell>
  );
};

export default PrizeCell;
