import styled from 'styled-components';

import TitleText from 'shared/TitleText/title-text';
import DisplayText from 'shared/DisplayText/display-text';
import TopBorder from './top-border';
import Header from './header';
import HeaderDescription from './header-description';
import ImageContainer from './image-container';
import Image from './image';
import Content from './content';
import Chevron from './chevron';

import { COLOR_PALETTE } from '../../constants/styles';

const Overview = {};

Overview.main = styled.div`
  background-color: white;
  border-radius: 3px;
  border: solid 1px ${COLOR_PALETTE.BORDER_STROKE};
  border-top: none;
  display: flex;
  flex-direction: column;
  min-height: 160px;
  position: relative;
  width: 100%;
`;
Overview.topBorder = TopBorder;
Overview.header = Header;
Overview.headerDescription = HeaderDescription;
Overview.title = TitleText;
Overview.text = DisplayText;
Overview.imageContainer = ImageContainer;
Overview.image = Image;
Overview.content = Content;
Overview.chevron = Chevron;

export default Overview;
