import * as S from './style';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface CheckBoxProps {
  id: string;
  name: string;
  register: UseFormRegisterReturn;
  type: 'checkbox' | 'radio';
}

const CheckBox: React.FC<CheckBoxProps> = ({ id, name, register, type }) => {
  return (
    <S.Label>
      <input {...register} type={type} name={name} id={id} value={id} />
      <span className="checkmark" />
    </S.Label>
  );
};

export default CheckBox;
