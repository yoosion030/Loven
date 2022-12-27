import * as S from './style';
import { BoardPrize } from 'components';
import { PrizesType } from 'types/Prize';
import * as I from 'assets/svg';
import { useState } from 'react';
import { DirectPrizeType } from 'types/Direct';
import { RandomPrizeType } from 'types/Random';

const PrizeCell: React.FC<PrizesType> = ({ randomPrizes, directPrizes }) => {
  const [filter, setFilter] = useState<'random' | 'direct'>('direct');

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
        ? directPrizes?.map((prize: DirectPrizeType) => (
            <BoardPrize prize={prize} key={prize.id} filter={filter} />
          ))
        : randomPrizes?.map((prize: RandomPrizeType) => (
            <BoardPrize prize={prize} key={prize.id} filter={filter} />
          ))}
    </S.PrizeCell>
  );
};

export default PrizeCell;
