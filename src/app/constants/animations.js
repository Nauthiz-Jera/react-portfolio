import { keyframes } from 'styled-components';
import { COLORS } from '../constants/styles';

export const OPACITY = keyframes`
 0% {
  box-shadow: 0px 0 0 0 ${COLORS.YELLOW.YELLOW} inset;
  border-right: 0px solid;
  border-color: ${COLORS.YELLOW.YELLOW};
  color: ${COLORS.WHITE.WHITE};
 }
 100% {
  box-shadow: 15px 0 0 0 ${COLORS.YELLOW.YELLOW} inset;
  border-right: 5px solid;
  border-color: ${COLORS.YELLOW.YELLOW};
  color: ${COLORS.YELLOW.YELLOW};
 }
`;

export const TYPE = keyframes`
    from{
      width: 0;
    }
    to{
      width: 100%;
    }
`;

export const BLINK_CARET = keyframes`
  from,
    to { border-color: transparent }
  50% { border-color: orange; }
`;
