import * as actionTypes from "./actionTypes";

export const addItemToWishList = (item, inWishList) => ({
  type: actionTypes.ADD_TO_WISHLIST,
  item,
  inWishList,
});

export const removeFromWishList = (item) => ({
  type: actionTypes.REMOVE_FROM_WISHLIST,
  item,
});

export const addToCart = (item) => ({
  type: actionTypes.ADD_TO_CART,
  item,
});
