import React, { useEffect } from "react";

import { connect } from "react-redux";
import Home_banner from "./components/Home_banner";
import Home_subBanner from "./components/Home_subBanner";

import "./Home.css";
import { actionCreators } from "./store";

function Home({ items, fetchHomeData }) {
  useEffect(() => {
    fetchHomeData();
  }, []);

  return (
    <div className="homePage">
      <Home_banner />
      <Home_subBanner />
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

export default connect(mapState, mapDispatch)(Home);
