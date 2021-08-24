import axios from "axios";

import * as actionTypes from "./actionTypes";

const updateHomeData = (data) => ({
  type: actionTypes.UPDATE_HOME_DATA,
  data,
});

export const getHomeInfo = () => {
  return (dispatch) => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((res) => {
        const { data } = res;
        dispatch(updateHomeData(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addItemToCart = (item) => ({
  type: actionTypes.ADD_ITEM_TO_CART,
  item,
});
