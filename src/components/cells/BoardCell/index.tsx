import * as S from './style';
import * as C from 'shared/styles/cell';
import * as I from 'assets/svg';
import { useRouter } from 'next/router';

const BoardCell = () => {
  const { push } = useRouter();
  return (
    <S.BoardBox onClick={() => push('/board')}>
      <div>
        <S.BoardTitle>
          Bulletin <br /> board
        </S.BoardTitle>
        <C.Desc>상장, 모두가 받을 수 있도록.</C.Desc>
      </div>
      <I.BoardIcon />
    </S.BoardBox>
  );
};

export default BoardCell;
