import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ALL_LINKS } from '../../constants/links';
import { COLORS, PADDING, MARGIN } from '../../constants/styles';
import { OPACITY } from '../../constants/animations';
import { anchor } from '../../state/actions/anchor';
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
  text-decoration: none;
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
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    let hash = window.location.hash;
    const { activeAnchor, setAnchor } = this.props;

    if (hash !== activeAnchor) {
      this.setState(
        {
          activeAnchor: hash,
        },
        () => setAnchor(hash),
      );
    }
  }
  render() {
    const { activeAnchor, isOpen, onClick, setAnchor } = this.props;
    return (
      <Container isOpen={isOpen}>
        <IconContainer>
          <i className="fa fa-bars" aria-hidden="true" onClick={() => onClick(!isOpen)} />
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
