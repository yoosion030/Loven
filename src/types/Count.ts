export interface CountType {
  random: number;
  direct: number;
}

export interface CountDataType {
  data: CountType;
}

export interface CountProps {
  count: CountType;
}

export interface Count {
  [key: string]: number;
}
