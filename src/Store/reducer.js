import { combineReducers } from "redux";

import { reducer as headerReducer } from "../pages/common/header/store";
import { reducer as homeReducer } from "../pages/Home/store";
import { reducer as cartReducer } from "../pages/Cart/store";
import { reducer as wishListReducer } from "../pages/WishList/store";
import { reducer as accountReducer } from "../pages/Account/store";

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  cart: cartReducer,
  wishList: wishListReducer,
  account: accountReducer,
});

export default reducer;
