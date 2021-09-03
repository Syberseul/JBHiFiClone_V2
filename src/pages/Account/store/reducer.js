import * as actionTypes from "./actionTypes";

const defaultState = {
  userLoggedIn: false,
  user: {
    userName: "",
    photoURL: "",
  },
};

const userLogIn = (state, action) => {
  if (action.user !== undefined) {
    return {
      userLoggedIn: true,
      user: {
        userName: action.user.displayName,
        photoURL: action.user.photoURL,
      },
    };
  }
  return state;
};

const userLogOut = (state, action) => {
  return {
    userLoggedIn: false,
    user: {
      userName: "",
      photoURL: "",
    },
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
