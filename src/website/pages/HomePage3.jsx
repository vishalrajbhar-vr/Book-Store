// src/pages/HomePage3.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeChildPage1 from "./HomeChildPage1";
import HomeChildPage8 from "./HomeChildPage8";

function HomePage3() {
  return (
    <>
      <Navbar />
      <HomeChildPage1 />
      <HomeChildPage8 />
      <Footer />
    </>
  );
}

export default HomePage3;