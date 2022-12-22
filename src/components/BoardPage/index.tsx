import { BoardTitleCell, PrizeCell } from 'components';
import * as S from './style';
import * as I from 'assets/svg';
import { useEffect } from 'react';

const BoardPage = () => {
  useEffect(() => {
    console.log('상장 불러오기 api 요청');
  }, []);

  return (
    <S.Grid>
      <BoardTitleCell />
      <PrizeCell />
      <S.Background>
        <I.BoardBackground />
      </S.Background>
    </S.Grid>
  );
};

export default BoardPage;
