import styled from 'styled-components';

import Badge from 'shared/Badge/badge';
import Button from 'shared/Button/button';
import ProgressBar from 'shared/Progress/progress';
import TitleText from 'shared/TitleText/title-text';
import DisplayText from 'shared/DisplayText/display-text';
import ScalingImage from 'shared/ScalingImage/scaling-image';

import { SLIDE_RIGHT_TO_LEFT } from 'constants/animations';
import { PADDING } from 'constants/styles';

import BadgeSection from './badge-section';
import CompanyInfo from './company-info';
import Container from './card-container';
import Description from './company-description';
import Header from './header';
import ImageContainer from './image-container';
import LeftSection from './left-section';
import ProgressSection from './progress-section';
import RaisedSection from './raised-section';
import RightSection from './right-section';
import SectionContainer from './section-container';
import Tag from './tag';

const Card = {};

Card.main = styled.div`
  // animation: ${SLIDE_RIGHT_TO_LEFT} ${props => (props.position % 3) * 0.45}s ease-out;
  display: flex;
  max-width: 310px;
  min-width: 310px;
  max-height: 435px;
  min-height: 435px;
  padding: ${PADDING.THREE_QUARTERS} 0;
  &:hover {
    filter: contrast(100%);
  }
`;

// *-required prop
// badge (badgeSrc)
Card.badge = Badge;
Card.badgeSection = BadgeSection;
// button (title*, onClick*, buttonType)
Card.button = Button;
Card.companyInfo = CompanyInfo;
Card.container = Container;
Card.description = Description;
// Display text (text*, textType)
Card.text = DisplayText;
Card.goalText = DisplayText;
Card.header = Header;
// Title text (text*, headerType, bold)
Card.headerTitle = TitleText;
Card.image = styled(ScalingImage)`
  border: 0;
  border-radius: 3px;
`;
Card.imageContainer = ImageContainer;
Card.leftSection = LeftSection;
Card.location = DisplayText;
Card.progressSection = ProgressSection;
// progress-bar (raiseGoal*, raised*, theme )
Card.progressBar = ProgressBar;
Card.raisedSection = RaisedSection;
Card.raisedText = DisplayText;
Card.rightSection = RightSection;
Card.sectionContainer = SectionContainer;
Card.tag = Tag;
// title (text*, headerType, bold)
Card.title = TitleText;

export default Card;
