import * as actionTypes from "./actionTypes";

export const decrementItem = (item) => ({
  type: actionTypes.DECREMENT_ITEM,
  item,
});

export const incrementItem = (item) => ({
  type: actionTypes.INCREMENT_ITEM,
  item,
});

export const deleteItem = (item) => ({
  type: actionTypes.DECREMENT_ITEM,
  item,
});
