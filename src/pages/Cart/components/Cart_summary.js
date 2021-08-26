import React from "react";
import "./Cart_components.css";
import { LocalShipping as LocalShippingIcon } from "@material-ui/icons";

function Cart_summary() {
  return (
    <div className="cart__summary">
      <div className="cart__summaryFirstLine">
        <p className="cart__summaryTitle">Cart Summary</p>
        <div className="cart__summaryFirstLineWrapper">
          <LocalShippingIcon />
          <p className="cart__summaryDelivery">Delivery estimate?</p>
        </div>
      </div>

      <div className="cart__summaryLastLine">
        <p className="cart__summaryText">Product</p>
        <div className="cart__summaryLastLineWrapper">
          <p className="cart__summaryText">Quantity</p>
          <p className="cart__summaryText">price</p>
        </div>
      </div>
    </div>
  );
}

export default Cart_summary;
