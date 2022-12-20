import { SubmitButton, Input } from 'components';
import { DirectType } from 'types/Direct';
import * as S from './style';
import { useForm } from 'react-hook-form';
import type { FieldErrors } from 'react-hook-form';

const DirectPage = () => {
  const { handleSubmit, register } = useForm<DirectType>();
  const onValid = (data: DirectType) => {
    console.log(data);
  };

  const inValid = (errors: FieldErrors) => {
    console.log(errors);
  };

  return (
    <S.Grid onSubmit={handleSubmit(onValid, inValid)}>
      <S.PersonCell>
        <Input
          label="수여자"
          register={register('conferrer', { required: true })}
          placeholder="주는 사람의 이름을 입력해주세요."
        />
        <Input
          label="소속"
          register={register('conferrer_group', { required: true })}
          placeholder="소속을 입력해주세요."
        />
        <Input
          label="수상자"
          register={register('winner', { required: true })}
          placeholder="받는 사람의 이름을 입력해주세요."
        />
      </S.PersonCell>
      <S.PrizeCell>
        <Input
          label="상 이름"
          register={register('prize', { required: true })}
          placeholder="상 이름을 입력해주세요."
        />
      </S.PrizeCell>
      <S.ButtonCell>
        <SubmitButton />
      </S.ButtonCell>
    </S.Grid>
  );
};

export default DirectPage;
