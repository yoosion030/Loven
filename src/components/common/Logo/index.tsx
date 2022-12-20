import * as I from 'assets/svg';
import { useRouter } from 'next/router';
import * as S from './style';

const Logo = () => {
  const { push } = useRouter();
  return (
    <S.LogoWrapper onClick={() => push('/')}>
      <I.Logo />
    </S.LogoWrapper>
  );
};

export default Logo;
