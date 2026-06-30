import React, { useState } from "react";
import {
  FaTicketAlt,
  FaPercent,
  FaCalendarAlt,
  FaRupeeSign,
  FaSave,
  FaFileAlt,
} from "react-icons/fa";

const AddCoupon = () => {
  const [formData, setFormData] = useState({
    couponName: "",
    couponCode: "",
    discountType: "Percentage",
    discountValue: "",
    minimumOrder: "",
    expiryDate: "",
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
    alert("Coupon Added Successfully");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Add Coupon
        </h1>

        <p className="text-gray-500 mt-1">
          Create new discount coupon for bookstore
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Coupon Name */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Coupon Name
              </label>

              <div className="flex items-center border rounded-lg px-3">
                <FaTicketAlt className="text-gray-400" />

                <input
                  type="text"
                  name="couponName"
                  placeholder="Festival Offer"
                  className="w-full p-3 outline-none"
                  value={formData.couponName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Coupon Code */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Coupon Code
              </label>

              <div className="flex items-center border rounded-lg px-3">
                <FaTicketAlt className="text-gray-400" />

                <input
                  type="text"
                  name="couponCode"
                  placeholder="SAVE20"
                  className="w-full p-3 outline-none uppercase"
                  value={formData.couponCode}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Discount Type */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Discount Type
              </label>

              <select
                name="discountType"
                className="border rounded-lg px-4 py-3 w-full"
                value={formData.discountType}
                onChange={handleChange}
              >
                <option>Percentage</option>
                <option>Flat</option>
              </select>
            </div>

            {/* Discount Value */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Discount Value
              </label>

              <div className="flex items-center border rounded-lg px-3">
                <FaPercent className="text-gray-400" />

                <input
                  type="number"
                  name="discountValue"
                  placeholder="20"
                  className="w-full p-3 outline-none"
                  value={formData.discountValue}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Minimum Order */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Minimum Order
              </label>

              <div className="flex items-center border rounded-lg px-3">
                <FaRupeeSign className="text-gray-400" />

                <input
                  type="number"
                  name="minimumOrder"
                  placeholder="500"
                  className="w-full p-3 outline-none"
                  value={formData.minimumOrder}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Expiry */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Expiry Date
            </label>

            <div className="flex items-center border rounded-lg px-3">
              <FaCalendarAlt className="text-gray-400" />

              <input
                type="date"
                name="expiryDate"
                className="w-full p-3 outline-none"
                value={formData.expiryDate}
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
                rows="4"
                name="description"
                placeholder="Write coupon details..."
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
              Save Coupon
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

export default AddCoupon;