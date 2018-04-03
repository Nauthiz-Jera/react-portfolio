import styled from 'styled-components';
import { COLOR_PALETTE, FONT_SIZE } from 'constants/styles';
import { PADDING } from '../../constants/styles';

const Chevron = styled.div`
  align-self: flex-end;
  cursor: pointer;
  display: flex;
  margin: 0 auto;
  margin-top: auto;
  padding-top: ${PADDING.THREE_QUARTERS};
  &:after {
    content: '${props => (props.isCollapsed ? '\\e313' : '\\e316')}';
    font-family: 'Material Icons';
    font-size: ${FONT_SIZE.FONT_32PX};
    color: ${COLOR_PALETTE.LIGHT_GREY};
    font-style: normal;
    font-weight: normal;
    letter-spacing: normal;
    line-height: 1;
    text-transform: none;
    white-space: nowrap;
  }
`;

export default Chevron;
