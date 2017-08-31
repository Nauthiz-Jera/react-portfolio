import React, { Component } from 'react';
import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';
import { COLORS, FONT_WEIGHT, MARGIN, PADDING } from '../../constants/styles';
import EN from '../../constants/translations/en';
import SectionIntro from '../common/section-intro';
import Chart from '../common/chart';
import { SKILL_BAR_CHART } from '../../constants/chart';
import Bullet from '../common/bullet';
import './skill.css';

const SkillsContainer = styled.div`
  display: flex; 
  flex-flow: column wrap;
  width:100%;
  min-height: 85vh;
`;
const SkillContentContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
  margin: ${MARGIN.NORMAL};
`;
const SkillContent = styled.div`
  display: flex;
  flex-flow: column;
  width: 50%;
`;
const SkillHeader = styled.h1`
  font-weight: ${FONT_WEIGHT.NORMAL};
`;
const SkillQuote = styled.h2`
  font-weight: ${FONT_WEIGHT.NORMAL};
  color: ${COLORS.GREY.MYSTIQUE};
`;
const SkillDescription = styled.div`
  border-left: 3px solid;
  border-color: ${COLORS.YELLOW.YELLOW};
  height: 100%;
  padding: ${PADDING.THREE_QUARTERS};
  color: ${COLORS.GREY.MYSTIQUE};
`;
const KnowledgeContainer = styled.div`
  margin: ${MARGIN.NORMAL};
`;
const KnowledgeTitle = styled.h1`
  font-weight: ${FONT_WEIGHT.NORMAL};
`;
const BulletsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

class Skill extends Component {
  render() {
    return (
      <ScrollableAnchor id={EN.portfolio.links.skill}>
        <SkillsContainer>
          <SectionIntro
            description={EN.portfolio.intros.skill.description}
            title={EN.portfolio.intros.skill.title}
          />
          <SkillContentContainer>
            <SkillContent>
              <SkillHeader>
                {EN.portfolio.skill.header}
              </SkillHeader>
              <SkillQuote>
                {EN.portfolio.skill.quote}
              </SkillQuote>
              <SkillDescription>
                {EN.portfolio.skill.description}
              </SkillDescription>
            </SkillContent>
            <Chart chartId={SKILL_BAR_CHART.chartId} config={SKILL_BAR_CHART.config} />
          </SkillContentContainer>
          <KnowledgeContainer>
            <KnowledgeTitle>
              {EN.portfolio.skill.knowledge}
            </KnowledgeTitle>
            <BulletsContainer>
              <Bullet bullets={EN.portfolio.skill.bulletGroupOne} />
              <Bullet bullets={EN.portfolio.skill.bulletGroupTwo} />
              <Bullet bullets={EN.portfolio.skill.bulletGroupThree} />
            </BulletsContainer>
          </KnowledgeContainer>
        </SkillsContainer>
      </ScrollableAnchor>
    );
  }
}

export default Skill;
