import React from "react";
import "./Home_components.css";

function Home_subBanner_img({ cname, src }) {
  return (
    <div className={cname}>
      <img src={src} alt="" className="homeSubBannerImg" />
    </div>
  );
}

export default Home_subBanner_img;
