import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as banners from "../../../static/bannerImg";
import Home_banner_img from "./Home_banner_img";
import "./Home_components.css";

function Home_banner() {
  return (
    <div className="homeBanner">
      <Carousel
        autoPlay
        infiniteLoop
        showIndicators
        showStatus={false}
        showThumbs={false}
        interval={3000}
      >
        <Home_banner_img src={banners.banner_1} />
        <Home_banner_img src={banners.banner_2} />
        <Home_banner_img src={banners.banner_3} />
        <Home_banner_img src={banners.banner_4} />
      </Carousel>
    </div>
  );
}

export default Home_banner;
