import * as S from './style';
import { BoardPrize } from 'components';
import { PrizeType } from 'types/Prize';
import * as I from 'assets/svg';
import { useState } from 'react';

const PrizeCell = () => {
  const [filter, setFilter] = useState<'random' | 'direct'>('direct');
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

  const directPrizes: PrizeType[] = [
    {
      id: 1,
      conferrer: '양세련',
      winner: '김경남',
      prize: '츤데레상츤데레상츤데레상',
      conferrer_group: '광주소프트웨어마이스터고등학교',
      content:
        '위 사람은 평소 겉은 차가워 보이지만위 사람은 평소 겉은 차가워 보이지만위 사람은 평소 겉은 차가워 보이지만위 사람은 평소 겉은 차가워 보이지만',
    },
    {
      id: 2,
      conferrer: '양세련',
      winner: '양세련',
      prize: '명상',
      content: '수업시간에 그만 좀 ',
      conferrer_group: '광주소프트웨어마이스터고등학교',
    },
  ];

  return (
    <S.PrizeCell>
      <S.Filter
        onClick={() =>
          setFilter(() => (filter === 'direct' ? 'random' : 'direct'))
        }
      >
        <I.FilterIcon />
        <S.FilterState>{filter}</S.FilterState>
      </S.Filter>
      <S.BoardHeader>
        <S.HeaderItem>수여자</S.HeaderItem>
        <S.HeaderItem>수상자</S.HeaderItem>
        <S.HeaderItem>상 이름</S.HeaderItem>
        <S.HeaderItem>내용</S.HeaderItem>
      </S.BoardHeader>

      {filter === 'direct'
        ? directPrizes.map((prize: PrizeType) => (
            <BoardPrize prize={prize} key={prize.id} filter={filter} />
          ))
        : randomPrizes.map((prize: PrizeType) => (
            <BoardPrize prize={prize} key={prize.id} filter={filter} />
          ))}
    </S.PrizeCell>
  );
};

export default PrizeCell;
