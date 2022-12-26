export interface DirectType {
  conferrer: string; // 수여자
  winner: string; // 상여자
  prize: string; // 상 이름
  conferrer_group: string; // 수여자 소속
  content: string; // 내용
  secret: boolean; // 비밀글 여부
}

export interface DirectPrizeType extends DirectType {
  id: number;
}
