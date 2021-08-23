import { combineReducers } from "redux";

import { reducer as headerReducer } from "../pages/common/header/store";

const reducer = combineReducers({
  header: headerReducer,
});

export default reducer;
