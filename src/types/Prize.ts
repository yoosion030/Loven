export interface PrizesType {
  randomPrizes: PrizeType[];
  directPrizes: PrizeType[];
}

export interface PrizeType {
  id: number;
  conferrer: string; // 수여자
  winner: string; // 상여자
  prize: string; // 상 이름
  conferrer_group: string; // 수여자 소속
  content: string; // 내용
}

export interface PrizesProps {
  prizes: PrizesType;
}

export interface PrizeProps {
  prize: PrizeType;
}
