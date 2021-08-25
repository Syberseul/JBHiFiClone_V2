import React from "react";
import { connect } from "react-redux";
import "./cart.css";
import Cart_emptyCart from "./components/Cart_emptyCart";

function index({ items, totalAmount }) {
  return (
    <div className="cart">
      {totalAmount > 0 ? (
        <div>
          {items}
          {totalAmount}
        </div>
      ) : (
        <Cart_emptyCart />
      )}
    </div>
  );
}

const mapState = (state) => ({
  items: state.cart.itemsInCart,
  totalAmount: state.cart.totalAmount,
});

export default connect(mapState, null)(index);
