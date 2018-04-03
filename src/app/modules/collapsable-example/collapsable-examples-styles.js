import styled from 'styled-components';
import { FONT_SIZE } from '../../constants/styles';

const Example = styled.div`
  display: flex;
  width: 100%;
`;

Example.container = styled.div`
  align-items: center;
  display: flex;
  font-size: ${FONT_SIZE.FONT_16PX};
  justify-content: center;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
`;

export default Example;
