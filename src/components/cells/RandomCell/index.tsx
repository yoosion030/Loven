import * as S from './style';
import * as C from 'shared/styles/main/cell';
import * as I from 'assets/svg';
import { useRouter } from 'next/router';
import { Count } from 'types/Count';

const RandomCell: React.FC<Count> = ({ count }) => {
  const { push } = useRouter();

  return (
    <S.RandomCell onClick={() => push('/random')}>
      <div>
        <C.CellTitle>Random</C.CellTitle>
        <C.Desc>내 친구에겐 어떤 상이 어울릴까?</C.Desc>
      </div>
      <div>
        <C.Count>{count}</C.Count>
        <C.Participant>명의 참가자</C.Participant>
      </div>
      <I.RandomIcon />
    </S.RandomCell>
  );
};

export default RandomCell;
