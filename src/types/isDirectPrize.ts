import { DirectPrizeType } from './Direct';
import { RandomPrizeType } from './Random';

export const isDirectPrize = (
  target: DirectPrizeType | RandomPrizeType,
): target is DirectPrizeType => {
  return (target as DirectPrizeType).content !== undefined;
};
