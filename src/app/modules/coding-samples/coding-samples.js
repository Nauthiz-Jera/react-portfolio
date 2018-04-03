import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { compose } from 'redux';
import ScrollableAnchor from 'react-scrollable-anchor';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import EN from '../../constants/translations/en';
import SectionIntro from '../common/section-intro';
import { COLORS, FONT_SIZE, MARGIN, PADDING } from '../../constants/styles';

import CollapsableExample from '../collapsable-example/collapsable-example';
import ReadMore from '../CAF/ReadMore/read-more';
import DropAndCrop from '../DragAndDrop/DropAndCrop/drop-and-crop';

const CodingSampleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 80vh;
  margin: ${MARGIN.HALF} 0;
  padding: 0 ${PADDING.HALF};
`;

const ExampleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExampleTitle = styled.h3`color: ${COLORS.YELLOW.YELLOW};`;
const ExampleDescription = styled.div`
  font-size: ${FONT_SIZE.FONT_18PX};
  color: ${COLORS.GREY.DUSK};
`;

const ExampleItem = styled.div`margin: ${MARGIN.NORMAL};`;

class CodingSamples extends PureComponent {
  render() {
    return (
      <ScrollableAnchor id={EN.portfolio.links.codingSamples}>
        <CodingSampleContainer>
          <SectionIntro
            description={EN.portfolio.intros.codingSamples.description}
            title={EN.portfolio.intros.codingSamples.title}
          />
          <ExampleContainer>
            <ExampleTitle>Collapsable HOC Component</ExampleTitle>
            <ExampleDescription>
              <a href="https://github.com/Nauthiz-Jera/Coding-Samples/tree/master/HOC/Collapsable">
                Coding Sample Collapsable HOC
              </a>
            </ExampleDescription>
            <ExampleItem>
              <CollapsableExample />
            </ExampleItem>
          </ExampleContainer>
          <ExampleContainer>
            <ExampleTitle>Read More CAF</ExampleTitle>
            <ExampleDescription>
              <a href="https://github.com/Nauthiz-Jera/Coding-Samples/blob/master/CAF/ReadMore/read-more.js">
                Coding Sample Read More CAF
              </a>
            </ExampleDescription>
            <ExampleItem>
              <ReadMore displayText={EN.portfolio.intros.codingSamples.exampleText} maxLength={150}>
                {editedText => editedText}
              </ReadMore>
            </ExampleItem>
          </ExampleContainer>
          <ExampleContainer>
            <ExampleTitle>Drag, Drop, and Crop</ExampleTitle>
            <ExampleDescription>
              <a href="https://github.com/Nauthiz-Jera/Coding-Samples/blob/master/DragAndDrop/DropAndCrop/drop-and-crop.js">
                Coding Sample Drag, Drop, and Crop
              </a>
            </ExampleDescription>
            <ExampleItem>
              <DropAndCrop callback={() => {}} />
            </ExampleItem>
          </ExampleContainer>
        </CodingSampleContainer>
      </ScrollableAnchor>
    );
  }
}

export default compose(DragDropContext(HTML5Backend))(CodingSamples);
