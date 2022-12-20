import * as S from './style';

interface RadioProps {
  id: string;
  name: string;
}

const RadioButton: React.FC<RadioProps> = ({ id, name }) => {
  return (
    <S.Label>
      <input type="radio" name={name} id={id} />
      <span className="checkmark" />
    </S.Label>
  );
};

export default RadioButton;
