import { BoardCell, DirectCell, RandomCell, TitleCell } from 'components';
import { CountProps } from 'types/Count';
import * as S from './style';

const MainPage: React.FC<CountProps> = ({ count }) => {
  return (
    <S.Grid>
      <TitleCell />
      <RandomCell count={count.randomCount} />
      <DirectCell count={count.DirectCount} />
      <BoardCell />
    </S.Grid>
  );
};

export default MainPage;
