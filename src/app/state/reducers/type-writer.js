import { TYPE_WRITER } from '../actions/action-types';
import EN from '../../constants/translations/en';

const INITIAL_STATE = {
  selectedText: EN.portfolio.description.personal[0],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPE_WRITER:
      return {
        ...state,
        selectedText: action.payload,
      };
    default:
      return state;
  }
};
