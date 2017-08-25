import React, { Component } from 'react';
import styled from 'styled-components';
import { PADDING } from '../../constants/styles';
import d3 from 'd3';
import c3 from 'c3';

const ChartContainer = styled.div`
display: block;
padding: ${PADDING.NORMAL};
`;

class Chart extends Component {
  componentDidMount() {
    const { config } = this.props;
    c3.generate(config);
  }
  render() {
    const { chartId } = this.props;
    return (
      <ChartContainer>
        <div id={chartId} />
      </ChartContainer>
    );
  }
}

export default Chart;
