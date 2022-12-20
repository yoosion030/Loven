import * as S from './style';
import * as C from 'shared/styles/cell';
import * as I from 'assets/svg';
import { useRouter } from 'next/router';
import { Count } from 'types/Count';

const RandomCell: React.FC<Count> = ({ count }) => {
  const { push } = useRouter();

  return (
    <S.RandomBox onClick={() => push('/random')}>
      <div>
        <C.BoxTitle>Random</C.BoxTitle>
        <C.Desc>내 친구에겐 어떤 상이 어울릴까?</C.Desc>
      </div>
      <div>
        <C.Count>{count}</C.Count>
        <C.Participant>명의 참가자</C.Participant>
      </div>
      <I.RandomIcon />
    </S.RandomBox>
  );
};

export default RandomCell;
