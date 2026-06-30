import React, { useState } from "react";
import {
  FaBook,
  FaUserEdit,
  FaLayerGroup,
  FaRupeeSign,
  FaBoxes,
  FaImage,
  FaFileAlt,
  FaSave,
} from "react-icons/fa";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    category: "",
    price: "",
    stock: "",
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
    alert("Product Added Successfully");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Add Product
        </h1>
        <p className="text-gray-500 mt-1">
          Add new book/product in your store
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Product Name */}
            <div>
              <label className="font-medium text-gray-700 mb-2 block">
                Product Name
              </label>

              <div className="flex items-center border rounded-lg px-3">
                <FaBook className="text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter book name"
                  className="w-full p-3 outline-none"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Author */}
            <div>
              <label className="font-medium text-gray-700 mb-2 block">
                Author Name
              </label>

              <div className="flex items-center border rounded-lg px-3">
                <FaUserEdit className="text-gray-400" />
                <input
                  type="text"
                  name="author"
                  placeholder="Enter author name"
                  className="w-full p-3 outline-none"
                  value={formData.author}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Category */}
            <div>
              <label className="font-medium text-gray-700 mb-2 block">
                Category
              </label>

              <div className="flex items-center border rounded-lg px-3">
                <FaLayerGroup className="text-gray-400" />
                <select
                  name="category"
                  className="w-full p-3 outline-none bg-transparent"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Select Category</option>
                  <option>Novel</option>
                  <option>Finance</option>
                  <option>Self Help</option>
                  <option>Education</option>
                  <option>Motivation</option>
                </select>
              </div>
            </div>

            {/* Price */}
            <div>
              <label className="font-medium text-gray-700 mb-2 block">
                Price
              </label>

              <div className="flex items-center border rounded-lg px-3">
                <FaRupeeSign className="text-gray-400" />
                <input
                  type="number"
                  name="price"
                  placeholder="Enter price"
                  className="w-full p-3 outline-none"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Stock */}
            <div>
              <label className="font-medium text-gray-700 mb-2 block">
                Stock
              </label>

              <div className="flex items-center border rounded-lg px-3">
                <FaBoxes className="text-gray-400" />
                <input
                  type="number"
                  name="stock"
                  placeholder="Enter stock qty"
                  className="w-full p-3 outline-none"
                  value={formData.stock}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="font-medium text-gray-700 mb-2 block">
              Product Image URL
            </label>

            <div className="flex items-center border rounded-lg px-3">
              <FaImage className="text-gray-400" />
              <input
                type="text"
                name="image"
                placeholder="Paste image URL"
                className="w-full p-3 outline-none"
                value={formData.image}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="font-medium text-gray-700 mb-2 block">
              Description
            </label>

            <div className="flex items-start border rounded-lg px-3">
              <FaFileAlt className="text-gray-400 mt-4" />
              <textarea
                rows="5"
                name="description"
                placeholder="Write product description..."
                className="w-full p-3 outline-none resize-none"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="font-medium text-gray-700 mb-2 block">
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

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
            >
              <FaSave />
              Save Product
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

export default AddProduct;