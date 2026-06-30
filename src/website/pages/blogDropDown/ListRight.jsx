import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import HomeChildPage1 from "../HomeChildPage1";

function ListRight() {
  const blogs = [
    {
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      title: "Use BLOG TITLE To Make Someone Fall In Love",
      date: "13/08/2017",
    },
    {
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
      title: "Ho To (Do) BLOG TITLE Without Your Office(House).",
      date: "28/10/2017",
    },
    {
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
      title: "How to Grow Epiphytic Tropical Plants",
      date: "30/10/2017",
    },
    {
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      title: "Use BLOG TITLE To Make Someone Fall In Love",
      date: "13/08/2017",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">

      {/* 🔹 Top */}
      <Navbar />
      <HomeChildPage1 />

      {/* 🔹 Main Layout */}
      <div className="max-w-7xl mx-auto p-6 flex flex-col lg:flex-row gap-10">

        {/* ✅ RIGHT SIDEBAR */}
        <div className="w-full lg:w-[300px] space-y-8">

          {/* Search */}
          <div>
            <div className="bg-indigo-600 text-white text-center py-2 font-semibold">
              Search
            </div>
            <input
              type="text"
              placeholder="Search"
              className="w-full border px-3 py-2 mt-2"
            />
          </div>

          {/* Archives */}
          <div>
            <div className="bg-indigo-600 text-white text-center py-2 font-semibold">
              BLOG ARCHIVES
            </div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>• March 2015 (1)</li>
              <li>• December 2014 (3)</li>
              <li>• November 2014 (4)</li>
              <li>• September 2014 (1)</li>
              <li>• August 2014 (1)</li>
            </ul>
          </div>

          {/* Recent */}
          <div>
            <div className="bg-indigo-600 text-white text-center py-2 font-semibold">
              RECENT POSTS
            </div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>• Blog image post</li>
              <li>• Post with Gallery</li>
              <li>• Post with Audio</li>
              <li>• Post with Video</li>
              <li>• Maecenas ultricies</li>
            </ul>
          </div>

          {/* Tags */}
          <div>
            <div className="bg-indigo-600 text-white text-center py-2 font-semibold">
              Tags
            </div>
            <div className="flex flex-wrap gap-2 mt-3 text-sm">
              {[
                "Chilled", "Dark", "Euro", "Fashion", "Food", "Hardware",
                "Hat", "Hipster", "Holidays", "Light", "Mac", "Place",
                "T-Shirt", "Travel", "Video-2", "White"
              ].map((tag, i) => (
                <span
                  key={i}
                  className="border px-2 py-1 hover:bg-gray-200 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* ✅ LEFT BLOG LIST */}
        <div className="flex-1 space-y-10">

          {/* Breadcrumb */}

          <div className="max-w-6xl mx-auto py-6 px-4 text-sm text-gray-600">
            <Link to="/homepage1" className="hover:underline">
              Home
            </Link>{" "}
            &gt; <span className="text-black font-semibold">Cart</span>
          </div>

          {blogs.map((blog, index) => (
            <div key={index} className="flex gap-6">

              {/* Image */}
              <img
                src={blog.img}
                alt=""
                className="w-full md:w-[280px] h-[180px] object-cover"
              />

              {/* Content */}
              <div className="space-y-3">
                <h2 className="text-xl font-semibold hover:text-indigo-600 cursor-pointer">
                  {blog.title}
                </h2>

                <p className="text-gray-500 text-sm">
                  {blog.date} | Hastech
                </p>

                <p className="text-gray-600 text-sm">
                  Maria Denardo is the Fashion Director at theFashionSpot.
                  Prior to joining tFS, she worked as...
                </p>

                <button className="text-sm hover:text-indigo-600">
                  Read More
                </button>
              </div>

            </div>
          ))}

        </div>



      </div>

      {/* 🔹 Footer */}
      <Footer />

    </div>
  );
}

export default ListRight;