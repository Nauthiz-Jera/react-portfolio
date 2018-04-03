import styled from 'styled-components';
import { COLOR_PALETTE, PADDING } from 'constants/styles';

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  border: 1px solid ${COLOR_PALETTE.BORDER_STROKE};
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-width: 0;
  padding: ${PADDING.NORMAL} ${PADDING.HALF};
`;

export default CompanyInfo;
