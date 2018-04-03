import React from 'react';
import PropTypes from 'prop-types';

import Title from './styles';

const TitleText = ({ additionalStyles, bold, slim, className, headerType, text }) => (
  <Title
    className={`${className} title-text`}
    style={additionalStyles}
    header={headerType}
    isBold={bold}
    isSlim={slim}
  >
    {text}
  </Title>
);

TitleText.propTypes = {
  text: PropTypes.string.isRequired,
  additionalStyles: PropTypes.shape(),
  bold: PropTypes.bool,
  className: PropTypes.string,
  headerType: PropTypes.string,
  slim: PropTypes.bool,
};

TitleText.defaultProps = {
  additionalStyles: {},
  bold: false,
  className: '',
  headerType: null,
  slim: false,
};

export default TitleText;
