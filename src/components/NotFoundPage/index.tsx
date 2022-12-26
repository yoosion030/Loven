import * as S from './style';
import * as I from 'assets/svg';

const index = () => {
  return (
    <S.NotFoundPage>
      <S.Title> 404</S.Title>
      <S.Desc>
        입력하신 주소를 찾을 수 없어요. <br />
        주소를 다시 한번 확인해주세요 :)
      </S.Desc>
      <I.NotFoundIcon />
    </S.NotFoundPage>
  );
};

export default index;
