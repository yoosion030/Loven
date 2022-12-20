import * as S from './style';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface TextareaProps {
  label: string;
  register: UseFormRegisterReturn;
}
const Textarea: React.FC<TextareaProps> = ({ label, register }) => {
  return (
    <>
      <S.Label>{label}</S.Label>
      <S.Textarea {...register} placeholder="120자 이내 내용을 입력해주세요." />
    </>
  );
};

export default Textarea;
