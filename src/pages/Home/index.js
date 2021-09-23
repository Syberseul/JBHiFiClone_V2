import React from "react";
import Home_banner from "./components/Home_banner";
import Home_popup from "./components/Home_popup";
import Home_recommend from "./components/Home_recommend";
import Home_subBanner from "./components/Home_subBanner";

import "./Home.css";

function Home() {
  return (
    <div className="homePage">
      <Home_popup />
      <Home_banner />
      <Home_subBanner />
      <Home_recommend />
    </div>
  );
}

export default Home;
