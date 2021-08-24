import React from "react";
import "./Home_components.css";

function Home_banner_img({ src }) {
  return (
    <div className="homeBanner__imgWrapper">
      <img loading="lazy" src={src} alt="" />
    </div>
  );
}

export default Home_banner_img;
