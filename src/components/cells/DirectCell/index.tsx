import * as S from './style';
import * as C from 'shared/styles/main/cell';
import * as I from 'assets/svg';
import { useRouter } from 'next/router';
import { Count } from 'types/Count';

const DirectCell: React.FC<Count> = ({ count }) => {
  const { push } = useRouter();
  return (
    <S.DirectCell onClick={() => push('/direct')}>
      <div>
        <C.CellTitle>Direct</C.CellTitle>
        <C.Desc>친구에게 직접 주고싶은 상이 있다면.</C.Desc>
      </div>
      <div>
        <C.Count>{count}</C.Count>
        <C.Participant>명의 참가자</C.Participant>
      </div>
      <I.DirectIcon />
    </S.DirectCell>
  );
};

export default DirectCell;
