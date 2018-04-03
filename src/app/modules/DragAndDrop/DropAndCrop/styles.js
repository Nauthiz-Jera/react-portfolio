import styled from 'styled-components';
import { COLORS, PADDING } from '../../../constants/styles';

export const ModalContent = styled.div`
  background-color: ${COLORS.GREY.VERY_LIGHT_GREY};
  height: 75%;
  width: 75%;
`;

export const DropLocationContainer = styled.div`
  margin: 0 auto 35px auto;
  color: black;
  border: 2px dashed ${COLORS.GREY.MORTAR};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 175px;
  padding: ${PADDING.HALF};
`;

export const Image = styled.img`
  border-radius: 0;
  height: 150px;
  margin: 0 auto;
  width: 150px;
`;
