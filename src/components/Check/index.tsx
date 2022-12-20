import { RadioButton } from 'components';
import * as S from './style';

const Check = () => {
  return (
    <S.Check>
      <S.Label htmlFor="kind">
        <RadioButton id="kind" name="kind" />
        학생
      </S.Label>

      <S.Label htmlFor="kind1">
        <RadioButton id="kind1" name="kind" />
        선생님
      </S.Label>
    </S.Check>
  );
};

export default Check;
