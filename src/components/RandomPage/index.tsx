import { Input, SubmitButton, Check } from 'components';
import * as S from './style';
import * as I from 'assets/svg';
import { useForm } from 'react-hook-form';
import type { FieldErrors } from 'react-hook-form';
import { RandomType } from 'types/Random';

const RandomPage = () => {
  const onValid = (data: RandomType) => {
    console.log(data);
    console.log('random 상장 생성 api 전송');
  };

  const inValid = (errors: FieldErrors) => {
    console.log(errors);
  };

  const { register, handleSubmit } = useForm<RandomType>();
  return (
    <S.RandomForm>
      <S.Form onSubmit={handleSubmit(onValid, inValid)}>
        <S.ConferrerSection>
          <Input
            label="수여자 (주는 사람)"
            register={register('conferrer', {
              required: true,
              maxLength: {
                value: 4,
                message: '10자 이내로 입력해주세요.',
              },
            })}
            placeholder="10자 이내로 입력해주세요."
          />

          <Input
            label="소속"
            register={register('conferrer_group', { required: true })}
            placeholder="수여자 소속을 입력해주세요."
          />
        </S.ConferrerSection>

        <div>
          <Input
            label="수상자"
            register={register('winner', {
              required: true,
              maxLength: {
                value: 4,
                message: '4자 이내로 입력해주세요.',
              },
            })}
            placeholder="4자 이내로 입력해주세요."
          />
          <Check register={register('winner_kind', { required: true })} />
        </div>
        <SubmitButton />
      </S.Form>
      <I.RandomBackground />
    </S.RandomForm>
  );
};

export default RandomPage;
