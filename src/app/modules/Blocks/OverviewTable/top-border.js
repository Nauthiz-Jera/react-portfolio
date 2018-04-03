import styled from 'styled-components';

import { gradientDarkBlue } from 'assets/themes/general';

const TopBorder = styled.div`
  ${gradientDarkBlue};
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  height: 3px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export default TopBorder;
