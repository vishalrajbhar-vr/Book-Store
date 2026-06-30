import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeChildPage1 from "./HomeChildPage1";
import HomeChildPage8 from "./HomeChildPage8";
import ProductShowcase from './ProductShowcase';
import HomeChildPage10 from './HomeChildPage10';

function ProductPage() {
  return (
     <>
     <Navbar />
      <HomeChildPage1 />
      <ProductShowcase/>
      <HomeChildPage10/>
      <HomeChildPage8 />
      <Footer />
     </>
  )
}

export default ProductPage