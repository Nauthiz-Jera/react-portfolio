import { MENU_TOGGLE } from './action-types';

export const menuToggle = toggle => ({
  type: MENU_TOGGLE,
  payload: toggle,
});
