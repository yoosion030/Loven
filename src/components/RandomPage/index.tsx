import { Input, SubmitButton } from 'components';
import * as S from './style';
import * as I from 'assets/svg';
import { useForm } from 'react-hook-form';
import type { FieldErrors } from 'react-hook-form';
import { RandomType } from 'types/Random';

const RandomPage = () => {
  const onValid = (data: RandomType) => {
    console.log(data);
  };
  const inValid = (errors: FieldErrors) => {
    console.log(errors);
  };
  const { register, handleSubmit } = useForm<RandomType>();
  return (
    <S.RandomForm>
      <S.Form onSubmit={handleSubmit(onValid, inValid)}>
        <Input
          label="수여자"
          register={register('conferrer', { required: true })}
          placeholder="주는 사람의 이름을 입력해주세요."
        />

        <Input
          label="수상자"
          register={register('winner', { required: true })}
          placeholder="받는 사람의 이름을 입력해주세요."
        />
        <SubmitButton />
      </S.Form>
      <I.RandomBackground />
    </S.RandomForm>
  );
};

export default RandomPage;
