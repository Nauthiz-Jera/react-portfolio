import styled from 'styled-components';
import { COLOR_PALETTE, PADDING } from '../../constants/styles';

const CardHeader = styled.div`
  background: ${COLOR_PALETTE.PRIMARY_BLUE};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  display: flex;
  justify-content: space-between;
  padding: 0 ${PADDING.HALF};
  color: white;
`;

export default CardHeader;
