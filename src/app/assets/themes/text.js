import { css } from 'styled-components';
import { COLOR_PALETTE, FONT_SIZE, FONT_WEIGHT } from '../../constants/styles';

export const introText = css`
  color: ${COLOR_PALETTE.LIGHT_GREY};
  font-size: ${FONT_SIZE.FONT_22PX};
  line-height: 1.71;
  font-weight: ${FONT_WEIGHT.SLIM};
  letter-spacing: -0.5px;
`;

export const largeText = css`
  color: ${COLOR_PALETTE.LIGHT_GREY};
  font-size: ${FONT_SIZE.FONT_18PX};
  line-height: 1.71;
  letter-spacing: -0.5px;
`;

export const normalText = css`
  color: ${COLOR_PALETTE.LIGHT_GREY};
  font-size: ${FONT_SIZE.FONT_16PX};
  line-height: 1.71;
  letter-spacing: -0.5px;
`;

export const smallText = css`
  color: ${COLOR_PALETTE.LIGHT_GREY};
  font-size: ${FONT_SIZE.FONT_14PX};
  line-height: 1.71;
  letter-spacing: -0.5px;
`;

export const marginalText = css`
  color: ${COLOR_PALETTE.LIGHT_GREY};
  font-size: ${FONT_SIZE.FONT_12PX};
  line-height: 1.71;
  letter-spacing: -0.5px;
`;

export const BLOCK_QUOTE = css`
  ${FONT_WEIGHT.SLIM};
  color: ${COLOR_PALETTE.LIGHT_GREY};
  font-size: ${FONT_SIZE.FONT_22PX};
  line-height: 1.71;
  letter-spacing: -0.5px;
`;

export const LARGE_BODY = css`
  color: ${COLOR_PALETTE.LIGHT_GREY};
  font-size: ${FONT_SIZE.FONT_18PX};
  line-height: 1.71;
  letter-spacing: -0.5px;
`;

export const REGULAR_BODY = css`
  color: ${COLOR_PALETTE.LIGHT_GREY};
  font-size: ${FONT_SIZE.FONT_16PX};
  line-height: 1.71;
  letter-spacing: -0.5px;
`;

export const SECONDARY = css`
  color: ${COLOR_PALETTE.LIGHT_GREY};
  font-size: ${FONT_SIZE.FONT_14PX};
  line-height: 1.71;
  letter-spacing: -0.5px;
`;

export const SECONDARY_DARK = css`
  color: ${COLOR_PALETTE.DARK_GREY};
  font-size: ${FONT_SIZE.FONT_14PX};
  line-height: 1.71;
  letter-spacing: -0.5px;
`;

export const DESCRIPTIVE = css`
  color: ${COLOR_PALETTE.LIGHT_GREY};
  font-size: ${FONT_SIZE.FONT_12PX};
  line-height: 1.71;
  letter-spacing: -0.5px;
`;
export const DESCRIPTIVE_DARK = css`
  color: ${COLOR_PALETTE.DARK_GREY};
  font-size: ${FONT_SIZE.FONT_12PX};
  line-height: 1.71;
  letter-spacing: -0.5px;
`;

export const TAG_TEXT = css`
  font-size: ${FONT_SIZE.FONT_10PX};
  line-height: 1.6;
  vertical-align: middle;
  text-align: center;
`;
