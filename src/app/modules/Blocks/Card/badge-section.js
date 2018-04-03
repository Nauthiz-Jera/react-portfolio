import styled from 'styled-components';

import { PADDING } from 'constants/styles';

const BadgeSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  align-content: flex-end;
  padding-top: ${PADDING.NORMAL};
`;

export default BadgeSection;
