import { TYPE_WRITER } from './action-types';

export const typeWriterText = selectText => ({
  type: TYPE_WRITER,
  payload: selectText,
});
