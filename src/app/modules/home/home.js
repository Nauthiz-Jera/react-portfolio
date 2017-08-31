import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';
import { typeWriterText } from '../../state/actions/type-writer';
import { COLORS, FONT_SIZE, FONT_WEIGHT } from '../../constants/styles';
import TypeWriter from '../typewriter/typewriter';
import EN from '../../constants/translations/en';

const homeImg = require('../../assets/images/home-image.jpg');

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
  color: ${COLORS.WHITE.WHITE};
`;
const Text = styled.div`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
`;

const mapToStateProps = state => ({
  selectedText: state.typeWriterText.selectedText,
});

const mapDispatchToProps = dispatch => ({
  typeWriterText: text => dispatch(typeWriterText(text)),
});

class Home extends Component {
  constructor(props) {
    super(props);
    let { textIndex, typeWriterText } = this.props;
    setTimeout(setText, 5000);
    function setText() {
      textIndex = textIndex < EN.portfolio.description.personal.length ? textIndex : 0;
      typeWriterText(EN.portfolio.description.personal[textIndex]);
      setTimeout(setText.bind(this), 5000);
      textIndex++;
    }
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
          </TextContainer>
        </HomeDiv>
      </ScrollableAnchor>
    );
  }
}

Home.defaultProps = {
  textIndex: 0,
};

export default connect(mapToStateProps, mapDispatchToProps)(Home);
