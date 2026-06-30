import React, { useState } from "react";
import {
  FaLock,
  FaKey,
  FaEye,
  FaEyeSlash,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

const ChangePassword = () => {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      alert("New Password and Confirm Password do not match");
      return;
    }

    alert("Password Changed Successfully");
    console.log(formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Change Password
        </h1>

        <p className="text-gray-500 mt-1">
          Update your admin account password securely
        </p>
      </div>

      {/* Security Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
              <FaShieldAlt />
            </div>

            <div>
              <p className="text-gray-500">Security Level</p>
              <h2 className="font-bold text-lg">High</h2>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
              <FaCheckCircle />
            </div>

            <div>
              <p className="text-gray-500">2 Step Verify</p>
              <h2 className="font-bold text-lg">Enabled</h2>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
              <FaKey />
            </div>

            <div>
              <p className="text-gray-500">Last Changed</p>
              <h2 className="font-bold text-lg">15 Days Ago</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Old Password */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Current Password
            </label>

            <div className="flex items-center border rounded-lg px-3">
              <FaLock className="text-gray-400" />

              <input
                type={showOld ? "text" : "password"}
                name="oldPassword"
                placeholder="Enter current password"
                className="w-full p-3 outline-none"
                value={formData.oldPassword}
                onChange={handleChange}
              />

              <button
                type="button"
                onClick={() => setShowOld(!showOld)}
              >
                {showOld ? (
                  <FaEyeSlash className="text-gray-500" />
                ) : (
                  <FaEye className="text-gray-500" />
                )}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              New Password
            </label>

            <div className="flex items-center border rounded-lg px-3">
              <FaKey className="text-gray-400" />

              <input
                type={showNew ? "text" : "password"}
                name="newPassword"
                placeholder="Enter new password"
                className="w-full p-3 outline-none"
                value={formData.newPassword}
                onChange={handleChange}
              />

              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
              >
                {showNew ? (
                  <FaEyeSlash className="text-gray-500" />
                ) : (
                  <FaEye className="text-gray-500" />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Confirm Password
            </label>

            <div className="flex items-center border rounded-lg px-3">
              <FaLock className="text-gray-400" />

              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm new password"
                className="w-full p-3 outline-none"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirm(!showConfirm)
                }
              >
                {showConfirm ? (
                  <FaEyeSlash className="text-gray-500" />
                ) : (
                  <FaEye className="text-gray-500" />
                )}
              </button>
            </div>
          </div>

          {/* Password Tips */}
          <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
            <p className="font-semibold mb-2">
              Password must contain:
            </p>

            <ul className="space-y-1 list-disc ml-5">
              <li>Minimum 8 characters</li>
              <li>Uppercase & lowercase letter</li>
              <li>At least 1 number</li>
              <li>At least 1 special symbol</li>
            </ul>
          </div>

          {/* Button */}
          <div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
            >
              Update Password
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

export default ChangePassword;