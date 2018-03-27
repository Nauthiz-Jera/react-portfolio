import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';

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

const Bullet = ({ bullets }) => (
  <ul>
    {_.map(bullets, (bullet, index) => {
      const composeBulletKey = `${bullet}-${index}`;
      return (
        <KnowledgeBullets key={composeBulletKey}>
          <IconContainer>
            <i className="fa fa-superpowers" aria-hidden="true" />
          </IconContainer>
          {bullet}
        </KnowledgeBullets>
      );
    })}
  </ul>
);

Bullet.propTypes = {
  bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Bullet;
