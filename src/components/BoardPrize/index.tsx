import { PrizeType } from 'types/Prize';
import * as S from './style';
import { useRouter } from 'next/router';

interface BoardPrizeProps {
  prize: PrizeType;
  filter: 'random' | 'direct';
}

const BoardPrize: React.FC<BoardPrizeProps> = ({ prize, filter }) => {
  const { push } = useRouter();
  return (
    <S.BoardPrize onClick={() => push(`${filter + '/' + prize.id}`)}>
      <S.BoardPrizeItem>{prize.winner}</S.BoardPrizeItem>
      <S.BoardPrizeItem>{prize.conferrer}</S.BoardPrizeItem>
      <S.BoardPrizeItem>{prize.prize}</S.BoardPrizeItem>
      <S.BoardPrizeItem>{prize.content}</S.BoardPrizeItem>
    </S.BoardPrize>
  );
};

export default BoardPrize;
