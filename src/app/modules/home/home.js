import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';
import _ from 'lodash';

import { media } from '../../constants/style-utils';
import { typeWriterText } from '../../state/actions/type-writer';
import { COLORS, FONT_SIZE, FONT_WEIGHT, MARGIN, PADDING } from '../../constants/styles';
import EN from '../../constants/translations/en';
import homeImg from '../../assets/images/home-image.jpg';

import TypeWriter from '../typewriter/typewriter';

const HomeDiv = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;
const HomeImage = styled.img`
  height: 100%;
  width: 100vw;
  position: absolute;
  left: 0;
`;
const TextContainer = styled.div`
  position: absolute;
  bottom: 250px;
  left: 450px;
  ${media.tablet`
    left: 25px;
    top:250px;
  `} ${media.phone`
    left: 10px;
    bottom:150px;
  `} color: ${COLORS.WHITE.WHITE};
`;
const Text = styled.div`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
`;
const SectionDescription = styled.div`
  display: flex;
  padding: ${PADDING.HALF};
  margin: ${MARGIN.NORMAL} 0;
  justify-content: center;
  background-color: ${COLORS.YELLOW.YELLOW};
  height: 25px;
  font-size: ${FONT_SIZE.FONT_20PX};
  font-weight: ${FONT_WEIGHT.BOLD};
  color: ${COLORS.BLACK.BLACK};
  width: 200px;
`;

const mapToStateProps = state => ({
  selectedText: state.typeWriterText.selectedText,
});

const mapDispatchToProps = dispatch => ({
  typeWriterText: text => dispatch(typeWriterText(text)),
});

class Home extends Component {
  static propTypes = {
    typeWriterText: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      textIndex: 0,
    };
    this.setText = this.setText.bind(this);
  }

  componentDidMount() {
    setInterval(this.setText, 5000);
  }

  shouldComponentUpdate(nextProps) {
    return !_.isEqual(nextProps, this.props);
  }

  setText() {
    const { typeWriterText } = this.props;
    const { textIndex } = this.state;
    const { portfolio } = EN;

    const updatedIndex = textIndex < portfolio.description.personal.length - 1 ? textIndex + 1 : 0;

    this.setState(
      {
        textIndex: updatedIndex,
      },
      () => {
        typeWriterText(portfolio.description.personal[textIndex]);
      },
    );
  }

  render() {
    const { selectedText } = this.props;
    return (
      <ScrollableAnchor id={EN.portfolio.links.home}>
        <HomeDiv>
          <HomeImage src={homeImg} />
          <TextContainer>
            <Text fontSize={FONT_SIZE.FONT_34PX} fontWeight={FONT_WEIGHT.NORMAL}>
              HELLO I'M
            </Text>
            <Text fontSize={FONT_SIZE.FONT_55PX} fontWeight={FONT_WEIGHT.SLIGHT_BOLD}>
              ED KIM
            </Text>
            <TypeWriter text={selectedText} />
            <SectionDescription>Built with React</SectionDescription>
          </TextContainer>
        </HomeDiv>
      </ScrollableAnchor>
    );
  }
}

export default connect(mapToStateProps, mapDispatchToProps)(Home);
