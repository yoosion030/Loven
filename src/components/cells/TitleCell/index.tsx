import * as S from './style';
import * as C from 'shared/styles/cell';
import * as I from 'assets/svg';
import Image from 'next/image';
import business from 'assets/png/business.png';

const TitleCell = () => {
  return (
    <S.TitleBox>
      <S.TitleSection>
        <S.Title>
          It is innovation <br />
          that can be <br />
          customized for listing.
        </S.Title>
        <C.Desc>세상에 없던 특별한 상장을 만듭니다.</C.Desc>
      </S.TitleSection>
      <Image src={business} alt="" width={526} />
    </S.TitleBox>
  );
};

export default TitleCell;
