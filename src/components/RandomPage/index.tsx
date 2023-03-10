import { Input, SubmitButton, Check, Preview, Prize } from 'components';
import * as S from './style';
import * as I from 'assets/svg';
import { useForm } from 'react-hook-form';
import type { FieldErrors } from 'react-hook-form';
import { RandomType } from 'types/Random';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const RandomPage = () => {
  const { push } = useRouter();

  const onValid = async (data: RandomType) => {
    try {
      const res = await axios.post(`${process.env.BASE_URL}/random/upload`, {
        ...data,
      });
      push(`/random/${res.data.id}`);
    } catch (e: any) {
      console.log(e);
    }
  };

  const inValid = (errors: FieldErrors) => {
    console.log(errors);
  };

  const { register, handleSubmit, watch } = useForm<RandomType>();
  const [preview, setPreview] = useState<boolean>(false);

  return (
    <>
      <S.RandomForm>
        <S.Form onSubmit={handleSubmit(onValid, inValid)}>
          <S.ConferrerSection>
            <Input
              label="수여자 (주는 사람)"
              register={register('conferrer', {
                required: true,
                maxLength: {
                  value: 4,
                  message: '4자 이내로 입력해주세요.',
                },
              })}
              placeholder="4자 이내로 입력해주세요."
              maxLength={4}
            />
            <Input
              label="소속"
              register={register('conferrer_group', {
                required: true,
                maxLength: {
                  value: 20,
                  message: '20자 이내로 입력해주세요.',
                },
              })}
              placeholder="20자 이내로 입력해주세요."
              maxLength={20}
            />
          </S.ConferrerSection>
          <div>
            <Input
              label="수상자 (받는 사람)"
              register={register('winner', {
                required: true,
                maxLength: {
                  value: 4,
                  message: '4자 이내로 입력해주세요.',
                },
              })}
              placeholder="4자 이내로 입력해주세요."
              maxLength={4}
            />
            <Check register={register('winner_kind', { required: true })} />
          </div>
          <SubmitButton />
        </S.Form>
        <I.RandomBackground />
      </S.RandomForm>
      <Preview onClick={() => setPreview(!preview)} />
      {preview && (
        <S.PrizeWrapper onClick={() => setPreview(!preview)}>
          <Prize
            conferrer={watch('conferrer')}
            conferrer_group={watch('conferrer_group')}
            winner={watch('winner')}
            prize="상장 출력 후 공개"
            content="상장 출력 후 공개"
          />
        </S.PrizeWrapper>
      )}
    </>
  );
};

export default RandomPage;
