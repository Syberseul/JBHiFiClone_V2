import * as actionTypes from "./actionTypes";
import { actionTypes as actionTypesFromHome } from "../../Home/store";
// import {actionTypes as actionTypesFromWishList} from "../../WishList/store"

const defaultState = {
  itemsInCart: [],
  totalAmount: 0,
  totalPrice: 0,
};

const addItemToCart = (state, action) => {
  const { item } = action;
  let foundIndex = state.itemsInCart.findIndex((i) => i.id === item.id);
  let foundItem = state.itemsInCart.find((obj) => obj.id === item.id);
  console.log(foundIndex);
  console.log(foundItem);

  if (foundItem !== undefined) {
    return {
      ...state,
      itemsInCart: (state.itemsInCart[foundIndex] =
        state.itemsInCart[foundIndex].amount + 1),
      totalAmount: state.totalAmount + 1,
      totalPrice: state.totalPrice + item.price,
    };
  } else {
    item.amount = 1;
    console.log(item);
    return {
      ...state,
      itemsInCart: state.itemsInCart.push(item),
      totalAmount: state.totalAmount + 1,
      totalPrice: state.totalPrice + item.price,
    };
  }
};

const removeItemFromCart = (state, action) => {
  const { item } = action;
  let foundIndex = state.itemsInCart.findIndex((i) => i.id === item.id);
  let foundItem = state.itemsInCart.find((obj) => obj.id === item.id);

  if (foundItem.amount > 1) {
    return {
      ...state,
      itemsInCart: (state.itemsInCart[foundIndex] =
        state.itemsInCart[foundIndex].amount - 1),
      totalAmount: state.totalAmount - 1,
      totalPrice: state.totalPrice - item.price,
    };
  } else {
    item.amount = 0;
    return {
      ...state,
      itemsInCart:
        state.itemsInCart.slice(0, foundIndex) +
        state.itemsInCart.slice(foundIndex + 1),
      totalAmount: state.totalAmount - 1,
      totalPrice: state.totalPrice - item.price,
    };
  }
};

const deleteItemFromCart = (state, action) => {
  const { item } = action;
  let foundIndex = state.itemsInCart.findIndex((i) => i.id === item.id);
  let foundItem = state.itemsInCart.find((obj) => obj.id === item.id);

  return {
    ...state,
    itemsInCart:
      state.itemsInCart.slice(0, foundIndex) +
      state.itemsInCart.slice(foundIndex + 1),
    totalAmount: state.totalAmount - foundItem.amount,
    totalPrice: state.totalPrice - foundItem.amount * item.price,
  };
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_ITEM:
    case actionTypesFromHome.ADD_ITEM_TO_CART:
      // case actionTypesFromWishList.ADD_ITEM_TO_CART:
      return addItemToCart(state, action);

    case actionTypes.DELETE_ITEM:
      return removeItemFromCart(state, action);

    case actionTypes.DELETE_ITEM:
      return deleteItemFromCart(state, action);

    default:
      return state;
  }
};
