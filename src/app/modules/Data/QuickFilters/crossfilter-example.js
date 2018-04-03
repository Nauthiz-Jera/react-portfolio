
import Crossfilter from "crossfilter";
import _ from 'lodash';

import { reduceAddDate, reduceRemoveDate, reduceInitialDate } from "./utility";

class CrossfilterExample {
  static aggregateByDate(crossData) {
    return crossData
      .dimension(data => data.date)
      .group()
      .reduce(reduceAddDate, reduceRemoveDate, reduceInitialDate)
      .orderNatural()
      .top(Infinity)
      .map(data => data.value);
  }
}

export default CrossfilterExample;
