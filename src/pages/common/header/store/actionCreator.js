import * as actionTypes from "./actionType";

export const toggleMenuOpen = () => ({
  type: actionTypes.OPEN_MENU,
});

export const toggleMenuClose = () => ({
  type: actionTypes.CLOSE_MENU,
});
