import * as actionTypes from "./actionTypes";

export const userLogin = (user) => ({
  type: actionTypes.USER_LOGIN,
  user,
});

export const userLogout = () => ({
  type: actionTypes.USER_LOGOUT,
});
