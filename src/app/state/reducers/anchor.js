import { ANCHOR } from '../actions/action-types';

const INITIAL_STATE = {
  currentAnchor: '#HOME',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ANCHOR:
      return {
        ...state,
        currentAnchor: action.payload,
      };
    default:
      return state;
  }
};
