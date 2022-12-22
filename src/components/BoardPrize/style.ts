import styled from '@emotion/styled';
import { HeaderItem } from 'components/cells/PrizeCell/style';

export const BoardPrize = styled.div`
  display: flex;
  font-size: 22px;
  cursor: pointer;
`;

export const BoardPrizeItem = styled(HeaderItem)`
  font-weight: 400;
  margin-bottom: 60px;

  overflow: hidden;
  :nth-of-type(4) {
    width: 400px;
    height: 30px;
    word-wrap: break-word;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
