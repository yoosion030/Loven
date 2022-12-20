import * as S from './style';
import * as C from 'shared/styles/cell';
import * as I from 'assets/svg';

const DirectCell = () => {
  return (
    <S.DirectBox>
      <div>
        <C.BoxTitle>Direct</C.BoxTitle>
        <C.Desc>친구에게 직접 주고싶은 상이 있다면.</C.Desc>
      </div>
      <div>
        <C.Count>17</C.Count>
        <C.Participant>명의 참가자</C.Participant>
      </div>
      <I.DirectIcon />
    </S.DirectBox>
  );
};

export default DirectCell;