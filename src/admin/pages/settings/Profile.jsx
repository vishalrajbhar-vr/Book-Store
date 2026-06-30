import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCamera,
  FaEdit,
  FaSave,
  FaGlobe,
  FaLock,
} from "react-icons/fa";

const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: "Vishal Rajbhar",
    email: "vishalrajbhar@mail.com",
    phone: "9876543210",
    city: "Lucknow",
    country: "India",
    bio: "Admin of Book Store Project. Managing products, orders and customers.",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile Updated Successfully");
    console.log(formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          My Profile
        </h1>

        <p className="text-gray-500 mt-1">
          Manage your admin account information
        </p>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl">
              <FaUser />
            </div>

            <div>
              <p className="text-gray-500">Role</p>
              <h2 className="font-bold text-lg">Super Admin</h2>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xl">
              <FaLock />
            </div>

            <div>
              <p className="text-gray-500">Status</p>
              <h2 className="font-bold text-lg">Active</h2>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xl">
              <FaGlobe />
            </div>

            <div>
              <p className="text-gray-500">Language</p>
              <h2 className="font-bold text-lg">English</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Profile Card */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <div className="w-28 h-28 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-4xl font-bold">
                V
              </div>

              <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full">
                <FaCamera size={14} />
              </button>
            </div>

            <h2 className="text-xl font-bold mt-4">
              {formData.fullName}
            </h2>

            <p className="text-gray-500">
              Book Store Administrator
            </p>

            <div className="mt-6 w-full space-y-4 text-left">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-gray-400" />
                <span>{formData.email}</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-gray-400" />
                <span>{formData.phone}</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-gray-400" />
                <span>{formData.city}, {formData.country}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
          <div className="flex items-center gap-3 mb-6">
            <FaEdit className="text-blue-600" />
            <h2 className="text-xl font-bold">
              Edit Profile
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Name */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Full Name
              </label>

              <div className="flex items-center border rounded-lg px-3">
                <FaUser className="text-gray-400" />

                <input
                  type="text"
                  name="fullName"
                  className="w-full p-3 outline-none"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Email Address
              </label>

              <div className="flex items-center border rounded-lg px-3">
                <FaEnvelope className="text-gray-400" />

                <input
                  type="email"
                  name="email"
                  className="w-full p-3 outline-none"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Phone */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Phone
                </label>

                <div className="flex items-center border rounded-lg px-3">
                  <FaPhone className="text-gray-400" />

                  <input
                    type="text"
                    name="phone"
                    className="w-full p-3 outline-none"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* City */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  City
                </label>

                <div className="flex items-center border rounded-lg px-3">
                  <FaMapMarkerAlt className="text-gray-400" />

                  <input
                    type="text"
                    name="city"
                    className="w-full p-3 outline-none"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Country */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Country
              </label>

              <div className="flex items-center border rounded-lg px-3">
                <FaGlobe className="text-gray-400" />

                <input
                  type="text"
                  name="country"
                  className="w-full p-3 outline-none"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Bio */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Bio
              </label>

              <textarea
                rows="5"
                name="bio"
                className="w-full border rounded-lg p-3 outline-none resize-none"
                value={formData.bio}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Button */}
            <div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
              >
                <FaSave />
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-sm text-gray-500">
        © 2026 Book Store Admin Panel
      </div>
    </div>
  );
};

export default Profile;