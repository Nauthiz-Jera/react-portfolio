import React from 'react';
import PropTypes from 'prop-types';

import { PATH } from '../../constants/svg-constants';
import { DropLocationContainer, MainSpan, ClickLabel, DropInput } from './styles';

const DropLocation = ({ callback }) => (
  <DropLocationContainer>
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="43" viewBox="0 0 50 43">
      <path d={PATH.DROP_BOX} />
    </svg>
    <MainSpan>
      <ClickLabel>
        {'Browse'}
        <DropInput type="file" name="file" id="file" onChange={event => callback(event)} />
      </ClickLabel>
      {'or drag an image file here'}
    </MainSpan>
  </DropLocationContainer>
);

DropLocation.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default DropLocation;
