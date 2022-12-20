export interface CountType {
  randomCount: number;
  DirectCount: number;
}

export interface CountProps {
  count: CountType;
}

export interface Count {
  [key: string]: number;
}
