import React from "react";
import { Link } from "react-router-dom";
import "./Cart_components.css";

function Cart_emptyCart() {
  return (
    <div className="cart__empty">
      <p className="cart__text">There are no items in your cart</p>
      <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
        <p className="cart__redirect">Continue Shopping</p>
      </Link>
    </div>
  );
}

export default Cart_emptyCart;
