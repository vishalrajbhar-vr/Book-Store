import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import HomeChildPage1 from "../HomeChildPage1";

function BlogGallery() {
  return (


    <div className="flex flex-col min-h-screen">

      {/* 🔹 Top */}
      <Navbar />
      <HomeChildPage1 />

      {/* 🔹 Main Layout */}
      <div className="max-w-[1300px] mx-auto p-8 flex gap-10">

        {/* ✅ LEFT BLOG DETAIL */}
        <div className="flex-1">

          {/* Breadcrumb */}
          <div className="max-w-6xl mx-auto py-6 px-4 text-sm text-gray-600">
            <Link to="/homepage1" className="hover:underline">
              Home
            </Link>{" "}
            &gt; <span className="text-black font-semibold">Blog Details</span>
          </div>

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
            alt=""
            className="w-full h-[350px] object-cover mb-6"
          />

          {/* Title */}
          <h1 className="text-2xl font-semibold mb-3">
            How BLOG TITLE Made Me A Better Salesperson
          </h1>

          {/* Meta */}
          <p className="text-gray-500 text-sm mb-4">
            Posted by admin | On March 10, 2018
          </p>

          {/* Content */}
          <p className="text-gray-600 mb-4">
            Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.
            Aenean posuere libero eu augue condimentum rhoncus.
          </p>

          {/* Highlight Box */}
          <div className="border-l-4 border-indigo-600 bg-gray-100 p-4 mb-6 text-gray-700">
            Quisque magna urna, ullamcorper in posuere vel, pellentesque sit amet dui.
          </div>

          <p className="text-gray-600 mb-6">
            Aenean sit amet arcu vitae arcu efficitur suscipit. Proin ut lacus ut risus
            malesuada tincidunt.
          </p>

          {/* Share */}
          <div className="border-t pt-4 mb-6 text-center text-gray-600">
            SHARE THIS
            <div className="flex justify-center gap-4 mt-2 text-lg">
              <span>👍</span>
              <span>🐦</span>
              <span>📌</span>
            </div>
          </div>

          {/* Comments */}
          <h2 className="text-xl font-semibold mb-4">2 COMMENTS</h2>

          {[1, 2].map((item) => (
            <div
              key={item}
              className="border p-4 mb-4 flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">John</p>
                <p className="text-gray-500 text-sm">January 10, 2018</p>
                <p className="text-gray-600 text-sm">Awesome Post</p>
              </div>
              <button className="border px-4 py-1 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white">
                Reply
              </button>
            </div>
          ))}

          {/* Form */}
          <h2 className="text-xl font-semibold mt-8 mb-4">LEAVE A REPLY</h2>

          <textarea
            placeholder="Comment"
            className="w-full border p-3 h-[150px] mb-4"
          />

          <div className="grid grid-cols-3 gap-4 mb-4">
            <input className="border p-2" placeholder="Name*" />
            <input className="border p-2" placeholder="Email*" />
            <input className="border p-2" placeholder="Website" />
          </div>

          <button className="bg-black text-white px-6 py-2">
            POST COMMENT
          </button>

        </div>

        {/* ✅ RIGHT SIDEBAR */}
        <div className="w-[300px] space-y-8">

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

          {/* Ad Image */}
          <img
            src="https://images.unsplash.com/photo-1607083206968-13611e3d76db"
            alt=""
            className="w-full mt-4"
          />

        </div>

      </div>

      {/* 🔹 Footer */}
      <Footer />

    </div>
  );
}

export default BlogGallery;