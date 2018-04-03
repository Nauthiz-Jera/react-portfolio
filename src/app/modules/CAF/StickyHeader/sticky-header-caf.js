import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { StickyHeaderWrapper } from './styles';

class StickyHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSticky: false,
      position: 'relative',
      top: 0,
      visibility: props.initialVisibility,
      zIndex: 1,
    };
    this.scrollHandler = this.scrollHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(nextProps, this.props) || !_.isEqual(nextState, this.state);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  scrollHandler() {
    const { sticky } = this;
    const { initialVisibility } = this.props;
    const { top: topRect } = sticky.getBoundingClientRect();
    if (topRect <= 0) {
      this.setState({
        isSticky: true,
        position: 'fixed',
        top: 0,
        visibility: 'visible',
        zIndex: 1001,
      });
    } else if (topRect > 0) {
      this.setState({
        isSticky: false,
        position: 'relative',
        visibility: initialVisibility,
        zIndex: 1,
      });
    }
  }

  render() {
    const { children } = this.props;
    const { isSticky } = this.state;
    return (
      <StickyHeaderWrapper innerRef={sticky => (this.sticky = sticky)}>
        {children({ ...this.state }, isSticky)}
      </StickyHeaderWrapper>
    );
  }
}

StickyHeader.propTypes = {
  children: PropTypes.func.isRequired,
  initialVisibility: PropTypes.string,
};

StickyHeader.defaultProps = {
  initialVisibility: 'visible',
};

export default StickyHeader;
