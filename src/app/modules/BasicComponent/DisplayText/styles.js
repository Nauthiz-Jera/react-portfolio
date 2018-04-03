import styled from 'styled-components';

import * as theme from 'assets/themes/text';
import { FONT_WEIGHT } from '../../constants/styles';

const determineTextTheme = typeText => {
  switch (typeText) {
    case 'intro':
    case 'BLOCK_QUOTE':
      return theme.BLOCK_QUOTE;
    case 'large':
    case 'LARGE_BODY':
      return theme.LARGE_BODY;
    case 'normal':
    case 'REGULAR_BODY':
      return theme.REGULAR_BODY;
    case 'small':
    case 'SECONDARY':
      return theme.SECONDARY;
    case 'marginal':
    case 'DESCRIPTIVE':
      return theme.DESCRIPTIVE;
    default:
      return theme.DESCRIPTIVE;
  }
};

const Text = styled.span`
  ${props => determineTextTheme(props.textType)};
  ${props => props.isBold && FONT_WEIGHT.HEADER_BOLD};
  ${props => props.isSlim && FONT_WEIGHT.SLIM};
`;

export default Text;
