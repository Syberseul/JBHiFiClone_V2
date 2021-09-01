import * as actionTypes from "./actionTypes";

const defaultState = {
  userLoggedIn: false,
  userName: "",
};

const userLogIn = (state, action) => {
  if (action.user !== undefined) {
    return {
      userLoggedIn: true,
      userName: action.user.displayName,
    };
  }
  return state;
};

const userLogOut = (state, action) => {
  return {
    userLoggedIn: false,
    userName: "",
  };
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return userLogIn(state, action);
    case actionTypes.USER_LOGOUT:
      return userLogOut(state, action);
    default:
      return state;
  }
};
