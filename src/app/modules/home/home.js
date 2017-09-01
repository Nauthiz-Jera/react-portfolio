import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';
import { media } from '../../constants/style-utils';
import { typeWriterText } from '../../state/actions/type-writer';
import { COLORS, FONT_SIZE, FONT_WEIGHT, MARGIN, PADDING } from '../../constants/styles';
import TypeWriter from '../typewriter/typewriter';
import EN from '../../constants/translations/en';

import homeImg from '../../assets/images/home-image.jpg';

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
  `}
  ${media.phone`
    left: 10px;
    bottom:150px;
  `}
  color: ${COLORS.WHITE.WHITE};
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
            <SectionDescription>
              Built with React
            </SectionDescription>
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
