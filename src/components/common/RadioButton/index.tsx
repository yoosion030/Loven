import * as S from './style';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface RadioProps {
  id: string;
  name: string;
  register: UseFormRegisterReturn;
}

const RadioButton: React.FC<RadioProps> = ({ id, name, register }) => {
  return (
    <S.Label>
      <input {...register} type="radio" name={name} id={id} value={id} />
      <span className="checkmark" />
    </S.Label>
  );
};

export default RadioButton;
