export interface CountType {
  random: string;
  direct: string;
}

export interface CountDataType {
  data: CountType;
}

export interface CountProps {
  count: CountType;
}

export interface Count {
  [key: string]: string;
}
