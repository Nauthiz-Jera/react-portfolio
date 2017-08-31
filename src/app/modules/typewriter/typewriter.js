import React, { Component } from 'react';
import styled from 'styled-components';
import { FONT_SIZE } from '../../constants/styles';
import { TYPE, BLINK_CARET } from '../../constants/animations';

const DescriptionContainer = styled.div`
  animation: ${TYPE} 3.5s steps(40, end),
  ${BLINK_CARET} .75s step-end infinite;
  overflow: hidden;
  white-space: nowrap;
  letter-spacing: .15em; 
  border-right: .15em solid orange;
  font-size: ${FONT_SIZE.FONT_24PX};
`;

class TypeWriter extends Component {
  render() {
    const { text } = this.props;
    return (
      <DescriptionContainer key={text}>
        {text}
      </DescriptionContainer>
    );
  }
}

export default TypeWriter;
