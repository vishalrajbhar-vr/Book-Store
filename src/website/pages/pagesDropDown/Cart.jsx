import React from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import Footer from "../../components/Footer";
import HomeChildPage1 from "../HomeChildPage1";

function Cart() {
  const cartItems = [
    {
      id: 1,
      name: "Rinosin Glasses",
      price: 395,
      image: "https://via.placeholder.com/60",
    },
    {
      id: 2,
      name: "Rinosin Glasses",
      price: 395,
      image: "https://via.placeholder.com/60",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* 🔹 Top Section */}
      <HomeChildPage1 />

      {/* 🔹 Breadcrumb */}
      <div className="max-w-6xl mx-auto py-6 px-4 text-sm text-gray-600">
        <Link to="/homepage1" className="hover:underline">
          Home
        </Link>{" "}
        &gt; <span className="text-black font-semibold">Cart</span>
      </div>

      {/* 🔹 Title */}
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      </div>

      {/* 🔹 Table */}
      <div className="max-w-6xl mx-auto px-4 bg-white p-6 shadow overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-4 border"></th>
              <th className="p-4 border">IMAGE</th>
              <th className="p-4 border">PRODUCT</th>
              <th className="p-4 border">PRICE</th>
            </tr>
          </thead>

          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="text-center border-t">
                <td className="p-4 border">
                  <FaTrash className="cursor-pointer text-gray-600 hover:text-red-500" />
                </td>

                <td className="p-4 border">
                  <img
                    src={item.image}
                    alt=""
                    className="w-16 h-16 mx-auto"
                  />
                </td>

                <td className="p-4 border">{item.name}</td>

                <td className="p-4 border">${item.price}.00</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* 🔹 Coupon + Update */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
          <input
            type="text"
            placeholder="Coupon code"
            className="border px-4 py-2 w-full md:w-64"
          />

          <button className="border px-6 py-2 hover:bg-gray-200">
            UPDATE CART
          </button>
        </div>
      </div>

      {/* 🔹 Suggested Section */}
      <div className="max-w-6xl mx-auto px-4 mt-10">
        <h2 className="text-xl font-semibold mb-6 text-center">
          YOU MAY BE INTERESTED IN...
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-4 shadow">
            <p className="text-gray-500 text-sm">Epple</p>
            <h3 className="font-semibold">
              What You Can Learn From Bill Gates
            </h3>
          </div>

          <div className="bg-white p-4 shadow">
            <p className="text-gray-500 text-sm">Hpple</p>
            <h3 className="font-semibold">
              Simple Things You To Save BOOK
            </h3>
          </div>

          <div className="bg-white p-4 shadow">
            <p className="text-gray-500 text-sm">Sub Total</p>
            <p>Shipping Cost</p>
          </div>
        </div>
      </div>

      {/* 🔻 Footer (BOTTOM) */}
      <Footer />

    </div>
  );
}

export default Cart;