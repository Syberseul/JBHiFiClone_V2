import * as actionTypes from "./actionTypes";
import { actionTypes as actionTypesFromHome } from "../../Home/store";
import { actionTypes as actionTypesFromWishList } from "../../WishList/store";

const defaultState = {
  itemsInCart: [],
  totalAmount: 0,
  totalPrice: 0,
};

// increment
const addItemToCart = (state, action) => {
  const { item } = action;
  let { itemsInCart, totalAmount, totalPrice } = state;

  let foundItem = itemsInCart.find((obj) => obj.id === item.id);

  if (foundItem) {
    foundItem.amount += 1;
    return {
      ...state,
      totalAmount: totalAmount + 1,
      totalPrice: totalPrice + item.price,
    };
  } else {
    item.amount = 1;
    return {
      ...state,
      itemsInCart: [...itemsInCart, item],
      totalAmount: totalAmount + 1,
      totalPrice: totalPrice + item.price,
    };
  }
};

// decrement
const removeItemFromCart = (state, action) => {
  const { item } = action;
  let { itemsInCart, totalAmount, totalPrice } = state;

  let foundItem = itemsInCart.find((obj) => obj.id === item.id);
  let foundIndex = itemsInCart.findIndex((i) => i.id === item.id);

  if (foundItem.amount > 1) {
    foundItem.amount -= 1;
    return {
      ...state,
      totalAmount: totalAmount - 1,
      totalPrice: totalPrice - item.price,
    };
  } else {
    item.amount = 0;
    itemsInCart.splice(foundIndex, 0);
    return {
      ...state,
      totalAmount: totalAmount - 1,
      totalPrice: totalPrice - item.price,
    };
  }
};

// delete
const deleteItemFromCart = (state, action) => {
  const { item } = action;
  let { itemsInCart, totalAmount, totalPrice } = state;

  let foundIndex = itemsInCart.findIndex((i) => i.id === item.id);
  itemsInCart.splice(foundIndex, 1);

  return {
    ...state,
    totalAmount: totalAmount - item.amount,
    totalPrice: totalPrice - item.amount * item.price,
  };
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_ITEM:
    case actionTypesFromHome.ADD_ITEM_TO_CART:
    case actionTypesFromWishList.ADD_ITEM_TO_CART:
      return addItemToCart(state, action);

    case actionTypes.DECREMENT_ITEM:
      return removeItemFromCart(state, action);

    case actionTypes.DELETE_ITEM:
      return deleteItemFromCart(state, action);

    default:
      return state;
  }
};
