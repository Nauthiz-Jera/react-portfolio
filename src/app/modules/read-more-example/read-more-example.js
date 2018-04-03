import React from 'react';
import PropTypes from 'prop-types';

import ReadMore from '../CAF/ReadMore/read-more';

const ReadMoreExample = ({ text }) => (
  <ReadMore displayText={text} maxLength={150}>
    {editedText => editedText}
  </ReadMore>
);

ReadMoreExample.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ReadMoreExample;
