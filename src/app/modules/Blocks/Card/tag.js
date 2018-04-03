import styled from 'styled-components';
import { COLOR_PALETTE, FONT_SIZE, MARGIN, PADDING } from 'constants/styles';

const setTagColor = tag => {
  switch (tag) {
    case 'TRENDING':
      return '#b5309f';
    case 'ALMOST ENDING':
      return '#105B92';
    case 'NEWLY LAUNCHED':
      return '#2D1A91';
    default:
      return '#b5309f';
  }
};

const CardTag = styled.div`
  align-items: center;
  background: ${props => setTagColor(props.tag)};
  border-radius: 500px;
  border: 2px solid ${props => setTagColor(props.tag)};
  color: ${COLOR_PALETTE.WHITE};
  display: flex;
  flex: 0 1 auto;
  font-size: ${FONT_SIZE.FONT_12PX};
  height: 16px;
  justify-content: center;
  left: 15px;
  margin-left: ${MARGIN.HALF};
  padding: 0 ${PADDING.THREE_QUARTERS};
  position: absolute;
  text-transform: uppercase;
  top: -8px;
  visibility: ${props => (props.tag === null || props.tag === '' ? 'hidden' : 'visible')};
  z-index: 1;
`;

export default CardTag;
