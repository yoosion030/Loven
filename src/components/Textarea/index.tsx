import * as S from './style';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface TextareaProps {
  label: string;
  register: UseFormRegisterReturn;
  [x: string]: any;
}
const Textarea: React.FC<TextareaProps> = ({ label, register, ...rest }) => {
  return (
    <S.TextareaSection>
      <S.Label>{label}</S.Label>
      <S.Textarea {...register} {...rest} />
    </S.TextareaSection>
  );
};

export default Textarea;
