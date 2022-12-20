export interface RandomType {
  conferrer: string; // 수여자
  winner: string; // 수상자
  conferrer_group: string; // 수여자 소속
  winner_kind: 'student' | 'teacher'; // 수상자 종류
}
