import React, { useState } from "react";
import { actionCreators } from "../store";
import { connect } from "react-redux";

function Cart_item({ item, incrementItem, decrementItem, deleteItem }) {
  const { title, price, image, description, amount } = item;
  const [itemAmount, setItemAmount] = useState(amount);

  const IncrementItem = (item) => {
    setItemAmount(amount + 1);
    incrementItem(item);
  };

  const DecrementItem = (item) => {
    setItemAmount(amount - 1);
    decrementItem(item);
  };

  return itemAmount > 0 ? (
    <div className="cart__item">
      <img src={image} alt="" />
      <div className="cart__itemMiddleLine">
        <p className="cart__itemTitle">{title}</p>
        <p className="cart__itemDescription">{description}</p>
      </div>
      <div className="cart__itemLeftSection">
        <p className="cart__itemRemove" onClick={() => deleteItem(item)}>
          Remove
        </p>
        <div className="cart__itemQuantityWrapper">
          <p className="cart__itemButton" onClick={() => DecrementItem(item)}>
            {" "}
            -{" "}
          </p>
          <p className="cart__itemAmount">{amount}</p>
          <p className="cart__itemButton" onClick={() => IncrementItem(item)}>
            {" "}
            +{" "}
          </p>
        </div>
        <p className="cart__itemPrice">$ {(price * amount).toFixed(2)}</p>
      </div>
    </div>
  ) : (
    <></>
  );
}

const mapDispatch = (dispatch) => ({
  incrementItem(item) {
    dispatch(actionCreators.incrementItem(item));
  },
  decrementItem(item) {
    dispatch(actionCreators.decrementItem(item));
  },
  deleteItem(item) {
    dispatch(actionCreators.deleteItem(item));
  },
});

export default connect(null, mapDispatch)(Cart_item);
