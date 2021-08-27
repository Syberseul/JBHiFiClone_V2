import React from "react";
import { connect } from "react-redux";
import ItemList from "./components/WishList_itemList";
import EmptyList from "./components/WishList_Empty";
import "./WishList.css";

function index({ wishList }) {
  return (
    <div className="wishList">
      {Object.keys(wishList).length !== 0 ? (
        <ItemList wishList={wishList} />
      ) : (
        <EmptyList />
      )}
    </div>
  );
}

const mapState = (state) => ({
  wishList: state.wishList.itemsInWishList,
});

export default connect(mapState, null)(index);
