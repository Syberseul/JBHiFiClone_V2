import { combineReducers } from "redux";

import { reducer as headerReducer } from "../pages/common/header/store";
import { reducer as homeReducer } from "../pages/Home/store";

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
});

export default reducer;
