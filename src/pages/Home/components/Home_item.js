import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { actionCreators as wishListActionCreators } from "../../WishList/store";
import {
  FavoriteBorder as FavoriteBorderIcon,
  AddShoppingCart as AddShoppingCartIcon,
} from "@material-ui/icons";
import "./Home_components.css";

function Home_item(props) {
  const { item } = props;
  const { title, price, image, category } = props.item;
  const { addItemToCart, addItemToWishList, removeItemFromWishList } = props;

  const [inWishList, setInWishList] = useState(false);

  const addToWishList = (item) => {
    setInWishList(true);
    addItemToWishList(item);
  };

  const removeFromWishList = (item) => {
    setInWishList(false);
    removeItemFromWishList(item);
  };

  return (
    <div className="homeItem">
      <div className="homeItem__upperWrapper">
        <img src={image} alt="" />
        <div className="homeItem__upperWrapper__right">
          <p className="homeItem__category">{category}</p>
          <p className="homeItem__title">{title}</p>
        </div>
      </div>

      <div className="homeItem__lowerWrapper">
        <p className="homeItem__price">${price}</p>
        <div>
          <FavoriteBorderIcon
            className="homeItem__addToWishList"
            style={{ color: inWishList ? "red" : "black" }}
            onClick={() => {
              {
                !inWishList ? addToWishList(item) : removeFromWishList(item);
              }
            }}
          />
          {inWishList ? (
            <p className="homeItem__toolTip toWishList">
              Remove from wish list
            </p>
          ) : (
            <p className="homeItem__toolTip toWishList">Wish List</p>
          )}
        </div>
        <div>
          <AddShoppingCartIcon
            className="homeItem__addToCart"
            onClick={() => addItemToCart(props.item)}
          />
          <p className="homeItem__toolTip toCart">Add to your cart</p>
        </div>
      </div>
    </div>
  );
}

const mapDispatch = (dispatch) => ({
  addItemToCart(item) {
    dispatch(actionCreators.addItemToCart(item));
  },
  addItemToWishList(item) {
    dispatch(wishListActionCreators.addItemToWishList(item));
  },
  removeItemFromWishList(item) {
    dispatch(wishListActionCreators.removeFromWishList(item));
  },
});

export default connect(null, mapDispatch)(Home_item);
