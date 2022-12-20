import * as S from './style';
import * as C from 'shared/styles/cell';
import * as I from 'assets/svg';

const RandomCell = () => {
  return (
    <S.RandomBox>
      <div>
        <C.BoxTitle>Random</C.BoxTitle>
        <C.Desc>내 친구에겐 어떤 상이 어울릴까?</C.Desc>
      </div>
      <div>
        <C.Count>24</C.Count>
        <C.Participant>명의 참가자</C.Participant>
      </div>
      <I.RandomIcon />
    </S.RandomBox>
  );
};

export default RandomCell;
