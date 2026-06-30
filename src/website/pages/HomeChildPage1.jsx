import React from "react";
import { Link } from "react-router-dom";
import { FaHeadphonesAlt, FaBars, FaChevronDown, FaShoppingCart } from "react-icons/fa";

function HomeChildPage1() {
  return (
    <div className="w-full bg-gray-100">
      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto flex flex-col gap-6 px-6 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8">

        {/* Logo */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-indigo-600">
          Pustok<span className="text-indigo-700">.</span>
        </h1>

        {/* Search */}
        <div className="flex w-full max-w-xl">
          <input
            type="text"
            placeholder="Search entire store here"
            className="w-full px-4 py-2 text-base sm:text-lg border border-gray-300 outline-none"
          />
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 text-lg font-semibold">
            Search
          </button>
        </div>

        {/* Login */}
        <div className="text-lg">
          <p className="font-semibold">Login</p>
          <p className="text-gray-600">or Register</p>
        </div>

        {/* Cart */}
        <div className="relative flex items-center gap-4 text-xl cursor-pointer">
          <FaShoppingCart className="text-indigo-600 text-4xl" />
          <div>
            <p className="text-gray-700">Shopping Cart</p>
            <p className="text-indigo-600 font-bold">£0.00</p>
          </div>

          {/* Badge */}
          <span className="absolute -top-2 left-6 bg-red-600 text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">
            1
          </span>

          <FaChevronDown className="text-sm" />
        </div>


      </div>

      {/* Bottom Search Bar */}
      <div className="max-w-7xl mx-auto flex flex-col gap-4 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Categories */}
        <div className="w-full max-w-md bg-white border flex items-center justify-between px-6 py-5 shadow-sm cursor-pointer">
          <div className="flex items-center gap-4 font-semibold text-xl">
            <FaBars />
            Browse categories
          </div>
          <FaChevronDown />
        </div>

        {/* Support */}
        <div className="flex items-center gap-4">
          <FaHeadphonesAlt className="text-indigo-600 text-4xl" />
          <div>
            <p className="text-gray-700 text-lg">Free Support 24/7</p>
            <p className="font-bold text-xl">+01-202-555-0181</p>
          </div>
        </div>

        {/* Menu */}
        <ul className="flex flex-col gap-4 text-lg font-medium text-gray-800 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">

          {/* HOME */}
          <li className="relative group cursor-pointer flex items-center gap-2">
            HOME <FaChevronDown className="text-sm" />

            <ul className="absolute left-0 top-10 hidden group-hover:block bg-white shadow-lg rounded-md w-48 z-50">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/home1">Home 1</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/home2">Home 2</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/home3">Home 3</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/home4">Home 4</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/home5">Home 5</Link>
              </li>
            </ul>
          </li>

          {/* shop */}
          <li className="relative group cursor-pointer flex items-center gap-2">
            SHOP <FaChevronDown className="text-sm" />

            <div className="absolute left-1/2 -translate-x-1/2 top-12 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white shadow-xl rounded-md w-full max-w-[800px] p-8 z-50">

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* COLUMN 1 */}
                <div>
                  <h3 className="font-bold mb-4">SHOP GRID</h3>
                  <ul className="space-y-2">
                    <li><Link to="/blog/grid/default">Width Default</Link></li>
                    <li><Link to="/blog/grid/left">Left Sidebar</Link></li>
                    <li><Link to="/blog/grid/right">Right Sidebar</Link></li>
                  </ul>
                </div>

                {/* COLUMN 2 */}
                <div>
                  <h3 className="font-bold mb-4">SHOP LIST</h3>
                  <ul className="space-y-2">
                    <li><Link to="/blog/list/left">Left Sidebar</Link></li>
                    <li><Link to="/blog/list/right">Right Sidebar</Link></li>
                  </ul>
                </div>

                {/* COLUMN 3 */}
                <div>
                  <h3 className="font-bold mb-4">SHOP DETAILS</h3>
                  <ul className="space-y-2">
                    <li><Link to="/blog/details/default">Image Format</Link></li>
                    <li><Link to="/blog/details/gallery">Gallery</Link></li>
                    <li><Link to="/blog/details/audio">Audio</Link></li>
                    <li><Link to="/blog/details/video">Video</Link></li>
                    <li><Link to="/blog/details/left">Left Sidebar</Link></li>
                  </ul>
                </div>

              </div>

            </div>
          </li>

          {/* PAGES */}
          <li className="relative group cursor-pointer flex items-center gap-2">
            PAGES <FaChevronDown className="text-sm" />

            <ul className="absolute left-0 top-10 hidden group-hover:block bg-white shadow-lg rounded-md w-48 z-50">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/cart">Cart</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/checkout">Checkout</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/compare">Compare</Link>
              </li>
            </ul>
          </li>

          {/* blogs */}
          <li className="relative group cursor-pointer flex items-center gap-2">
            BLOG <FaChevronDown className="text-sm" />

            <div className="absolute right-0 top-12 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white shadow-xl rounded-md w-[90vw] max-w-[800px] p-6 z-[999]">

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* COLUMN 1 */}
                <div>
                  <h3 className="font-bold mb-4">BLOG GRID</h3>
                  <ul className="space-y-2">
                    <li><Link to="/blog/grid/default">Width Default</Link></li>
                    <li><Link to="/blog/grid/left">Left Sidebar</Link></li>
                    <li><Link to="/blog/grid/right">Right Sidebar</Link></li>
                  </ul>
                </div>

                {/* COLUMN 2 */}
                <div>
                  <h3 className="font-bold mb-4">BLOG LIST</h3>
                  <ul className="space-y-2">
                    <li><Link to="/blog/list/left">Left Sidebar</Link></li>
                    <li><Link to="/blog/list/right">Right Sidebar</Link></li>
                  </ul>
                </div>

                {/* COLUMN 3 */}
                <div>
                  <h3 className="font-bold mb-4">BLOG DETAILS</h3>
                  <ul className="space-y-2">
                    <li><Link to="/blog/details/image">Image Format</Link></li>
                    <li><Link to="/blog/details/gallery">Gallery</Link></li>
                    <li><Link to="/blog/details/audio">Audio</Link></li>
                    <li><Link to="/blog/details/video">Video</Link></li>
                    <li><Link to="/blog/details/left">Left Sidebar</Link></li>
                  </ul>
                </div>

              </div>
            </div>
          </li>

          {/* contact */}
          <li className="relative group cursor-pointer flex items-center gap-2">
            <Link to="/contact">Contact</Link>
          </li>

        </ul>

      </div>
    </div>
  );
}

export default HomeChildPage1;