import React, { Component } from 'react';
import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';
import EN from '../../constants/translations/en';
import SectionIntro from '../common/section-intro';
import { ALL_EXPERIENCE } from '../../constants/experience';
import { COLORS, FONT_SIZE, FONT_WEIGHT, MARGIN, PADDING } from '../../constants/styles';

const ExperienceContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;
const ExperienceDetails = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin: ${MARGIN.LARGE} 0;
`;
const DetailIntro = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  width: 35%;
`;
const DetailIcon = styled.i`
  color: ${COLORS.GREY.MYSTIQUE};
  padding: ${PADDING.QUARTER};
  font-size: ${FONT_SIZE.FONT_55PX};
`;
const DetailTitle = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
`;
const Title = styled.h2`
  color: ${COLORS.YELLOW.YELLOW};
  padding: ${PADDING.QUARTER};
  margin: 0;
`;
const TimeFrame = styled.span`
  color: ${COLORS.GREY.MYSTIQUE};
  font-size: ${FONT_SIZE.FONT_20PX};
  font-weight: ${FONT_WEIGHT.SLIGHT_BOLD};
  padding: 0 ${PADDING.QUARTER};
`;
const DetailBody = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 65%;
`;
const DetailPosition = styled.h2`
  padding: ${PADDING.QUARTER};
  margin: 0;
  font-weight: ${FONT_WEIGHT.NORMAL};
`;
const DetailDescription = styled.div`
  color: ${COLORS.GREY.MYSTIQUE};
  padding: ${PADDING.QUARTER};
`;

class Experience extends Component {
  render() {
    return (
      <ScrollableAnchor id={EN.portfolio.links.experience}>
        <ExperienceContainer>
          <SectionIntro
            description={EN.portfolio.intros.experience.description}
            title={EN.portfolio.intros.experience.title}
          />
          {ALL_EXPERIENCE.map((experience, index) => (
            <ExperienceDetails key={index}>
              <DetailIntro>
                <DetailIcon>
                  <i className={experience.icon} aria-hidden="true" />
                </DetailIcon>
                <DetailTitle>
                  <Title>
                    {experience.title}
                  </Title>
                  <TimeFrame>
                    {experience.timeFrame}
                  </TimeFrame>
                </DetailTitle>
              </DetailIntro>
              <DetailBody>
                <DetailPosition>
                  {experience.position}
                </DetailPosition>
                <DetailDescription>
                  {experience.description}
                </DetailDescription>
              </DetailBody>
            </ExperienceDetails>
          ))}
        </ExperienceContainer>
      </ScrollableAnchor>
    );
  }
}

export default Experience;
