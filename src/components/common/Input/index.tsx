import * as S from './style';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  register: UseFormRegisterReturn;
  label: string;
  [x: string]: any;
}

const Input: React.FC<InputProps> = ({ label, register, ...rest }) => {
  return (
    <div>
      <S.Label>{label}</S.Label>
      <S.Input {...register} {...rest}></S.Input>
    </div>
  );
};

export default Input;
