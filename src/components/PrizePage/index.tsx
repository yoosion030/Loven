import { Prize } from 'components';
import { PrizeProps } from 'types/Prize';
import * as S from './style';

const PrizePage: React.FC<PrizeProps> = ({ prize }) => {
  return (
    <S.PrizePage>
      <Prize
        conferrer={prize.conferrer}
        winner={prize.winner}
        prize={prize.prize}
        conferrer_group={prize.conferrer_group}
        content={prize.content}
      />
    </S.PrizePage>
  );
};

export default PrizePage;
