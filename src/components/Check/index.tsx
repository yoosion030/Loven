import { RadioButton } from 'components';
import * as S from './style';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface CheckProps {
  register: UseFormRegisterReturn;
}

const Check: React.FC<CheckProps> = ({ register }) => {
  return (
    <S.Check>
      <S.Label htmlFor="student">
        <RadioButton register={register} id="student" name="kind" />
        학생
      </S.Label>

      <S.Label htmlFor="teacher">
        <RadioButton register={register} id="teacher" name="kind" />
        선생님
      </S.Label>
    </S.Check>
  );
};

export default Check;
