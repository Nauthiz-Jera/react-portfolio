import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../home/home';
import Navigation from '../navigation/nagivation';
import { menuToggle } from '../../state/actions/menu-toggle';

const mapToStateProps = state => ({
  toggle: state.toggle.toggled,
});

const dispatchToStateProps = dispatch => ({
  menuToggle: toggle => dispatch(menuToggle(toggle)),
});

class AppContainer extends Component {
  render() {
    const { toggle, menuToggle } = this.props;
    return (
      <div>
        <Navigation isOpen={toggle} onClick={menuToggle} />
        <Home />
      </div>
    );
  }
}

export default connect(mapToStateProps, dispatchToStateProps)(AppContainer);
