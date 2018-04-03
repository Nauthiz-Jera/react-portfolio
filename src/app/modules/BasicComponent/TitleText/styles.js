import styled from 'styled-components';

import * as theme from 'assets/themes/headers';
import { FONT_WEIGHT } from 'constants/styles';

const determineHeaderTheme = header => {
  switch (header) {
    case 'H1':
    case 'LARGE_HERO':
      return theme.LARGE_HERO;
    case 'H2':
    case 'HERO':
      return theme.HERO;
    case 'H3':
    case 'SECTION':
      return theme.SECTION;
    case 'H4':
    case 'SUB_SECTION':
      return theme.SUB_SECTION;
    case 'H5':
    case 'BIG_CARD_TITLE':
      return theme.BIG_CARD_TITLE;
    case 'H6':
    case 'SMALL_CARD_TITLE':
      return theme.SMALL_CARD_TITLE;
    default:
      return theme.SMALL_CARD_TITLE;
  }
};

const Title = styled.span`
  ${props => determineHeaderTheme(props.header)};
  ${props => props.isBold && FONT_WEIGHT.BOLD};
  ${props => props.isSlim && FONT_WEIGHT.SLIM};
`;

export default Title;
