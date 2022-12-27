import * as S from './style';
import { useRouter } from 'next/router';
import { DirectPrizeType } from 'types/Direct';
import { RandomPrizeType } from 'types/Random';
import { isDirectPrize } from 'types/isDirectPrize';

interface BoardPrizeProps {
  prize: DirectPrizeType | RandomPrizeType;
  filter: 'random' | 'direct';
}

const BoardPrize: React.FC<BoardPrizeProps> = ({ prize, filter }) => {
  const { push } = useRouter();

  return (
    <S.BoardPrize onClick={() => push(`${filter + '/' + prize.id}`)}>
      <S.BoardPrizeItem>{prize.conferrer}</S.BoardPrizeItem>
      <S.BoardPrizeItem>{prize.winner}</S.BoardPrizeItem>
      <S.BoardPrizeItem>
        {isDirectPrize(prize) ? prize.prize : prize.form.prize}
      </S.BoardPrizeItem>
      <S.BoardPrizeItem>
        {isDirectPrize(prize) ? prize.content : prize.form.content}
      </S.BoardPrizeItem>
    </S.BoardPrize>
  );
};

export default BoardPrize;
