import * as S from './style';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface CheckBoxProps {
  register: UseFormRegisterReturn;
  type: 'checkbox' | 'radio';
  [x: string]: any;
}

const CheckBox: React.FC<CheckBoxProps> = ({ register, type, ...rest }) => {
  return (
    <S.Label>
      <input {...register} {...rest} type={type} />
      <span className="checkmark" />
    </S.Label>
  );
};

export default CheckBox;
