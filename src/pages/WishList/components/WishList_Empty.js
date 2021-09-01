import React from "react";
import { Link } from "react-router-dom";
import "./WishList_components.css";

function WishList_Empty() {
  return (
    <div className="wishList__empty">
      <p className="wishList__text">There are no items in your wish list</p>
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <p className="wishList__back">Back to Shopping</p>
      </Link>
    </div>
  );
}

export default WishList_Empty;
