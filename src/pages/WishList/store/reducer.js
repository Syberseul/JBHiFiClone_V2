import * as actionTypes from "./actionTypes";

const defaultState = {
  itemsInWishList: [],
};

// add
const addToWishList = (state, action) => {
  const { item } = action;
  const { itemsInWishList } = state;

  let foundItem = itemsInWishList.find((obj) => obj.title === item.title);

  if (!foundItem) {
    return {
      ...state,
      itemsInWishList: [...itemsInWishList, item],
    };
  }

  return state;
};

// remove
const removeFromWishList = (state, { item }) => {
  let { itemsInWishList } = state;
  let foundItem = itemsInWishList.find((obj) => obj.title === item.title);

  if (foundItem) {
    let foundIndex = itemsInWishList.findIndex((i) => i.id === foundItem.id);
    let tempList = [...itemsInWishList, itemsInWishList.splice(foundIndex, 1)];
  }

  return {
    ...state,
    itemsInWishList: itemsInWishList,
  };
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_WISHLIST:
      return addToWishList(state, action);
    case actionTypes.REMOVE_FROM_WISHLIST:
      return removeFromWishList(state, action);
    default:
      return state;
  }
};
