import { Prize } from 'components';
import { PrizeProps } from 'types/Prize';
import * as S from './style';
import * as I from 'assets/svg';
import { useRouter } from 'next/router';

const PrizePage: React.FC<PrizeProps> = ({ prize }) => {
  const { back } = useRouter();
  return (
    <>
      <S.BackButton onClick={() => back()}>
        <I.BackIcon />
      </S.BackButton>
      <S.PrizePage>
        <Prize
          conferrer={prize.conferrer}
          winner={prize.winner}
          prize={prize.prize}
          conferrer_group={prize.conferrer_group}
          content={prize.content}
        />
      </S.PrizePage>
      <S.PrintButton onClick={() => window.print()}>인쇄하기</S.PrintButton>
    </>
  );
};

export default PrizePage;