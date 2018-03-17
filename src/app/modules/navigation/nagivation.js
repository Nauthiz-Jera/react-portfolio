import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import _ from 'lodash';

import { ALL_LINKS } from '../../constants/links';
import { media } from '../../constants/style-utils';
import { COLORS, PADDING, MARGIN } from '../../constants/styles';
import { OPACITY } from '../../constants/animations';
import { anchor } from '../../state/actions/anchor';

import Logo from '../../modules/logo/logo';

const Container = styled.div`
  position: fixed;
  overflow: visible;
  left: 0px;
  height: 100%;
  top: 0px;
  width: 300px;
  z-index: 999;
  display: block;
  ${media.tablet`display: ${props =>
    props.isOpen ? 'block' : 'none'};`} ${media.phone`display: ${props =>
      props.isOpen ? 'block' : 'none'};`} background: #2f3742;
  padding-bottom: 110px;
`;
const IconContainer = styled.div`
  display: flex;
  color: white;
  justify-content: flex-end;
  padding: 5px;
  > i {
    cursor: pointer;
  }
`;
const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  margin-top: ${MARGIN.LARGE};
`;
const NavLink = styled.a`
  display: block;
  cursor: pointer;
  color: ${COLORS.WHITE.WHITE};
  padding: ${PADDING.THREE_QUARTERS} ${PADDING.NORMAL_AND_HALF};
  text-decoration: none;
  &:hover {
    animation: ${OPACITY} 0.75s;
    box-shadow: 15px 0 0 0 ${COLORS.YELLOW.YELLOW} inset;
    border-right: 5px solid;
    border-color: ${COLORS.YELLOW.YELLOW};
    color: ${COLORS.YELLOW.YELLOW};
  }
  &.active {
    animation: ${OPACITY} 0.75s;
    box-shadow: 15px 0 0 0 ${COLORS.YELLOW.YELLOW} inset;
    border-right: 5px solid;
    border-color: ${COLORS.YELLOW.YELLOW};
    color: ${COLORS.YELLOW.YELLOW};
  }
`;

const mapToStateProps = state => ({
  activeAnchor: state.anchor.currentAnchor,
});

const mapDispatchToProps = dispatch => ({
  setAnchor: selectAnchor => dispatch(anchor(selectAnchor)),
});

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(nextProps, this.props) || !_.isEqual(nextState, this.state);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    let hash = window.location.hash;
    const { setAnchor } = this.props;

    this.setState(
      {
        activeAnchor: hash,
      },
      () => setAnchor(hash),
    );
  }

  render() {
    const { activeAnchor, isOpen, setAnchor } = this.props;
    return (
      <Container isOpen={isOpen}>
        <IconContainer>
          {/*<i className="fa fa-bars" aria-hidden="true" onClick={() => onClick(!isOpen)} />*/}
        </IconContainer>
        <Logo />
        <LinksContainer>
          {ALL_LINKS.map((link, index) => (
            <NavLink
              key={index}
              href={`#${link.title}`}
              className={activeAnchor === `#${link.title}` ? 'active' : ''}
              onClick={() => setAnchor(`#${link.title}`)}
            >
              {link.title}
            </NavLink>
          ))}
        </LinksContainer>
      </Container>
    );
  }
}

export default connect(mapToStateProps, mapDispatchToProps)(Navigation);
