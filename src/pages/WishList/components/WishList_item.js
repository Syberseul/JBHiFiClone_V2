import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import {
  FavoriteBorder as FavoriteBorderIcon,
  AddShoppingCart as AddShoppingCartIcon,
} from "@material-ui/icons";
import "./WishList_components.css";

function WishList_item({ item, removeFromWishList, addItemToCart }) {
  const { title, price, category, image } = item;

  return (
    <div className="wishList__item">
      <div className="wishList__itemTopWrapper">
        <img src={image} alt="" />
        <div className="wishList__topRightWrapper">
          <p className="wishList__category">{category}</p>
          <p className="wishList__title">{title}</p>
        </div>
      </div>
      <div className="wishList__itemBottomWrapper">
        <p className="wishList__price"></p>
        <div className="wishList__addToWishListWrapper">
          <FavoriteBorderIcon
            className="wishList__addToWishListIcon"
            onClick={() => {
              removeFromWishList(item);
            }}
          />
          <p className="wishList__toolTip">Remove from wish list</p>
        </div>
        <AddShoppingCartIcon
          className="wishList__addToCartIcon"
          onClick={() => addItemToCart(item)}
        />
      </div>
    </div>
  );
}

const mapDispatch = (dispatch) => ({
  removeFromWishList(item) {
    dispatch(actionCreators.removeFromWishList(item));
  },
  addItemToCart(item) {
    dispatch(actionCreators.addToCart(item));
  },
});

export default connect(null, mapDispatch)(WishList_item);
