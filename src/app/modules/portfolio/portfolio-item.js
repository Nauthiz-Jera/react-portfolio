import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { COLORS, FONT_SIZE, PADDING, MARGIN } from '../../constants/styles';

const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const ItemInfoContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 40%;
  padding: ${PADDING.NORMAL};
  align-self: center;
`;
const TechListContainer = styled.ul`
  display: flex;
  flex-flow: row wrap;
  padding: 0;
`;
const ItemTitle = styled.h2`color: ${COLORS.YELLOW.YELLOW};`;
const TechTitle = styled.div`
  font-size: ${FONT_SIZE.FONT_20PX};
  color: ${COLORS.GREY.MIDNIGHT_GREY};
`;
const IconContainer = styled.div`
  color: ${COLORS.YELLOW.YELLOW};
  padding: ${PADDING.QUARTER};
  font-size: ${FONT_SIZE.FONT_14PX};
  justify-content: center;
`;
const IconText = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
`;
const TechList = styled.li`
  list-style: none;
  color: ${COLORS.GREY.MYSTIQUE};
  padding: ${PADDING.QUARTER};
  display: flex;
  flex-flow: row;
  justify-content: center;
`;
const ItemDescription = styled.div`color: ${COLORS.GREY.MYSTIQUE};`;
const ItemVideoContainer = styled.div`
  display: flex;
  width: 60%;
  padding: ${PADDING.NORMAL_AND_HALF};
  align-self: flex-end;
  flex-flow: column;
`;
const BorderBottom = styled.div`
  border-bottom: 3px solid;
  border-color: ${COLORS.YELLOW.YELLOW};
  width: 90%;
  margin: 0 ${MARGIN.AUTO};
  padding: ${PADDING.HALF};
`;

const ItemVideo = styled.iframe``;

class PortfolioItem extends PureComponent {
  render() {
    const { title, tech, description, link } = this.props;
    return (
      <ItemContainer>
        <ItemInfoContainer>
          <ItemTitle>{title}</ItemTitle>
          <TechTitle>Tech</TechTitle>
          <TechListContainer>
            {tech.map((tec, index) => (
              <TechList key={index}>
                <IconContainer>
                  <i className="fa fa-star-o" aria-hidden="true" />
                </IconContainer>
                <IconText>{tec}</IconText>
              </TechList>
            ))}
          </TechListContainer>
          <ItemDescription>{description}</ItemDescription>
        </ItemInfoContainer>
        <ItemVideoContainer>
          <ItemVideo
            className="tscplayer_inline embeddedObject"
            name="tsc_player"
            scrolling="no"
            frameBorder="0"
            type="text/html"
            src={link}
            height="350"
            width="100%"
            allowFullScreen
          />
          <BorderBottom />
        </ItemVideoContainer>
      </ItemContainer>
    );
  }
}

export default PortfolioItem;
