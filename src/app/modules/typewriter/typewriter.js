import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FONT_SIZE } from '../../constants/styles';
import { TYPE, BLINK_CARET } from '../../constants/animations';

const DescriptionContainer = styled.div`
  animation: ${TYPE} 3.5s steps(40, end), ${BLINK_CARET} 0.75s step-end infinite;
  overflow: hidden;
  white-space: nowrap;
  letter-spacing: 0.15em;
  border-right: 0.15em solid orange;
  font-size: ${FONT_SIZE.FONT_24PX};
`;

const TypeWriter = ({ text }) => <DescriptionContainer key={text}>{text}</DescriptionContainer>;

TypeWriter.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TypeWriter;
