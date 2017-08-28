import React, { Component } from 'react';
import styled from 'styled-components';
import { COLORS, FONT_SIZE, FONT_WEIGHT, MARGIN, PADDING } from '../../constants/styles';

const SectionIntroContainer = styled.div`
  display: flex;
  flex-flow: column;
`;
const SectionDescription = styled.div`
  display: flex;
  padding: ${PADDING.NORMAL};
  margin-left: ${MARGIN.NORMAL};
  justify-content: center;
  background-color: ${COLORS.YELLOW.YELLOW};
  height: 25px;
  font-size: ${FONT_SIZE.FONT_18PX};
  font-weight: ${FONT_WEIGHT.SLIM};
  width: 200px;
`;

const SectionTitle = styled.div`
  display: flex;
  padding: ${PADDING.NORMAL} ${PADDING.HALF};
  font-size: ${FONT_SIZE.FONT_34PX};
  font-weight: ${FONT_WEIGHT.BOLD};
`;

class SectionIntro extends Component {
  render() {
    const { description, title } = this.props;
    return (
      <SectionIntroContainer>
        <SectionDescription>
          {description}
        </SectionDescription>
        <SectionTitle>
          {title}
        </SectionTitle>
      </SectionIntroContainer>
    );
  }
}

export default SectionIntro;
