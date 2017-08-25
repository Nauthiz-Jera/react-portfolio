import React, { Component } from 'react';
import styled from 'styled-components';
import { ALL_LINKS } from '../../constants/links';
import { COLORS, PADDING, MARGIN } from '../../constants/styles';
import { OPACITY } from '../../constants/animations';
import Logo from '../../modules/logo/logo';

const Container = styled.div`
  position: fixed;
  overflow: visible;
  display: block;
  left: 0px;
  width: 230px;
  height: 100%;
  top: 0px;
  z-index: 999;
  background: #2f3742;
  padding-bottom: 110px;
  width: ${props => (props.isOpen ? `20%` : `300px`)};
`;
const IconContainer = styled.div`
  display:flex;
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
  color:${COLORS.WHITE.WHITE};
  padding: ${PADDING.THREE_QUARTERS} ${PADDING.NORMAL_AND_HALF};
  &:hover{
    animation: ${OPACITY} .75s;
    box-shadow: 15px 0 0 0 ${COLORS.YELLOW.YELLOW} inset;
    border-right: 5px solid;
    border-color: ${COLORS.YELLOW.YELLOW};
    color: ${COLORS.YELLOW.YELLOW};
  }
  &.active{
    animation: ${OPACITY} .75s;
    box-shadow: 15px 0 0 0 ${COLORS.YELLOW.YELLOW} inset;
    border-right: 5px solid;
    border-color: ${COLORS.YELLOW.YELLOW};
    color: ${COLORS.YELLOW.YELLOW};
   }
`;
class Navigation extends Component {
  render() {
    const { isOpen, onClick } = this.props;
    return (
      <Container isOpen={isOpen}>
        <IconContainer>
          <i className="fa fa-bars" aria-hidden="true" onClick={() => onClick(!isOpen)} />
        </IconContainer>
        <Logo />
        <LinksContainer>
          {ALL_LINKS.map((link, index) => (
            <NavLink key={index}>
              {link.title}
            </NavLink>
          ))}
        </LinksContainer>
      </Container>
    );
  }
}

export default Navigation;
