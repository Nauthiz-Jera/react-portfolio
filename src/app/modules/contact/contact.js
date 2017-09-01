import React, { Component } from 'react';
import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';
import EN from '../../constants/translations/en';
import { COLORS, FONT_SIZE, CURSOR, FONT_WEIGHT, MARGIN, PADDING } from '../../constants/styles';
import { ROTATE_360 } from '../../constants/animations';
import PDF from '../../assets/pdf/Ed_Resume.pdf';

const ContactContainer = styled.div`
  display:flex;
  flex-flow: row wrap;
  width: 100%;
  min-height: 35vh;
`;
const Section = styled.div`
  display: flex;
  flex-flow: column;
  width: 50%;
  height: 35vh;
  background-color: ${props => props.color};
  color: ${COLORS.WHITE.WHITE};
  justify-content: flex-start;
  align-items: center;
`;
const Title = styled.h3``;
const Info = styled.div`
  color: ${props => props.color || COLORS.WHITE.WHITE};
  padding: ${PADDING.THREE_QUARTERS};
`;
const IconContainer = styled.a`
  font-size: ${FONT_SIZE.FONT_18PX};
  padding: ${PADDING.HALF};
  &:hover{
    cursor: ${CURSOR.POINTER};
    animation: ${ROTATE_360} 2s linear infinite; 
  }
  color: ${COLORS.WHITE.WHITE};
`;
const DownloadButton = styled.button`
  background-color: ${COLORS.YELLOW.YELLOW};
  padding: ${PADDING.NORMAL};
  margin: ${MARGIN.LARGE_AND_HALF} ${MARGIN.HALF};
  font-size: ${FONT_SIZE.FONT_18PX};
  font-weight: ${FONT_WEIGHT.SLIGHT_BOLD};
  border-radius: 2px;
  border: none;
  cursor: ${CURSOR.POINTER};
`;

class Contact extends Component {
  render() {
    function downloadCV() {
      window.open(PDF, '_blank', 'fullscreen=yes');
    }
    return (
      <ScrollableAnchor id={EN.portfolio.links.contact}>
        <ContactContainer>
          <Section color={COLORS.GREY.MORTAR}>
            <Title>
              Contact Me
            </Title>
            <Info color={COLORS.WHITE.WHITE}>
              (443)-657-3448
            </Info>
            <Info color={COLORS.GREY.MYSTIQUE}>
              edkim51191@gmail.com
            </Info>
          </Section>
          <Section color={COLORS.GREY.DUSK}>
            <Title>
              View More
            </Title>
            <Info>
              GitHub
            </Info>
            <IconContainer target="_blank" href="https://github.com/Nauthiz-Jera">
              <i className="fa fa-github-alt" aria-hidden="true" />
            </IconContainer>
            <DownloadButton onClick={downloadCV}>
              View my CV
            </DownloadButton>
          </Section>
        </ContactContainer>
      </ScrollableAnchor>
    );
  }
}

export default Contact;
