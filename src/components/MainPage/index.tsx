import { Logo, BoardCell, DirectCell, RandomCell, TitleCell } from 'components';
import { CountProps } from 'types/Count';
import * as S from './style';

const MainPage: React.FC<CountProps> = ({ count }) => {
  return (
    <S.Container>
      <Logo />
      <S.Grid>
        <TitleCell />
        <RandomCell count={count.randomCount} />
        <DirectCell count={count.DirectCount} />
        <BoardCell />
      </S.Grid>
    </S.Container>
  );
};

export default MainPage;
