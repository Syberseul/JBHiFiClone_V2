import React from "react";
import Home_subBanner_img from "./Home_subBanner_img";
import * as banner from "../../../static/bannerImg";

function Home_subBanner() {
  return (
    <div className="homeSubBanner">
      <Home_subBanner_img
        cname={"homeSubBanner__div1"}
        src={banner.subBanner_1}
      />
      <Home_subBanner_img
        cname={"homeSubBanner__div"}
        src={banner.subBanner_2}
      />
      <Home_subBanner_img
        cname={"homeSubBanner__div"}
        src={banner.subBanner_3}
      />
    </div>
  );
}

export default Home_subBanner;
