import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import {
  FavoriteBorder as FavoriteBorderIcon,
  AddShoppingCart as AddShoppingCartIcon,
} from "@material-ui/icons";
import "./Home_components.css";

function Home_item(props) {
  const { title, price, image, category } = props.item;
  const { addItemToCart } = props;

  // const {wishList, addItemToCart, addItemToWishList, removeItemFromWishList} = props;

  // const foundItem = wishList.find(obj => obj.title === title);

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
            // style={{color: foundItem ? "red" : "black"}}
            // onClick={() => {
            //   {
            //     fountItem
            //       ? removeItemFromWishList(props.item)
            //       : addItemToWishList(props.item);
            //   }
            // }}
          />
          <p className="homeItem__toolTip toWishList">Wish List</p>
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
  // get data from wishList store
});

const mapDispatch = (dispatch) => ({
  addItemToCart(item) {
    dispatch(actionCreators.addItemToCart(item));
  },
  // dispatch addItemToWishList
  // dispatch removeItemFromWishList
});

export default connect(mapState, mapDispatch)(Home_item);
