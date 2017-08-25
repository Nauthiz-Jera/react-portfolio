import { MENU_TOGGLE } from '../actions/action-types';

const INITIAL_STATE = {
  toggled: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MENU_TOGGLE:
      return {
        ...state,
        toggled: action.payload,
      };
    default:
      return state;
  }
};
