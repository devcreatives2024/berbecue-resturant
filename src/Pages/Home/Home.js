import React from "react";
import Banner from "./Banner";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";
import Banner4 from "./Banner4";
import Banner5 from "./Banner5";
import Contact from "./Contact";
import Offer from "./Offer";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Banner2></Banner2>
      <Banner3></Banner3>
      <Offer></Offer>
      <Banner4></Banner4>
      <Slider></Slider>
      <Banner5></Banner5>
      <Contact></Contact>
      <div className="bg-[#161D27] text-white py-1 lg:px-8">
        <p className="text-gray-300 text-sm text-center lg:text-start mb-3">Enjoyed your stay at Royal Plate? Share your moments with us. Follow us on Instagram and use</p>
        <h1 className="font-sub text-3xl text-center lg:text-start lg:text-4xl">#ROYALPLATE_MOMENTS</h1>
      </div>
    </>
  );
};

export default Home;
