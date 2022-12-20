import * as S from './style';
import * as C from 'shared/styles/cell';
import * as I from 'assets/svg';

const TitleCell = () => {
  return (
    <S.TitleBox>
      <S.Title>
        It is innovation <br />
        that can be <br />
        customized for listing.
      </S.Title>
      <C.Desc>세상에 없던 특별한 상장을 만듭니다.</C.Desc>
    </S.TitleBox>
  );
};

export default TitleCell;
