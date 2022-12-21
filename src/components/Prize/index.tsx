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
  const date = new Date();

  return (
    <S.Prize onClick={e => e.stopPropagation()}>
      <S.Title>
        <p>상</p>장
      </S.Title>

      <S.WinnerSection>
        <p>{prize}</p>
        <p className="winner"> {winner}</p>
      </S.WinnerSection>
      <S.ContentSection>{content}</S.ContentSection>
      <S.DateSection>
        {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일
      </S.DateSection>
      <S.ConferrerSection>
        <p>{conferrer_group}</p>
        <p>{conferrer}</p>
      </S.ConferrerSection>
    </S.Prize>
  );
};

export default Prize;
