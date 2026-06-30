import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaPlus,
  FaEdit,
  FaTrash,
  FaLayerGroup,
} from "react-icons/fa";

const AllCategory = () => {
  const [search, setSearch] = useState("");

  const categoryData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
      name: "Self Help",
      slug: "self-help",
      totalBooks: 24,
      status: "Active",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400",
      name: "Finance",
      slug: "finance",
      totalBooks: 18,
      status: "Active",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400",
      name: "Novel",
      slug: "novel",
      totalBooks: 35,
      status: "Active",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400",
      name: "Education",
      slug: "education",
      totalBooks: 12,
      status: "Inactive",
    },
  ];

  const filteredCategory = categoryData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            All Categories
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all bookstore categories
          </p>
        </div>

        <Link
          to="/admin/add-category"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex items-center gap-2 w-fit"
        >
          <FaPlus />
          Add Category
        </Link>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow p-4 mb-6">
        <div className="flex items-center border rounded-lg px-4 py-3">
          <FaSearch className="text-gray-400 mr-3" />

          <input
            type="text"
            placeholder="Search category..."
            className="w-full outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full min-w-[1000px]">
          <thead className="bg-gray-50 border-b">
            <tr className="text-left">
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Slug</th>
              <th className="px-6 py-4">Books</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredCategory.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition"
              >
                {/* Category */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-12 object-cover rounded-md border"
                    />

                    <div>
                      <h2 className="font-semibold text-gray-800">
                        {item.name}
                      </h2>

                      <p className="text-sm text-gray-500">
                        ID: #{item.id}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Slug */}
                <td className="px-6 py-4 text-gray-700">
                  {item.slug}
                </td>

                {/* Books */}
                <td className="px-6 py-4 font-semibold">
                  {item.totalBooks}
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

            {/* Empty */}
            {filteredCategory.length === 0 && (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-12 text-gray-500"
                >
                  <div className="flex flex-col items-center gap-3">
                    <FaLayerGroup className="text-4xl text-gray-400" />
                    No Category Found
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
};

export default AllCategory;