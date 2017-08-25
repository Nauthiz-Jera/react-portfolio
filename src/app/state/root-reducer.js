import { combineReducers } from 'redux';
import toggle from './reducers/menu-toggle';
import typeWriterText from './reducers/type-writer';
import anchor from './reducers/anchor';

export default combineReducers({
  toggle,
  typeWriterText,
  anchor,
});
