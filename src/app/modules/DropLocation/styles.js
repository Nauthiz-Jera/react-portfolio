import styled from 'styled-components';
import { COLORS, FONT_SIZE, FONT_WEIGHT, MARGIN } from '../../constants/styles';

export const DropLocationContainer = styled.div`
  align-items: center;
  color: ${COLORS.GREY.VERY_LIGHT_GREY};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
export const MainSpan = styled.div`
  color: ${COLORS.GREY.VERY_LIGHT_GREY};
  font-size: ${FONT_SIZE.FONT_18PX};
`;
export const ClickLabel = styled.label`
  display: block;
  width: 100%;
  margin: ${MARGIN.HALF} ${MARGIN.AUTO};
  cursor: pointer;
  font-weight: ${FONT_WEIGHT.SLIGHT_BOLD};
  background-color: ${COLORS.BLUE.TROPICAL_BLUE};
  color: ${COLORS.WHITE.WHITE};
  &:hover {
    background-color: ${COLORS.GREY.DARK_GREY};
  }
`;

export const DropInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;
