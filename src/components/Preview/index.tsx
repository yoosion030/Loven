import * as S from './style';
import * as I from 'assets/svg';
import { MouseEventHandler } from 'react';

interface MouseProps {
  onClick: MouseEventHandler;
}

const Preview: React.FC<MouseProps> = ({ onClick }) => {
  return (
    <S.Preview onClick={onClick}>
      <S.PreviewDesc className="desc">상장 미리보기</S.PreviewDesc>
      <S.Icon className="icon">
        <I.PreviewIcon />
      </S.Icon>
    </S.Preview>
  );
};

export default Preview;
