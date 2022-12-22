import { BoardTitleCell, PrizeCell } from 'components';
import * as S from './style';
import * as I from 'assets/svg';
import { useEffect } from 'react';
import { PrizesProps } from 'types/Prize';

const BoardPage: React.FC<PrizesProps> = ({ prizes }) => {
  useEffect(() => {
    console.log('상장 불러오기 api 요청');
  }, []);

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
