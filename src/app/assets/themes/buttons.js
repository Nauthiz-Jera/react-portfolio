import { css } from 'styled-components';
import { COLORS, FONT_SIZE, PADDING } from '../../constants/styles';

/* Extra large buttons */
export const extraLargeButtonFilled = css`
  background-color: ${COLORS.BLUE.PERSIAN_BLUE};
  border-radius: 3px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);
  color: ${COLORS.WHITE.WHITE};
  font-size: ${FONT_SIZE.FONT_14PX};
  height: 48px;
  padding: 0 ${PADDING.NORMAL_AND_HALF};
`;

export const extraLargeButtonHollow = css`
  background-color: ${COLORS.WHITE.WHITE};
  border-radius: 3px;
  border: 1px solid ${COLORS.BLUE.PERSIAN_BLUE};
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);
  color: ${COLORS.BLUE.PERSIAN_BLUE};
  font-size: ${FONT_SIZE.FONT_14PX};
  height: 48px;
  padding: 0 ${PADDING.NORMAL_AND_HALF};
`;

export const extraLargeButtonHollowAlt = css`
  background-color: ${COLORS.WHITE.WHITE};
  border-radius: 3px;
  border: 1px solid #e2e2e2;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);
  font-size: ${FONT_SIZE.FONT_14PX};
  height: 48px;
  padding: 0 ${PADDING.NORMAL_AND_HALF};
`;

/* Large Buttons */
export const largeButtonFilled = css`
  background-color: ${COLORS.BLUE.PERSIAN_BLUE};
  border-radius: 3px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);
  color: ${COLORS.WHITE.WHITE};
  font-size: ${FONT_SIZE.FONT_14PX};
  height: 40px;
  padding: 0 ${PADDING.NORMAL_AND_QUARTER};
`;

export const largeButtonHollow = css`
  background-color: ${COLORS.WHITE.WHITE};
  border: 1px solid ${COLORS.BLUE.PERSIAN_BLUE};
  color: ${COLORS.BLUE.PERSIAN_BLUE};
  border-radius: 3px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);
  font-size: ${FONT_SIZE.FONT_14PX};
  height: 40px;
  padding: 0 ${PADDING.NORMAL_AND_QUARTER};
`;

export const largeButtonHollowAlt = css`
  background-color: ${COLORS.WHITE.WHITE};
  border-radius: 3px;
  border: 1px solid #e2e2e2;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);
  color: ${COLORS.BLACK.BLACK};
  font-size: ${FONT_SIZE.FONT_14PX};
  height: 40px;
  padding: 0 ${PADDING.NORMAL_AND_QUARTER};
`;

/* Medium buttons */
export const mediumButtonFilled = css`
  background-color: ${COLORS.BLUE.PERSIAN_BLUE};
  border-radius: 3px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);
  color: ${COLORS.WHITE.WHITE};
  font-size: ${FONT_SIZE.FONT_14PX};
  height: 32px;
  min-width: 65px;
  padding: 0 ${PADDING.THREE_QUARTERS};
`;

export const mediumButtonHollow = css`
  background-color: ${COLORS.WHITE.WHITE};
  border: 1px solid ${COLORS.BLUE.PERSIAN_BLUE};
  color: ${COLORS.BLUE.PERSIAN_BLUE};
  border-radius: 3px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);
  font-size: ${FONT_SIZE.FONT_14PX};
  height: 32px;
  min-width: 65px;
  padding: 0 ${PADDING.THREE_QUARTERS};
`;

export const mediumButtonHollowAlt = css`
  background-color: ${COLORS.WHITE.WHITE};
  border-radius: 3px;
  border: 1px solid #e2e2e2;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);
  color: ${COLORS.BLACK.BLACK};
  font-size: ${FONT_SIZE.FONT_14PX};
  height: 32px;
  min-width: 65px;
  padding: 0 ${PADDING.THREE_QUARTERS};
`;

/* Small Buttons */
export const smallButtonFilled = css`
  background-color: ${COLORS.BLUE.PERSIAN_BLUE};
  color: ${COLORS.WHITE.WHITE};
  border-radius: 3px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);
  font-size: ${FONT_SIZE.FONT_12PX};
  height: 25px;
  min-width: 60px;
  padding: 0 ${PADDING.THREE_QUARTERS};
`;

export const smallButtonHollow = css`
  background-color: ${COLORS.WHITE.WHITE};
  border: 1px solid ${COLORS.BLUE.PERSIAN_BLUE};
  color: ${COLORS.BLUE.PERSIAN_BLUE};
  border-radius: 3px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);
  font-size: ${FONT_SIZE.FONT_12PX};
  height: 25px;
  min-width: 60px;
  padding: 0 ${PADDING.THREE_QUARTERS};
`;

export const smallButtonHollowAlt = css`
  background-color: ${COLORS.WHITE.WHITE};
  border-radius: 3px;
  border: 1px solid #e2e2e2;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);
  color: ${COLORS.BLACK.BLACK};
  font-size: ${FONT_SIZE.FONT_12PX};
  height: 25px;
  min-width: 60px;
  padding: 0 ${PADDING.THREE_QUARTERS};
`;

/* Tiny Buttons */
export const tinyButtonFilled = css`
  background-color: ${COLORS.BLUE.PERSIAN_BLUE};
  border-radius: 3px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);
  font-size: ${FONT_SIZE.FONT_12PX};
  width: 67px;
  height: 24px;
  padding: 0 ${PADDING.THREE_QUARTERS};
`;
