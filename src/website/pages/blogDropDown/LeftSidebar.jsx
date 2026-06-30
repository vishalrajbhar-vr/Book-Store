import React from "react";
import { Link } from "react-router-dom";
import HomeChildPage1 from "../HomeChildPage1";
import Footer from "../../components/Footer";
import LastPageU from "../LastPageU";
import Navbar from "../../components/Navbar";

function LeftSidebar() {
  const blogs = Array(9).fill({
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    title: "Use BLOG TITLE To Make Someone Fall In Love",
    date: "13/08/2017",
  });

  return (
    <div className="flex flex-col min-h-screen">

      {/* 🔹 Top Section */}
      <Navbar />
      <HomeChildPage1 />

      {/* 🔹 Main Layout */}
      <div className="max-w-7xl mx-auto p-6 flex flex-col lg:flex-row gap-10">

        {/* ✅ LEFT SIDEBAR */}
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

          {/* Blog Archives */}
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

          {/* Recent Posts */}
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
                  className="border px-2 py-1 cursor-pointer hover:bg-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* ✅ RIGHT BLOG SECTION */}
        <div className="flex-1">

          {/* 🔹 Breadcrumb */}
          <div className="max-w-6xl mx-auto py-6 px-4 text-sm text-gray-600">
            <Link to="/homepage1" className="hover:underline">
              Home
            </Link>{" "}
            &gt; <span className="text-black font-semibold">Blog</span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div key={index} className="space-y-3">

                <img
                  src={blog.img}
                  alt=""
                  className="w-full h-[180px] object-cover"
                />

                <h2 className="text-lg font-semibold hover:text-indigo-600 cursor-pointer">
                  {blog.title}
                </h2>

                <p className="text-gray-500 text-sm">
                  {blog.date} | Hastech
                </p>

                <p className="text-gray-600 text-sm">
                  Maria Denardo is the Fashion Director theFashion Spot at.
                  Prior to joining tFS, she worked as...
                </p>

                <button className="text-sm hover:text-indigo-600">
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
    </div>
  );
}

export default LeftSidebar;