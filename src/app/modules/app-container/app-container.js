import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Navigation from '../navigation/nagivation';
import Home from '../home/home';
import About from '../about/about';
import Skill from '../skill/skill';
import Experience from '../experience/experience';
import Portfolio from '../portfolio/portfolio';
import { menuToggle } from '../../state/actions/menu-toggle';

const PageContainer = styled.div`
  width: calc(100% - 300px);
  float: right;
`;

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
        <PageContainer id="pageContainer">
          <Home />
          <About />
          <Skill />
          <Experience />
          <Portfolio />
        </PageContainer>
      </div>
    );
  }
}

export default connect(mapToStateProps, dispatchToStateProps)(AppContainer);
