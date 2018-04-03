import styled from 'styled-components';
import { COLOR_PALETTE } from 'constants/styles';

const CardContainer = styled.div`
  background-color: ${COLOR_PALETTE.WHITE};
  border-radius: 2px;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  flex: 0 0 100%;
`;

export default CardContainer;
