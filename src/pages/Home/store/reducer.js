import * as actionTypes from "./actionTypes";

const defaultState = {
  items: [],
};

const updateHomeData = (state, action) => {
  for (let i = 0; i < action.data.length; i++) {
    action.data[i].amount = 0;
  }
  return { ...state, items: action.data };
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_HOME_DATA:
      return updateHomeData(state, action);

    default:
      return state;
  }
};
