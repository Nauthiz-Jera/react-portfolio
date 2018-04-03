import React from 'react';
import PropTypes from 'prop-types';

import BasicButton from './styles';

const Button = ({ additionalStyles, className, clickCallback, buttonType, title }) => (
  <BasicButton
    className={`${className} basic-button`}
    buttonType={buttonType}
    onClick={clickCallback}
    style={additionalStyles}
  >
    {title}
  </BasicButton>
);

Button.propTypes = {
  additionalStyles: PropTypes.shape(),
  className: PropTypes.string,
  clickCallback: PropTypes.func.isRequired,
  buttonType: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Button.defaultProps = {
  additionalStyles: {},
  className: '',
  buttonType: null,
};

export default Button;
