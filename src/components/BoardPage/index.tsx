import { BoardTitleCell, PrizeCell } from 'components';
import * as S from './style';
import * as I from 'assets/svg';
import { PrizesProps } from 'types/Prize';

const BoardPage: React.FC<PrizesProps> = ({ prizes }) => {
  return (
    <S.Grid>
      <BoardTitleCell />
      <PrizeCell
        randomPrizes={prizes.randomPrizes}
        directPrizes={prizes.directPrizes}
      />
      <S.Background>
        <I.BoardBackground />
      </S.Background>
    </S.Grid>
  );
};

export default BoardPage;
