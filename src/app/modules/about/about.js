import React, { Component } from 'react';
import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';
import { COLORS, FONT_SIZE, FONT_WEIGHT, MARGIN, PADDING } from '../../constants/styles';
import EN from '../../constants/translations/en';
import { ALL_ABOUT } from '../../constants/about';
import SectionIntro from '../common/section-intro';

const AboutContainer = styled.div`
  display: flex; 
  justify-content: space-between;
  width:100%;
  height: 100vh;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: ${MARGIN.NORMAL};
  width: calc(100% - 250px);
  float: right;
`;
const Info = styled.div`
  display:flex;
  justify-content: center;
  width: 250px;
  flex-flow: column;
  margin: 0 ${MARGIN.AUTO};
`;
const AboutIcon = styled.div`
display: flex;
justify-content: flex-start;
padding: ${PADDING.QUARTER};
font-size: ${FONT_SIZE.FONT_20PX};
`;
const AboutTitle = styled.div`
display: flex;
justify-content: flex-start;
font-size: ${FONT_SIZE.FONT_20PX};
font-weight: ${FONT_WEIGHT.SLIGHT_BOLD};
padding: ${PADDING.QUARTER};
`;
const AboutValue = styled.div`
display: flex;
justify-content: flex-start;
font-size: ${FONT_SIZE.FONT_14PX};
font-weight: ${FONT_WEIGHT.SLIGHT_BOLD};
padding: ${PADDING.QUARTER};
color: ${COLORS.GREY.NOBEL};
`;
const AboutDescription = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
font-size: ${FONT_SIZE.FONT_16PX};
font-weight: ${FONT_WEIGHT.SLIGHT_BOLD};
padding: ${PADDING.QUARTER};
color: ${COLORS.GREY.NOBEL};
`;

class About extends Component {
  render() {
    return (
      <ScrollableAnchor id={EN.portfolio.links.about}>
        <AboutContainer>
          <SectionIntro
            description={EN.portfolio.intros.about.description}
            title={EN.portfolio.intros.about.title}
          />
          <InfoContainer>
            {ALL_ABOUT.map((about, index) => (
              <Info key={index}>
                <AboutIcon>
                  <i className={about.icon} aria-hidden="true" />
                </AboutIcon>
                <AboutTitle>
                  {about.title}
                </AboutTitle>
                <AboutValue>
                  {about.value}
                </AboutValue>
              </Info>
            ))}
            <AboutDescription>
              {'Description will go here. Talk a little about my self and stuff like that.'}
            </AboutDescription>
          </InfoContainer>
        </AboutContainer>
      </ScrollableAnchor>
    );
  }
}

export default About;
