import * as S from './style';
import * as C from 'shared/styles/main/cell';

import Image from 'next/image';
import business from '/public/business.png';

const TitleCell = () => {
  return (
    <S.TitleCell>
      <S.TitleSection>
        <S.Title>
          <p>It is innovation</p>
          <p>that can be </p>
          <p>customized for listing.</p>
        </S.Title>
        <C.Desc className="desc">세상에 없던 특별한 상장을 만듭니다.</C.Desc>
      </S.TitleSection>
      <Image src={business} alt="" />
    </S.TitleCell>
  );
};

export default TitleCell;
