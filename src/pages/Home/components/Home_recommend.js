import React, { useEffect } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store/index";
import "./Home_components.css";
import Home_item from "./Home_item";

function Home_recommend({ items, fetchHomeData }) {
  useEffect(() => {
    fetchHomeData();
  }, []);

  return (
    <div className="homeRecommend">
      <p className="homeRecommend__title">RECOMMENDED FOR YOU</p>
      <div className="homeRecommend__itemContainer">
        {items.map((item, index) => (
          <Home_item key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

const mapState = (state) => ({
  items: state.home.items,
});

const mapDispatch = (dispatch) => ({
  fetchHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
});

export default connect(mapState, mapDispatch)(Home_recommend);
