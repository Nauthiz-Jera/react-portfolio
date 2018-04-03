import { map, filter, comp, into } from 'transducers-js';
import _ from 'lodash';

/* Has Data changed */
const initialDataCheck = data => ({ key: data.key, data: data.data });
const filterCheckedData = data => data.data !== null && data.required;
const composeHasDataChangedMapFilter = comp(filter(filterCheckedData), map(initialDataCheck));

export const hasDataChanged = (originalData, contentData) => {
  const formattedContentData = into([], composeHasDataChangedMapFilter, contentData);
  const formattedOriginalData = _.filter(originalData, data => data.data !== null);
  return !_.isEqual(formattedOriginalData, formattedContentData);
};

/* Clean Data For Post */
const initialDataClean = uncleanData => ({ key: uncleanData.key, data: uncleanData.data });
const filterCleanData = cleanData => cleanData.key !== '';
const composeCleanDataMapFilter = comp(filter(filterCleanData), map(initialDataClean));

export const cleanDataForPost = uncleanData => into([], composeCleanDataMapFilter, uncleanData);
