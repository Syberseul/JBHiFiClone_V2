import React from "react";
import { connect } from "react-redux";
import ItemList from "./components/WishList_itemList";
import EmptyList from "./components/WishList_Empty";
import "./WishList.css";

function Index({ wishList }) {
  return (
    <div className="wishList">
      {Object.keys(wishList).length === 0 ? (
        <EmptyList />
      ) : (
        <ItemList wishList={wishList} />
      )}
    </div>
  );
}

const mapState = (state) => ({
  wishList: state.wishList.itemsInWishList,
});

export default connect(mapState, null)(Index);
