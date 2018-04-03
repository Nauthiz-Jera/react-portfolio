import { css } from 'styled-components';

import { COLOR_PALETTE } from 'constants/styles';

export const foreground = css`
  background: linear-gradient(
      180deg,
      ${COLOR_PALETTE.TEAL_OPAQUE} 0%,
      ${COLOR_PALETTE.TEAL_TRANSPARENT} 100%
    ),
    linear-gradient(90deg, ${COLOR_PALETTE.VERY_DARK_BLUE} 0%, ${COLOR_PALETTE.DARK_BLUE} 100%);
`;

export const foregroundTopRight = css`
  background: linear-gradient(
      to bottom,
      ${COLOR_PALETTE.TEAL_TRANSPARENT_80} 0%,
      ${COLOR_PALETTE.TEAL_TRANSPARENT} 100%
    ),
    linear-gradient(to right, ${COLOR_PALETTE.VERY_DARK_BLUE} 0%, ${COLOR_PALETTE.DARK_BLUE} 100%);
`;

export const foregroundAlt = css`
  background: linear-gradient(
      to left top,
      ${COLOR_PALETTE.TEAL_OPAQUE} 0%,
      ${COLOR_PALETTE.TEAL_TRANSPARENT} 100%
    ),
    linear-gradient(
      to bottom right,
      ${COLOR_PALETTE.VERY_DARK_BLUE} 0%,
      ${COLOR_PALETTE.DARK_BLUE} 100%
    );
`;

// export const foregroundSecondary = css`
//   background:
//     linear-gradient(
//       to top,
//         ${COLOR_PALETTE.TEAL_OPAQUE} 0%,
//         ${COLOR_PALETTE.TEAL_TRANSPARENT} 100%
//     ),
//     linear-gradient(
//       to right,
//       ${COLOR_PALETTE.VERY_DARK_BLUE} 0%,
//       ${COLOR_PALETTE.DARK_BLUE} 100%
//     );
// `;

export const meshForeground = css`
  background: linear-gradient(
      315deg,
      rgba(73, 169, 148, 0.45) 0%,
      ${COLOR_PALETTE.TEAL_TRANSPARENT} 35%
    ),
    linear-gradient(225deg, rgba(73, 169, 148, 0.85) 0%, ${COLOR_PALETTE.TEAL_TRANSPARENT} 75%),
    linear-gradient(to bottom left, rgba(15, 34, 39, 0.8) 0%, rgba(15, 34, 89, 0.9) 55%);
`;

export const marginalizedBody = css`
  @media screen and (max-width: 768px) {
    max-width: 750px;
  }

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    max-width: 1000px;
  }
`;

export const onBreakLeftToCenter = css`
  /* Custom, iPhone Retina */
  @media only screen and (min-width: 320px) {
    justify-content: center;
  }

  /* Extra Small Devices, Phones */
  @media only screen and (min-width: 480px) {
    justify-content: center;
  }

  /* Small Devices, Tablets */
  @media only screen and (min-width: 678px) {
    justify-content: flex-start;
  }

  /* Medium Devices, Desktops */
  @media only screen and (min-width: 992px) {
    justify-content: flex-start;
  }

  /* Large Devices, Wide Screens */
  @media only screen and (min-width: 1200px) {
    justify-content: flex-start;
  }
`;

export const gradientDarkBlue = css`
  background: linear-gradient(90deg, ${COLOR_PALETTE.BLUE_PURPLE} 0%, ${COLOR_PALETTE.PURPLE} 100%);
`;

export const gradientPurple = css`
  background: linear-gradient(90deg, ${COLOR_PALETTE.PINK_PURPLE} 0%, ${COLOR_PALETTE.PURPLE} 100%);
`;

export const gradientBlue = css`
  background: linear-gradient(
    90deg,
    ${COLOR_PALETTE.LIGHT_VIOLET} 0%,
    ${COLOR_PALETTE.DARK_VIOLET} 100%
  );
`;
