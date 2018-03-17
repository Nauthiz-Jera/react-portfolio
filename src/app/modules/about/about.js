import React, { PureComponent } from 'react';
import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';
import { media } from '../../constants/style-utils';
import { COLORS, FONT_SIZE, FONT_WEIGHT, MARGIN, PADDING } from '../../constants/styles';
import EN from '../../constants/translations/en';
import { ALL_ABOUT } from '../../constants/about';
import SectionIntro from '../common/section-intro';

const AboutContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  width: 100%;
  min-height: 75vh;
`;
const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  width: 100%;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: ${MARGIN.HALF};
  width: 48%;
  float: right;
  height: 500px;
`;
const Info = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  margin: 0 ${MARGIN.LARGE_AND_HALF};
`;
const IconTitleContainer = styled.div`
  display: flex;
  flex-flow: column;
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
  color: ${COLORS.GREY.MIDNIGHT_GREY};
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
  color: ${COLORS.GREY.MYSTIQUE};
  word-break: break-word;
  width: 135px;
`;
const AboutLink = styled.a`
  link-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  font-size: ${FONT_SIZE.FONT_14PX};
  font-weight: ${FONT_WEIGHT.SLIGHT_BOLD};
  padding: ${PADDING.QUARTER};
  color: ${COLORS.GREY.MYSTIQUE};
  word-break: break-word;
  width: 135px;
`;
const AboutDescription = styled.div`
  &:before {
    content: '';
    height: 200px;
    border-left: 3px solid;
    border-color: ${COLORS.YELLOW.YELLOW};
    padding: ${PADDING.QUARTER};
  }
  width: 48%;
  display: flex;
  justify-content: flex-start;
  font-size: ${FONT_SIZE.FONT_16PX};
  font-weight: ${FONT_WEIGHT.SLIGHT_BOLD};
  ${media.desktop`
  padding: ${PADDING.HALF};
  padding-right: ${PADDING.NORMAL};
`} ${media.tablet`
  padding: ${PADDING.HALF};
  padding-right: ${PADDING.NORMAL};
`} ${media.phone`
  padding: ${PADDING.EXTRA_LARGE};
  padding-left: ${PADDING.NORMAL};
`} padding: ${PADDING.HALF};
  padding-right: ${PADDING.NORMAL};
  color: ${COLORS.GREY.MYSTIQUE};
`;

class About extends PureComponent {
  render() {
    return (
      <ScrollableAnchor id={EN.portfolio.links.about}>
        <AboutContainer>
          <SectionIntro
            description={EN.portfolio.intros.about.description}
            title={EN.portfolio.intros.about.title}
          />
          <ContentContainer>
            <InfoContainer>
              {ALL_ABOUT.map((about, index) => (
                <Info key={index}>
                  <AboutIcon>
                    <i className={about.icon} aria-hidden="true" />
                  </AboutIcon>
                  <IconTitleContainer>
                    <AboutTitle>{about.title}</AboutTitle>
                    {about.link ? (
                      <AboutLink target="_blank" href={about.value}>
                        {about.value}
                      </AboutLink>
                    ) : (
                      <AboutValue>{about.value}</AboutValue>
                    )}
                  </IconTitleContainer>
                </Info>
              ))}
            </InfoContainer>
            <AboutDescription>
              {EN.portfolio.about.description}
              <br />
              <br />
              {EN.portfolio.about.quote}
            </AboutDescription>
          </ContentContainer>
        </AboutContainer>
      </ScrollableAnchor>
    );
  }
}

export default About;
