import React, { useState } from "react";
import {
  FaLayerGroup,
  FaImage,
  FaFileAlt,
  FaSave,
  FaTags,
} from "react-icons/fa";

const AddCategory = () => {
  const [formData, setFormData] = useState({
    categoryName: "",
    slug: "",
    image: "",
    description: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    alert("Category Added Successfully");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Add Category
        </h1>

        <p className="text-gray-500 mt-1">
          Create new category for your bookstore
        </p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Category Name */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Category Name
              </label>

              <div className="flex items-center border rounded-lg px-3">
                <FaLayerGroup className="text-gray-400" />

                <input
                  type="text"
                  name="categoryName"
                  placeholder="Enter category name"
                  className="w-full p-3 outline-none"
                  value={formData.categoryName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Slug */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Category Slug
              </label>

              <div className="flex items-center border rounded-lg px-3">
                <FaTags className="text-gray-400" />

                <input
                  type="text"
                  name="slug"
                  placeholder="example: self-help-books"
                  className="w-full p-3 outline-none"
                  value={formData.slug}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Image */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Category Image URL
            </label>

            <div className="flex items-center border rounded-lg px-3">
              <FaImage className="text-gray-400" />

              <input
                type="text"
                name="image"
                placeholder="Paste image url"
                className="w-full p-3 outline-none"
                value={formData.image}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Description
            </label>

            <div className="flex items-start border rounded-lg px-3">
              <FaFileAlt className="text-gray-400 mt-4" />

              <textarea
                rows="5"
                name="description"
                placeholder="Write category details..."
                className="w-full p-3 outline-none resize-none"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Status
            </label>

            <select
              name="status"
              className="border rounded-lg px-4 py-3 w-full md:w-60"
              value={formData.status}
              onChange={handleChange}
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          {/* Button */}
          <div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
            >
              <FaSave />
              Save Category
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-sm text-gray-500">
        © 2026 Book Store Admin Panel
      </div>
    </div>
  );
};

export default AddCategory;