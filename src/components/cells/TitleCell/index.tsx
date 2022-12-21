import * as S from './style';
import * as C from 'shared/styles/main/cell';

import Image from 'next/image';
import business from '/public/business.png';

const TitleCell = () => {
  return (
    <S.TitleCell>
      <S.TitleSection>
        <S.Title>
          It is innovation <br />
          that can be <br />
          customized for listing.
        </S.Title>
        <C.Desc>세상에 없던 특별한 상장을 만듭니다.</C.Desc>
      </S.TitleSection>
      <Image src={business} alt="" width={526} />
    </S.TitleCell>
  );
};

export default TitleCell;
