import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./cart.css";
import Cart_emptyCart from "./components/Cart_emptyCart";
import Cart_item from "./components/Cart_item";
import Cart_subTotal from "./components/Cart_subTotal";
import Cart_summary from "./components/Cart_summary";

function index({ items, totalAmount, totalPrice }) {
  return (
    <div className="cart">
      {totalAmount > 0 ? (
        <div>
          <Cart_summary />
          {items.map((item, index) => (
            <Cart_item key={index} item={item} />
          ))}
          <Cart_subTotal totalPrice={totalPrice} />
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
  totalPrice: state.cart.totalPrice,
});

export default connect(mapState, null)(index);
