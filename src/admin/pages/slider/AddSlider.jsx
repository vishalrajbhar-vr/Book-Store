import React, { useState } from "react";
import {
  FaImage,
  FaHeading,
  FaLink,
  FaUpload,
  FaSave,
  FaEye,
  FaSlidersH,
  FaCheckCircle,
} from "react-icons/fa";

const AddSlider = () => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    buttonText: "",
    buttonLink: "",
    status: "Active",
  });

  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Slider Added Successfully");
    console.log(formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Add New Slider
        </h1>

        <p className="text-gray-500 mt-1">
          Create homepage banner slider for Book Store
        </p>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-xl">
              <FaSlidersH />
            </div>

            <div>
              <p className="text-gray-500">Total Sliders</p>
              <h2 className="font-bold text-xl">6</h2>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-lg bg-green-100 text-green-600 flex items-center justify-center text-xl">
              <FaCheckCircle />
            </div>

            <div>
              <p className="text-gray-500">Active</p>
              <h2 className="font-bold text-xl">4</h2>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center text-xl">
              <FaImage />
            </div>

            <div>
              <p className="text-gray-500">Banner Size</p>
              <h2 className="font-bold text-xl">1920x700</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Main Form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Form */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-6">
            Slider Details
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Title */}
            <div>
              <label className="block mb-2 font-medium">
                Slider Title
              </label>

              <div className="flex items-center border rounded-lg px-3">
                <FaHeading className="text-gray-400" />

                <input
                  type="text"
                  name="title"
                  placeholder="Enter slider title"
                  className="w-full p-3 outline-none"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Subtitle */}
            <div>
              <label className="block mb-2 font-medium">
                Subtitle
              </label>

              <textarea
                rows="4"
                name="subtitle"
                placeholder="Enter short description"
                className="w-full border rounded-lg p-3 outline-none resize-none"
                value={formData.subtitle}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Button Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block mb-2 font-medium">
                  Button Text
                </label>

                <input
                  type="text"
                  name="buttonText"
                  placeholder="Shop Now"
                  className="w-full border rounded-lg p-3 outline-none"
                  value={formData.buttonText}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Button Link
                </label>

                <div className="flex items-center border rounded-lg px-3">
                  <FaLink className="text-gray-400" />

                  <input
                    type="text"
                    name="buttonLink"
                    placeholder="/product"
                    className="w-full p-3 outline-none"
                    value={formData.buttonLink}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Status */}
            <div>
              <label className="block mb-2 font-medium">
                Status
              </label>

              <select
                name="status"
                className="w-full border rounded-lg p-3 outline-none"
                value={formData.status}
                onChange={handleChange}
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
            >
              <FaSave />
              Save Slider
            </button>
          </form>
        </div>

        {/* Right Preview */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-5">
            Image Upload
          </h2>

          <label className="border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-blue-500 transition">
            <FaUpload className="text-3xl text-blue-500 mb-3" />

            <p className="font-medium">
              Click to Upload Slider Image
            </p>

            <span className="text-sm text-gray-500 mt-1">
              PNG, JPG, JPEG
            </span>

            <input
              type="file"
              className="hidden"
              onChange={handleImage}
            />
          </label>

          {/* Preview */}
          {previewImage && (
            <div className="mt-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <FaEye />
                Preview
              </h3>

              <img
                src={previewImage}
                alt="preview"
                className="w-full h-52 object-cover rounded-xl"
              />
            </div>
          )}

          {/* Tips */}
          <div className="mt-6 bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
            <p className="font-semibold mb-2">
              Recommended:
            </p>

            <ul className="space-y-1 list-disc ml-5">
              <li>Use HD quality image</li>
              <li>Size: 1920 x 700 px</li>
              <li>Keep text readable</li>
              <li>Use attractive banner</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-sm text-gray-500">
        © 2026 Book Store Admin Panel
      </div>
    </div>
  );
};

export default AddSlider;