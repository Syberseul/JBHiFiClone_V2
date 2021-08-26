import React from "react";
import { Link } from "react-router-dom";
import { LockOpen as LockOpenIcon } from "@material-ui/icons";

import "./Cart_components.css";

function Cart_subTotal({ totalPrice }) {
  return (
    <div className="cart__subTotal">
      <div className="cart__subTotalFistLine">
        <div>
          <p className="cart__subTotalPrice">${totalPrice.toFixed(2)}</p>
          <p className="cart_subTotalGST">GST Included</p>
        </div>
        <div>
          <p className="cart__subTotalPrice">Subtotal</p>
          <p className="cart__subTotalDelivery">Excludes Delivery</p>
        </div>
      </div>

      <div className="cart__subTotalSecondLine">
        <div className="cart__subTotalSecondLineRight">
          <LockOpenIcon className="cart__subTotalIcon" />
          <p className="cart__subTotalCheckout">Proceed to Checkout</p>
        </div>
        <div className="cart__subTotalSecondLineLeft">
          <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
            <p className="cart__subTotalBack">Continue Shopping</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart_subTotal;
