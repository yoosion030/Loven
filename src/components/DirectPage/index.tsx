import { PersonCell, PrizeCell, ButtonCell } from 'components';
import * as S from './style';

const DirectPage = () => {
  return (
    <S.Grid>
      <PersonCell />
      <PrizeCell />
      <ButtonCell />
    </S.Grid>
  );
};

export default DirectPage;
