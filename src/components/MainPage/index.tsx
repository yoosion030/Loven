import * as I from 'assets/svg';
import * as S from './style';

const MainPage = () => {
  return (
    <S.Container>
      <S.LogoWrapper>
        <I.Logo />
      </S.LogoWrapper>
      <S.Grid>
        <S.TitleBox>
          <S.Title>
            It is innovation <br />
            that can be <br />
            customized for listing.
          </S.Title>
          <S.Desc>세상에 없던 특별한 상장을 만듭니다.</S.Desc>
        </S.TitleBox>
        <S.RandomBox>
          <div>
            <S.BoxTitle>Random</S.BoxTitle>
            <S.Desc>내 친구에겐 어떤 상이 어울릴까?</S.Desc>
          </div>
          <div>
            <S.Count>24</S.Count>
            <S.Participant>명의 참가자</S.Participant>
          </div>
          <I.RandomIcon />
        </S.RandomBox>

        <S.DirectBox>
          <div>
            <S.BoxTitle>Direct</S.BoxTitle>
            <S.Desc>친구에게 직접 주고싶은 상이 있다면.</S.Desc>
          </div>
          <div>
            <S.Count>17</S.Count>
            <S.Participant>명의 참가자</S.Participant>
          </div>
          <I.DirectIcon />
        </S.DirectBox>

        <S.BoardBox>
          <div>
            <S.BoardTitle>
              Bulletin <br /> board
            </S.BoardTitle>
            <S.Desc>상장, 모두가 받을 수 있도록.</S.Desc>
          </div>
          <I.BoardIcon />
        </S.BoardBox>
      </S.Grid>
    </S.Container>
  );
};

export default MainPage;
