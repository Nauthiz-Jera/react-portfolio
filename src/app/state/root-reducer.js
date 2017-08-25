import { combineReducers } from 'redux';
import toggle from './reducers/menu-toggle';
import typeWriterText from './reducers/type-writer';

export default combineReducers({
  toggle,
  typeWriterText,
});
