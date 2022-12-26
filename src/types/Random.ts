export interface RandomType {
  conferrer: string; // 수여자
  winner: string; // 수상자
  conferrer_group: string; // 수여자 소속
  winner_kind: 'student' | 'teacher'; // 수상자 종류
}

export interface RandomPrizeType {
  id: number;
  conferrer: string;
  winner: string;
  form: {
    prize: string;
    content: string;
    winner_kind: 'student' | 'teacher';
  };
  conferrer_group: string;
  secret: boolean;
}
