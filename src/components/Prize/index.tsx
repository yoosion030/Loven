import * as S from './style';

interface PrizeProps {
  conferrer: string; // 수여자
  winner: string; // 상여자
  prize: string; // 상 이름
  conferrer_group: string; // 수여자 소속
  content: string; // 내용
}

const Prize: React.FC<PrizeProps> = ({
  conferrer,
  conferrer_group,
  content,
  winner,
  prize,
}) => {
  return (
    <S.Prize onClick={e => e.stopPropagation()}>
      상장{prize}
      {content}
      {conferrer}
      {conferrer_group}
      {winner}
    </S.Prize>
  );
};

export default Prize;
