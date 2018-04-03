import _ from 'lodash';

export const reduceAddDate = (p, v) => {
  p.date = v.date;
  p.invested += v.invested;
  p.investors = _.uniqBy([...p.investors, v.username], d => {
    return d;
  });
  return p;
};

export const reduceRemoveDate = (p, v) => {
  p.date = v.date;
  p.invested -= v.invested;
  p.investors = _.without(p.investors, v.username);
  return p;
};

export const reduceInitialDate = () => ({
  date: 0,
  invested: 0,
  investors: [],
});
