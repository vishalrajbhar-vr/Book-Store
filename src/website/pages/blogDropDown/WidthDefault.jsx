import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import HomeChildPage1 from "../HomeChildPage1";
import LastPageU from "../LastPageU";
import Navbar from "../../components/Navbar";

function WidthDefault() {
  const blogs = Array(9).fill({
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    title: "Use BLOG TITLE To Make Someone Fall In Love",
    date: "13/08/2017",
  });

  return (
    <>
      {/* 🔹 HomeChildPage1 (Top Section) */}
      <Navbar />
      <HomeChildPage1 />

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto py-6 px-4 text-sm text-gray-600">
        <Link to="/homepage1" className="hover:underline">
          Home
        </Link>{" "}
        &gt; <span className="text-black font-semibold">Blog</span>
      </div>

      <div className="flex flex-col min-h-screen">
        {/* 🔹 Blog Section (Image wala code) */}
        <div className="max-w-[1400px] mx-auto p-10">
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog, index) => (
              <div key={index} className="space-y-4">

                {/* Image */}
                <img
                  src={blog.img}
                  alt=""
                  className="w-full h-[250px] object-cover"
                />

                {/* Title */}
                <h2 className="text-xl font-semibold hover:text-indigo-600 cursor-pointer">
                  {blog.title}
                </h2>

                {/* Date */}
                <p className="text-gray-500 text-sm">
                  {blog.date} | Hastech
                </p>

                {/* Description */}
                <p className="text-gray-600">
                  Maria Denardo is the Fashion Director theFashion Spot at.
                  Prior to joining tFS, she worked as...
                </p>

                {/* Read More */}
                <button className="hover:text-indigo-600 font-medium">
                  Read More
                </button>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔹 Footer */}
      <LastPageU />
      <Footer />
    </>


  );
}

export default WidthDefault;