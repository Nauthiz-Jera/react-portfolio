import React from 'react';
import PropTypes from 'prop-types';

import Text from './styles';

const DisplayText = ({ additionalStyles, bold, className, slim, textType, text }) => (
  <Text
    className={`${className} display-text`}
    isBold={bold}
    isSlim={slim}
    style={additionalStyles}
    textType={textType}
  >
    {text}
  </Text>
);

DisplayText.propTypes = {
  text: PropTypes.string.isRequired,
  additionalStyles: PropTypes.shape(),
  bold: PropTypes.bool,
  className: PropTypes.string,
  slim: PropTypes.bool,
  textType: PropTypes.string,
};

DisplayText.defaultProps = {
  additionalStyles: {},
  bold: false,
  className: '',
  slim: false,
  textType: null,
};

export default DisplayText;
