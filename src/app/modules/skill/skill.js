import React, { Component } from 'react';
import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';
import { COLORS, FONT_SIZE, FONT_WEIGHT, MARGIN, PADDING } from '../../constants/styles';
import EN from '../../constants/translations/en';
import SectionIntro from '../common/section-intro';
import Chart from '../common/chart';
import { SKILL_BAR_CHART } from '../../constants/chart';

const SkillsContainer = styled.div`
  display: flex; 
  flex-flow: column wrap;
  width:100%;
  height: 100vh;
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
          <Chart chartId={SKILL_BAR_CHART.chartId} config={SKILL_BAR_CHART.config} />
        </SkillsContainer>
      </ScrollableAnchor>
    );
  }
}

export default Skill;
