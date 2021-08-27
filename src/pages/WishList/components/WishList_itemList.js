import React from "react";
import Item from "./WishList_item";
import "./WishList_components.css";

function WishList_itemList({ wishList }) {
  return (
    <div className="wishList__itemList">
      {wishList.map((item, index) => (
        <div>
          <Item key={index} item={item} />
        </div>
      ))}
    </div>
  );
}

export default WishList_itemList;
