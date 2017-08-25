import React, { Component } from 'react';
import styled from 'styled-components';
import { COLORS, FONT_SIZE, FONT_WEIGHT, MARGIN } from '../../constants/styles';

const LogoContainer = styled.div`
  display: flex;
  width: 175px;
  height: 175px;
  background-color: ${COLORS.YELLOW.YELLOW};
  margin: ${MARGIN.QUARTER} ${MARGIN.AUTO};
  flex-flow: column;
  justify-content: flex-end;
`;
const IconContainer = styled.div`
  display:flex;
  justify-content: center;
  font-size: ${FONT_SIZE.FONT_55PX};
  margin: ${MARGIN.QUARTER};
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${FONT_SIZE.FONT_34PX};
  font-weight: ${FONT_WEIGHT.SLIGHT_BOLD};
`;

class Logo extends Component {
  render() {
    return (
      <LogoContainer>
        <IconContainer>
          <i className="fa fa-viacoin" aria-hidden="true" />
        </IconContainer>
        <TextContainer>
          ED
        </TextContainer>
        <TextContainer>
          KIM
        </TextContainer>
      </LogoContainer>
    );
  }
}

export default Logo;
