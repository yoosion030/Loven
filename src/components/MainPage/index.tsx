import { Logo, BoardCell, DirectCell, RandomCell, TitleCell } from 'components';
import * as S from './style';

const MainPage = () => {
  return (
    <S.Container>
      <Logo />
      <S.Grid>
        <TitleCell />
        <RandomCell />
        <DirectCell />
        <BoardCell />
      </S.Grid>
    </S.Container>
  );
};

export default MainPage;
