import {
  SubmitButton,
  Input,
  CheckBox,
  Textarea,
  Preview,
  Prize,
} from 'components';
import { DirectType } from 'types/Direct';
import * as S from './style';
import { useForm } from 'react-hook-form';
import type { FieldErrors } from 'react-hook-form';
import { useState } from 'react';

const DirectPage = () => {
  const [preview, setPreview] = useState<boolean>(false);
  const { handleSubmit, register, watch } = useForm<DirectType>();

  const onValid = (data: DirectType) => {
    console.log(data);
    console.log('직접 입력 상장 생성 api ');
  };

  const inValid = (errors: FieldErrors) => {
    console.log(errors);
  };

  return (
    <>
      <S.Grid onSubmit={handleSubmit(onValid, inValid)}>
        <S.PersonCell>
          <S.ConferrerSection>
            <Input
              label="수여자"
              register={register('conferrer', {
                required: true,
                maxLength: {
                  value: 10,
                  message: '최대 10글자 입력입니다.',
                },
              })}
              maxLength={10}
              placeholder="주는 사람의 이름을 입력해주세요."
            />
            <Input
              label="소속"
              register={register('conferrer_group', {
                required: true,
                maxLength: {
                  value: 20,
                  message: '최대 20글자 입력입니다.',
                },
              })}
              maxLength={20}
              placeholder="소속을 입력해주세요."
            />
          </S.ConferrerSection>
          <Input
            label="수상자"
            register={register('winner', {
              required: true,
              maxLength: {
                value: 10,
                message: '최대 10글자 입력입니다.',
              },
            })}
            maxLength={10}
            placeholder="받는 사람의 이름을 입력해주세요."
          />
        </S.PersonCell>
        <S.PrizeCell>
          <Input
            label="상 이름"
            register={register('prize', {
              required: true,
              maxLength: {
                value: 10,
                message: '최대 10글자 입력입니다.',
              },
            })}
            maxLength={10}
            placeholder="상 이름을 입력해주세요."
          />
          <Textarea
            label="내용"
            register={register('content', {
              required: true,
              maxLength: {
                value: 200,
                message: '최대 10글자 입력입니다.',
              },
            })}
            maxLength={150}
            placeholder="150자 이내 내용을 입력해주세요."
          />
        </S.PrizeCell>
        <S.ButtonCell>
          <S.CheckboxSection htmlFor="secret">
            <p>상장 내용을 게시판에 공유할게요.</p>
            <CheckBox
              id="secret"
              name="secret"
              register={register('secret')}
              type="checkbox"
            />
          </S.CheckboxSection>
          <S.ButtonWrapper>
            <SubmitButton />
          </S.ButtonWrapper>
        </S.ButtonCell>
      </S.Grid>
      <Preview onClick={() => setPreview(!preview)} />
      {preview && (
        <S.PrizeWrapper onClick={() => setPreview(!preview)}>
          <Prize
            conferrer={watch('conferrer')}
            conferrer_group={watch('conferrer_group')}
            winner={watch('winner')}
            prize={watch('prize')}
            content={watch('content')}
          />
        </S.PrizeWrapper>
      )}
    </>
  );
};

export default DirectPage;
