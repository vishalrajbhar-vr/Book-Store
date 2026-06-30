// src/pages/HomePage2.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeChildPage1 from "./HomeChildPage1";
import HomeChildPage3 from "./HomeChildPage3";
import HomeChildPage4 from "./HomeChildPage4";
import HomeChildPage6 from "./HomeChildPage6";
import HomeChildPage8 from "./HomeChildPage8";
import HomeChildPage9 from "./HomeChildPage9";

function HomePage2() {
  return (
    <>
     <Navbar />
      <HomeChildPage1 />
     <HomeChildPage9 />
      <HomeChildPage3 />
      <HomeChildPage4 />
      <HomeChildPage6/>
      <HomeChildPage8/>
      <Footer />
    </>
  );
}

export default HomePage2;