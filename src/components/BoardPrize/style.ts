import styled from '@emotion/styled';
import { HeaderItem } from 'components/cells/PrizeCell/style';

export const BoardPrize = styled.div`
  font-family: Noto Sans;
  display: flex;
  font-size: 1.375rem;
  cursor: pointer;
`;

export const BoardPrizeItem = styled(HeaderItem)`
  font-weight: 400;
  margin-bottom: 3.75rem;

  overflow: hidden;
  :nth-of-type(4) {
    width: 25rem;
    height: 1.875rem;
    word-wrap: break-word;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
