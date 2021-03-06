import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import {
  FavoriteBorder as FavoriteBorderIcon,
  AddShoppingCart as AddShoppingCartIcon,
} from "@material-ui/icons";
import "./WishList_components.css";
import { useState } from "react";

function WishList_item(props) {
  const { item, wishList, removeFromWishList, addItemToCart } = props;
  const { title, price, category, image } = item;

  let foundItem = wishList.find((obj) => obj.title === title);

  const [inWishList, setInWishList] = useState(foundItem ? true : false);

  const removeItem = (item) => {
    removeFromWishList(item);
    setInWishList(!inWishList);
  };

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
        <p className="wishList__price">$ {price}</p>
        <div className="wishList__addToWishListWrapper">
          <FavoriteBorderIcon
            className="wishList__addToWishListIcon"
            style={{ color: inWishList ? "red" : "black" }}
            onClick={() => {
              removeItem(item);
            }}
          />
          {inWishList ? (
            <p className="wishList__toolTip">Remove from wish list</p>
          ) : (
            <p className="wishList__toolTip">Add to wish list</p>
          )}
        </div>
        <div className="wishList__addToCartWrapper">
          <AddShoppingCartIcon
            className="wishList__addToCartIcon"
            onClick={() => addItemToCart(item)}
          />
          <p className="wishList__cartToolTip">Add to cart</p>
        </div>
      </div>
    </div>
  );
}

const mapState = (state) => ({
  wishList: state.wishList.itemsInWishList,
});

const mapDispatch = (dispatch) => ({
  removeFromWishList(item) {
    dispatch(actionCreators.removeFromWishList(item));
  },
  addItemToCart(item) {
    dispatch(actionCreators.addToCart(item));
  },
});

export default connect(mapState, mapDispatch)(WishList_item);
