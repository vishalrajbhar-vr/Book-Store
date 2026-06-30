import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaPlus,
  FaEdit,
  FaTrash,
  FaBoxOpen,
} from "react-icons/fa";

import productData from "../../Data/productData";

function AllProduct() {
  const [search, setSearch] = useState("");

  const filteredProducts = productData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            All Products
          </h1>
          <p className="text-gray-500 mt-1">
            Manage all books available in store
          </p>
        </div>

        <Link
          to="/admin/add-product"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex items-center gap-2 w-fit"
        >
          <FaPlus />
          Add Product
        </Link>
      </div>

      {/* Search Box */}
      <div className="bg-white rounded-xl shadow p-4 mb-6">
        <div className="flex items-center border rounded-lg px-4 py-3">
          <FaSearch className="text-gray-400 mr-3" />

          <input
            type="text"
            placeholder="Search product by name..."
            className="w-full outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Product Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full min-w-[1100px]">
          <thead className="bg-gray-50 border-b">
            <tr className="text-left">
              <th className="px-6 py-4">Book</th>
              <th className="px-6 py-4">Author</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Stock</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition"
              >
                {/* Book Info */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-20 object-cover rounded-md border"
                    />

                    <div>
                      <h2 className="font-semibold text-gray-800">
                        {item.name}
                      </h2>

                      <p className="text-sm text-gray-500">
                        Product ID: #{item.id}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Author */}
                <td className="px-6 py-4 text-gray-700">
                  {item.author}
                </td>

                {/* Category */}
                <td className="px-6 py-4 text-gray-700">
                  {item.category}
                </td>

                {/* Price */}
                <td className="px-6 py-4 font-semibold text-green-600">
                  ₹{item.price}
                </td>

                {/* Stock */}
                <td className="px-6 py-4">
                  {item.stock > 0 ? item.stock : "0"}
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-4">
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-lg border flex items-center justify-center hover:bg-blue-50">
                      <FaEdit className="text-blue-600" />
                    </button>

                    <button className="w-10 h-10 rounded-lg border flex items-center justify-center hover:bg-red-50">
                      <FaTrash className="text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-12 text-gray-500"
                >
                  <div className="flex flex-col items-center gap-3">
                    <FaBoxOpen className="text-4xl text-gray-400" />
                    No Product Found
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-sm text-gray-500">
        © 2026 Book Store Admin Panel
      </div>
    </div>
  );
}

export default AllProduct;