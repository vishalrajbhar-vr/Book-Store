import React, { useState } from "react";
import {
  FaSearch,
  FaEdit,
  FaTrash,
  FaPlus,
  FaEye,
  FaCheckCircle,
  FaTimesCircle,
  FaImage,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function AllSlider() {
  const [search, setSearch] = useState("");

  const sliderData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
      title: "Best Selling Books",
      button: "Shop Now",
      status: "Active",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794",
      title: "Knowledge Collection",
      button: "Explore",
      status: "Inactive",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
      title: "New Arrival Books",
      button: "Buy Now",
      status: "Active",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
      title: "Student Special Offer",
      button: "Get Offer",
      status: "Active",
    },
  ];

  const filteredData = sliderData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            All Sliders
          </h1>
          <p className="text-gray-500 mt-1">
            Manage homepage slider banners
          </p>
        </div>

        <Link
          to="/admin/add-slider"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex items-center gap-2 w-fit"
        >
          <FaPlus />
          Add Slider
        </Link>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-gray-500">Total Sliders</p>
          <h2 className="text-2xl font-bold mt-1">4</h2>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-gray-500">Active</p>
          <h2 className="text-2xl font-bold text-green-600 mt-1">
            3
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-gray-500">Inactive</p>
          <h2 className="text-2xl font-bold text-red-500 mt-1">
            1
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-gray-500">Banner Size</p>
          <h2 className="text-2xl font-bold mt-1">
            1920x700
          </h2>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow p-4 mb-6">
        <div className="flex items-center border rounded-lg px-3">
          <FaSearch className="text-gray-400" />

          <input
            type="text"
            placeholder="Search slider by title..."
            className="w-full p-3 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead className="bg-gray-50">
            <tr className="text-left text-gray-600">
              <th className="p-4">#</th>
              <th className="p-4">Image</th>
              <th className="p-4">Title</th>
              <th className="p-4">Button</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((item, index) => (
              <tr
                key={item.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="p-4 font-medium">
                  {index + 1}
                </td>

                <td className="p-4">
                  <img
                    src={item.image}
                    alt="slider"
                    className="w-24 h-14 rounded-lg object-cover"
                  />
                </td>

                <td className="p-4 font-semibold">
                  {item.title}
                </td>

                <td className="p-4">{item.button}</td>

                <td className="p-4">
                  {item.status === "Active" ? (
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm flex items-center gap-1 w-fit">
                      <FaCheckCircle />
                      Active
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm flex items-center gap-1 w-fit">
                      <FaTimesCircle />
                      Inactive
                    </span>
                  )}
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-2">
                    <button className="bg-blue-100 text-blue-600 p-2 rounded-lg hover:bg-blue-200">
                      <FaEye />
                    </button>

                    <button className="bg-yellow-100 text-yellow-600 p-2 rounded-lg hover:bg-yellow-200">
                      <FaEdit />
                    </button>

                    <button className="bg-red-100 text-red-600 p-2 rounded-lg hover:bg-red-200">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {filteredData.length === 0 && (
              <tr>
                <td
                  colSpan="6"
                  className="p-8 text-center text-gray-500"
                >
                  <div className="flex flex-col items-center gap-2">
                    <FaImage className="text-3xl" />
                    No Slider Found
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

export default AllSlider;