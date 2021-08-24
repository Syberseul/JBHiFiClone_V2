import * as actionTypes from "./actionType";

const defaultState = {
  menuOpen: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MENU:
      return { ...state, menuOpen: true };

    case actionTypes.CLOSE_MENU:
      return { ...state, menuOpen: false };

    default:
      return state;
  }
};

export default reducer;
