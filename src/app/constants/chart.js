import { COLORS } from '../constants/styles';

export const SKILL_BAR_CHART = {
  chartId: 'skillBar',
  config: {
    bindto: '#skillBar',
    padding: {
      top: 25,
      right: 50,
    },
    bar: {
      width: 15,
    },
    size: {
      width: 525,
    },
    color: {
      pattern: ['#FABF62', '#ACB6DD'],
    },
    data: {
      x: 'x',
      columns: [
        ['x', 'JavaScript', 'React / Angular', 'Express / Mongoose', 'HTML/CSS'],
        ['value', 90, 90, 75, 85],
      ],
      type: 'bar',
      color: function() {
        return COLORS.YELLOW.YELLOW;
      },
      labels: {
        format: function(d) {
          return `${d}%`;
        },
      },
    },
    axis: {
      rotated: true,
      x: {
        height: 0,
        type: 'category',
        padding: 0,
      },
      y: {
        max: 100,
        min: 0,
        padding: 0,
        tick: {
          count: 6,
        },
        format: {
          format: function(d) {
            return `${d}%`;
          },
        },
      },
    },
    tooltip: {
      show: false,
    },
    legend: {
      show: false,
    },
  },
};
