import React, { Component } from 'react';
import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';
import { MARGIN } from '../../constants/styles';
import EN from '../../constants/translations/en';
import SectionIntro from '../common/section-intro';
import PortfolioItem from './portfolio-item';
import { ALL_PORTFOLIOS } from '../../constants/portfolio';

const PortfolioContainer = styled.div`
  width: 100%;
  min-height: 80vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-flow: column;
  margin: 0 ${MARGIN.NORMAL_AND_HALF};
`;

class Portfolio extends Component {
  render() {
    return (
      <ScrollableAnchor id={EN.portfolio.links.portfolio}>
        <PortfolioContainer>
          <SectionIntro
            description={EN.portfolio.intros.portfolio.description}
            title={EN.portfolio.intros.portfolio.title}
          />
          <ContentContainer>
            {ALL_PORTFOLIOS.map((portfolio, index) => (
              <PortfolioItem
                key={index}
                title={portfolio.title}
                tech={portfolio.tech}
                description={portfolio.description}
                link={portfolio.link}
              />
            ))}
          </ContentContainer>
        </PortfolioContainer>
      </ScrollableAnchor>
    );
  }
}

export default Portfolio;
