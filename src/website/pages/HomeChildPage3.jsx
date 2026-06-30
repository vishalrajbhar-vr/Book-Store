import React, { useState } from "react";
import { FaHeart, FaEye, FaExchangeAlt, FaShoppingBasket } from "react-icons/fa";

function HomeChildPage3() {
  const categories = {
    featured: Array(10).fill({
      image:
        "https://htmldemo.net/pustok/pustok/image/products/product-2.jpg",
      title: "Featured Book Product",
      author: "Apple",
      price: "£51.20",
      oldPrice: "£61.20",
    }),

    arrivals: Array(10).fill({
      image:
        "https://htmldemo.net/pustok/pustok/image/products/product-4.jpg",
      title: "New Arrival Book",
      author: "Google",
      price: "£42.50",
      oldPrice: "£55.00",
    }),

    viewed: Array(10).fill({
      image:
        "https://htmldemo.net/pustok/pustok/image/products/product-6.jpg",
      title: "Most Viewed Book",
      author: "Cpple",
      price: "£61.00",
      oldPrice: "£72.00",
    }),
  };

  const [activeTab, setActiveTab] = useState("featured");

  return (
    <div className="w-full bg-[#f5f5f5] py-12 px-6 sm:px-10">
      {/* Top Tabs */}
      <div className="flex justify-center mb-14">
        <div className="border flex flex-col sm:flex-row text-lg sm:text-xl font-semibold bg-white">
          <button
            onClick={() => setActiveTab("featured")}
            className={`px-4 py-3 sm:px-8 sm:py-5 ${
              activeTab === "featured"
                ? "text-indigo-600 border border-indigo-600"
                : "text-black"
            }`}
          >
            Featured Products
          </button>

          <button
            onClick={() => setActiveTab("arrivals")}
            className={`px-10 py-5 ${
              activeTab === "arrivals"
                ? "text-indigo-600 border border-indigo-600"
                : "text-black"
            }`}
          >
            New Arrivals
          </button>

          <button
            onClick={() => setActiveTab("viewed")}
            className={`px-10 py-5 ${
              activeTab === "viewed"
                ? "text-indigo-600 border border-indigo-600"
                : "text-black"
            }`}
          >
            Most View Products
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {categories[activeTab].map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 text-center shadow hover:shadow-xl duration-300 relative group"
          >
            <p className="text-gray-500">{item.author}</p>

            <h2 className="text-xl font-semibold leading-8 mt-2 mb-4">
              {item.title}
            </h2>

            <img
              src={item.image}
              alt="book"
              className="w-full h-[260px] object-contain"
            />

            {/* Hover Icons */}
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 duration-300 flex bg-white shadow-lg">
              <button className="p-4 hover:text-indigo-600">
                <FaShoppingBasket />
              </button>
              <button className="p-4 hover:text-red-500">
                <FaHeart />
              </button>
              <button className="p-4 hover:text-blue-500">
                <FaExchangeAlt />
              </button>
              <button className="p-4 hover:text-black">
                <FaEye />
              </button>
            </div>

            {/* Price */}
            <div className="mt-6 flex justify-center gap-3 items-center">
              <span className="text-3xl text-indigo-600 font-bold">
                {item.price}
              </span>
              <span className="line-through text-gray-400">
                {item.oldPrice}
              </span>
              <span className="bg-red-600 text-white px-2 rounded text-sm">
                20%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeChildPage3;