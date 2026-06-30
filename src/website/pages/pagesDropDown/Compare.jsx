import React from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaShoppingCart, FaStar } from "react-icons/fa";
import Footer from "../../components/Footer";
import HomeChildPage1 from "../HomeChildPage1";

function Compare() {
  const products = [
    {
      id: 1,
      name: "Rinosin Glasses",
      price: 295,
      image: "https://via.placeholder.com/120",
    },
    {
      id: 2,
      name: "Macro Melodi",
      price: 275,
      image: "https://via.placeholder.com/120",
    },
    {
      id: 3,
      name: "Daicy Sunglasses",
      price: 395,
      image: "https://via.placeholder.com/120",
    },
  ];

  return (
    <>
      <HomeChildPage1 />

      <div className="bg-gray-100 min-h-screen">

        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto py-6 px-4 text-sm text-gray-600">
          <Link to="/homepage1" className="hover:underline">
            Home
          </Link>{" "}
          &gt; <span className="text-black font-semibold">Compare</span>
        </div>

        {/* Compare Table */}
        <div className="max-w-6xl mx-auto px-4 bg-white shadow p-6 overflow-x-auto">
          <table className="w-full border text-center">
            <tbody>

              {/* Product Images */}
              <tr className="border">
                <td className="p-4 font-semibold">Product</td>
                {products.map((item) => (
                  <td key={item.id} className="p-4 border">
                    <img
                      src={item.image}
                      alt=""
                      className="mx-auto mb-2"
                    />
                    <p className="text-sm text-gray-500">Glasses</p>
                    <p className="font-semibold">{item.name}</p>
                  </td>
                ))}
              </tr>

              {/* Description */}
              <tr className="border">
                <td className="p-4 font-semibold">Description</td>
                {products.map((item) => (
                  <td key={item.id} className="p-4 border text-sm text-gray-600">
                    Eye glasses are very important for those who have some
                    difficulty in their eye to see very thing clearly and
                    perfectly
                  </td>
                ))}
              </tr>

              {/* Price */}
              <tr className="border">
                <td className="p-4 font-semibold">Price</td>
                {products.map((item) => (
                  <td key={item.id} className="p-4 border font-semibold">
                    ${item.price}
                  </td>
                ))}
              </tr>

              {/* Color */}
              <tr className="border">
                <td className="p-4 font-semibold">Color</td>
                {products.map((item) => (
                  <td key={item.id} className="p-4 border">
                    Black
                  </td>
                ))}
              </tr>

              {/* Stock */}
              <tr className="border">
                <td className="p-4 font-semibold">Stock</td>
                {products.map((item) => (
                  <td key={item.id} className="p-4 border text-green-600">
                    In Stock
                  </td>
                ))}
              </tr>

              {/* Add to cart */}
              <tr className="border">
                <td className="p-4 font-semibold">Add to cart</td>
                {products.map((item) => (
                  <td key={item.id} className="p-4 border">
                    <button className="flex items-center gap-2 mx-auto bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">
                      <FaShoppingCart />
                      ADD TO CART
                    </button>
                  </td>
                ))}
              </tr>

              {/* Delete */}
              <tr className="border">
                <td className="p-4 font-semibold">Delete</td>
                {products.map((item) => (
                  <td key={item.id} className="p-4 border">
                    <FaTrash className="mx-auto cursor-pointer hover:text-red-500" />
                  </td>
                ))}
              </tr>

              {/* Rating */}
              <tr className="border">
                <td className="p-4 font-semibold">Rating</td>
                {products.map((item) => (
                  <td key={item.id} className="p-4 border flex justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>
      </div>

      {/* Footer ALWAYS last */}
      <Footer />
    </>
  );
}

export default Compare;