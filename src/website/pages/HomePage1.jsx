// src/pages/HomePage1.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeChildPage1 from "./HomeChildPage1";
import HomeChildPage3 from "./HomeChildPage3";
import HomeChildPage4 from "./HomeChildPage4";
import HomeChildPage5 from "./HomeChildPage5";
import HomeChildPage6 from "./HomeChildPage6";
import HomechildPage7 from "./HomechildPage7";
import HomeChildPage9 from "./HomeChildPage9";
import HomeChildPage2 from "./HomeChildPage2";




function HomePage1() {


  return (
    <>
      <Navbar />
      <HomeChildPage1 />
      <HomeChildPage2 />
      <HomeChildPage9 />
      <HomeChildPage3 />
      <HomeChildPage4 />
      <HomeChildPage5/>
      <HomeChildPage6/>
      <HomechildPage7/>
      <Footer />
    </>
  );
}

export default HomePage1;