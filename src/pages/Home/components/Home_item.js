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
  const { wishList, addItemToCart, addToWishList, removeFromWishList } = props;
  const { title, price, image, category } = props.item;

  let foundItem = wishList.find((obj) => obj.title === title);

  const [inWishList, setInWishList] = useState(foundItem ? true : false);

  const addItem = (item) => {
    addToWishList(item);
    setInWishList(!inWishList);
  };

  const removeItem = (item) => {
    removeFromWishList(item);
    setInWishList(!inWishList);
  };

  return (
    <div className="homeItem">
      <div className="homeItem__upperWrapper">
        <img src={image} alt="" />
        <div className="homeItem__upperWrapper__right">
          <p className="homeItem__category">{category}</p>
          <p>{foundItem ? "true" : "false"}</p>
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
              inWishList ? removeItem(props.item) : addItem(props.item);
            }}
          />
          {foundItem ? (
            <p className="homeItem__toolTip toWishList">
              Remove from wish list
            </p>
          ) : (
            <p className="homeItem__toolTip toWishList">Add to Wish List</p>
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

const mapState = (state) => ({
  wishList: state.wishList.itemsInWishList,
});

const mapDispatch = (dispatch) => ({
  addItemToCart(item) {
    dispatch(actionCreators.addItemToCart(item));
  },
  addToWishList(item) {
    dispatch(wishListActionCreators.addToWishList(item));
  },
  removeFromWishList(item) {
    dispatch(wishListActionCreators.removeFromWishList(item));
  },
});

export default connect(mapState, mapDispatch)(Home_item);
