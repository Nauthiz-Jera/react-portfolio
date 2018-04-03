import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { ReadMoreContainer, ReadMoreButton } from './styles';

const getInitialStateValues = (displayText, maxLength) => {
  const isTruncated = displayText.length > maxLength;
  const truncatedText = displayText.slice(0, maxLength);
  const readMoreText = isTruncated ? `${truncatedText}...` : truncatedText;

  return {
    isTruncated,
    readMoreText,
  };
};

class ReadMore extends PureComponent {
  constructor(props) {
    super(props);
    const { displayText, maxLength } = props;
    const stateValues = getInitialStateValues(displayText, maxLength);

    this.state = {
      isTruncated: stateValues.isTruncated,
      readMoreText: stateValues.readMoreText,
      readMoreToggled: false,
    };

    this.toggleReadMore = this.toggleReadMore.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { displayText, maxLength } = nextProps;
    const stateValues = getInitialStateValues(displayText, maxLength);
    this.setState({
      isTruncated: stateValues.isTruncated,
      readMoreText: stateValues.readMoreText,
      readMoreToggled: false,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(nextProps, this.props) || !_.isEqual(nextState, this.state);
  }

  toggleReadMore() {
    const { displayText } = this.props;
    this.setState({
      readMoreText: displayText,
      readMoreToggled: true,
    });
  }

  render() {
    const { buttonTitle, children, className } = this.props;
    const { readMoreText, isTruncated, readMoreToggled } = this.state;
    return (
      <ReadMoreContainer className={`${className} read-more`}>
        {children(readMoreText)}
        {isTruncated && !readMoreToggled ? (
          <ReadMoreButton onClick={this.toggleReadMore}>{buttonTitle}</ReadMoreButton>
        ) : (
          ''
        )}
      </ReadMoreContainer>
    );
  }
}

ReadMore.propTypes = {
  buttonTitle: PropTypes.string,
  children: PropTypes.func.isRequired,
  className: PropTypes.string,
  displayText: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
};

ReadMore.defaultProps = {
  buttonTitle: 'Read more',
  className: '',
};

export default ReadMore;
