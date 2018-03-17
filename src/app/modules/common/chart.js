import React, { Component } from 'react';
import styled from 'styled-components';
import { PADDING } from '../../constants/styles';
import c3 from 'c3';
import _ from 'lodash';

const ChartContainer = styled.div`
  display: block;
  padding: ${PADDING.NORMAL};
`;

class Chart extends Component {
  componentDidMount() {
    const { config } = this.props;
    c3.generate(config);
  }

  shouldComponentUpdate(nextProps) {
    return !_.isEqual(nextProps, this.props);
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
