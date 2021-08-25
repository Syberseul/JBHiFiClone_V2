import { combineReducers } from "redux";

import { reducer as headerReducer } from "../pages/common/header/store";
import { reducer as homeReducer } from "../pages/Home/store";
import { reducer as cartReducer } from "../pages/Cart/store";

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  cart: cartReducer,
});

export default reducer;
