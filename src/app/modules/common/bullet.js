import React, { Component } from 'react';
import styled from 'styled-components';
import { COLORS, FONT_SIZE, FONT_WEIGHT, MARGIN, PADDING } from '../../constants/styles';

const KnowledgeBullets = styled.li`
  display: flex;
  list-style: none;
  font-weight: ${FONT_WEIGHT.SLIM};
  font-size: ${FONT_SIZE.FONT_18PX};
  color: ${COLORS.GREY.MIDNIGHT_GREY};
  margin: ${MARGIN.NORMAL} 0;
`;

const IconContainer = styled.div`
  color: ${COLORS.YELLOW.YELLOW};
  padding: 0 ${PADDING.HALF};
`;

class Bullet extends Component {
  render() {
    const { bullets } = this.props;
    return (
      <ul>
        {bullets.map((bullet, index) => (
          <KnowledgeBullets key={index}>
            <IconContainer>
              <i className="fa fa-superpowers" aria-hidden="true" />
            </IconContainer>
            {bullet}
          </KnowledgeBullets>
        ))}
      </ul>
    );
  }
}

export default Bullet;
