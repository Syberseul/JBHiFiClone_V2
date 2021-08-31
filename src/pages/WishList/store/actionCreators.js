import * as actionTypes from "./actionTypes";

export const addToWishList = (item) => ({
  type: actionTypes.ADD_TO_WISHLIST,
  item,
});

export const removeFromWishList = (item) => ({
  type: actionTypes.REMOVE_FROM_WISHLIST,
  item,
});

export const addToCart = (item) => ({
  type: actionTypes.ADD_ITEM_TO_CART,
  item,
});
