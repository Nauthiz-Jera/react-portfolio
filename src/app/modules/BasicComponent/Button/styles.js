import styled from 'styled-components';

import * as theme from '../../../assets/themes/buttons';

const determineButtonTheme = buttonType => {
  switch (buttonType) {
    case 'XL_FILLED':
      return theme.extraLargeButtonFilled;
    case 'XL_HOLLOW':
      return theme.extraLargeButtonHollow;
    case 'XL_HOLLOW_ALT':
      return theme.extraLargeButtonHollowAlt;
    case 'L_FILLED':
      return theme.largeButtonFilled;
    case 'L_HOLLOW':
      return theme.largeButtonHollow;
    case 'L_HOLLOW_ALT':
      return theme.largeButtonHollowAlt;
    case 'M_FILLED':
      return theme.mediumButtonFilled;
    case 'M_HOLLOW':
      return theme.mediumButtonHollow;
    case 'M_HOLLOW_ALT':
      return theme.mediumButtonHollowAlt;
    case 'SM_FILLED':
      return theme.smallButtonFilled;
    case 'SM_HOLLOW':
      return theme.smallButtonHollow;
    case 'SM_HOLLOW_ALT':
      return theme.smallButtonHollowAlt;
    default:
      return theme.largeButtonFilled;
  }
};

const BasicButton = styled.button`
  ${props => determineButtonTheme(props.buttonType)};
  cursor: pointer;
  display: flex;
  font-family: PlutoSans;
  justify-content: center;
  width: auto;
`;

export default BasicButton;
