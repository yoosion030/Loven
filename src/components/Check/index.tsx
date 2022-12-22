import { CheckBox } from 'components';
import * as S from './style';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface CheckProps {
  register: UseFormRegisterReturn;
}

const Check: React.FC<CheckProps> = ({ register }) => {
  return (
    <S.Check>
      <S.Label htmlFor="student">
        <CheckBox
          register={register}
          id="student"
          name="winner_kind"
          type="radio"
          value="student"
        />
        학생
      </S.Label>

      <S.Label htmlFor="teacher">
        <CheckBox
          register={register}
          id="teacher"
          name="winner_kind"
          type="radio"
          value="teacher"
        />
        선생님
      </S.Label>
    </S.Check>
  );
};

export default Check;
