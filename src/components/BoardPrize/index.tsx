import { RadomPrizeType } from 'types/Random';
import * as S from './style';
import { useRouter } from 'next/router';

interface BoardPrizeProps {
  prize: RadomPrizeType;
}

const BoardPrize: React.FC<BoardPrizeProps> = ({ prize }) => {
  const { push } = useRouter();
  return (
    <S.BoardPrize onClick={() => push(`${prize.id}`)}>
      <S.BoardPrizeItem>{prize.winner}</S.BoardPrizeItem>
      <S.BoardPrizeItem>{prize.conferrer}</S.BoardPrizeItem>
      <S.BoardPrizeItem>{prize.prize}</S.BoardPrizeItem>
      <S.BoardPrizeItem>{prize.content}</S.BoardPrizeItem>
    </S.BoardPrize>
  );
};

export default BoardPrize;
