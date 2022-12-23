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
import axios from 'axios';

const DirectPage = () => {
  const [preview, setPreview] = useState<boolean>(false);
  const { handleSubmit, register, watch, setValue } = useForm<DirectType>();

  const onValid = async (data: DirectType) => {
    try {
      const res = await axios.post('/direct/upload', {
        ...data,
        secret: !data.secret,
      });
    } catch (e: any) {
      console.log(e);
    }
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
              label="수여자 (주는 사람)"
              register={register('conferrer', {
                required: true,
                maxLength: {
                  value: 4,
                  message: '4자 이내로 입력해주세요.',
                },
              })}
              maxLength={4}
              placeholder="4자 이내로 입력해주세요."
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
              maxLength={20}
              placeholder="20자 이내로 입력해주세요."
            />
          </S.ConferrerSection>
          <Input
            label="수상자 (받는 사람)"
            register={register('winner', {
              required: true,
              maxLength: {
                value: 4,
                message: '4자 이내로 입력해주세요.',
              },
            })}
            maxLength={4}
            placeholder="4자 이내로 입력해주세요."
          />
        </S.PersonCell>
        <S.PrizeCell>
          <Input
            label="상 이름"
            register={register('prize', {
              required: true,
              maxLength: {
                value: 10,
                message: '10자 이내로 입력해주세요.',
              },
            })}
            maxLength={10}
            placeholder="10자 이내로 입력해주세요."
          />
          <Textarea
            label="내용"
            register={register('content', {
              required: true,
              maxLength: {
                value: 120,
                message: '120자 이내로 입력해주세요.',
              },
            })}
            maxLength={120}
            placeholder="120자 이내로 입력해주세요."
          />
        </S.PrizeCell>
        <S.ButtonCell>
          <S.CheckboxSection htmlFor="secret">
            <p>상장 내용을 게시판에 공유할게요.</p>
            <CheckBox
              register={register('secret')}
              type="checkbox"
              id="secret"
              name="secret"
              value={true}
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
