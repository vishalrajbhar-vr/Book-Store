import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaPlus,
  FaEdit,
  FaTrash,
  FaTicketAlt,
  FaPercent,
  FaRupeeSign,
} from "react-icons/fa";

const AllCoupon = () => {
  const [search, setSearch] = useState("");

  const couponData = [
    {
      id: 1,
      name: "Festival Offer",
      code: "SAVE20",
      type: "Percentage",
      discount: 20,
      minOrder: 500,
      expiry: "30 Apr 2026",
      status: "Active",
    },
    {
      id: 2,
      name: "New User Offer",
      code: "WELCOME10",
      type: "Flat",
      discount: 100,
      minOrder: 799,
      expiry: "10 May 2026",
      status: "Active",
    },
    {
      id: 3,
      name: "Summer Sale",
      code: "HOT15",
      type: "Percentage",
      discount: 15,
      minOrder: 999,
      expiry: "18 May 2026",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Weekend Deal",
      code: "WEEK50",
      type: "Flat",
      discount: 50,
      minOrder: 399,
      expiry: "05 Jun 2026",
      status: "Active",
    },
  ];

  const filteredCoupons = couponData.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            All Coupons
          </h1>
          <p className="text-gray-500 mt-1">
            Manage all discount coupons
          </p>
        </div>

        <Link
          to="/admin/add-coupon"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex items-center gap-2 w-fit"
        >
          <FaPlus />
          Add Coupon
        </Link>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow p-4 mb-6">
        <div className="flex items-center border rounded-lg px-4 py-3">
          <FaSearch className="text-gray-400 mr-3" />

          <input
            type="text"
            placeholder="Search coupon name or code..."
            className="w-full outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full min-w-[1100px]">
          <thead className="bg-gray-50 border-b">
            <tr className="text-left">
              <th className="px-6 py-4">Coupon</th>
              <th className="px-6 py-4">Code</th>
              <th className="px-6 py-4">Discount</th>
              <th className="px-6 py-4">Min Order</th>
              <th className="px-6 py-4">Expiry</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredCoupons.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition"
              >
                {/* Coupon */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                      <FaTicketAlt />
                    </div>

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

                {/* Code */}
                <td className="px-6 py-4">
                  <span className="bg-gray-100 px-3 py-1 rounded-md font-semibold">
                    {item.code}
                  </span>
                </td>

                {/* Discount */}
                <td className="px-6 py-4 font-semibold text-green-600">
                  {item.type === "Percentage" ? (
                    <span className="flex items-center gap-1">
                      <FaPercent className="text-sm" />
                      {item.discount}
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <FaRupeeSign className="text-sm" />
                      {item.discount}
                    </span>
                  )}
                </td>

                {/* Min Order */}
                <td className="px-6 py-4">
                  ₹{item.minOrder}
                </td>

                {/* Expiry */}
                <td className="px-6 py-4 text-gray-700">
                  {item.expiry}
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

                {/* Action */}
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
            {filteredCoupons.length === 0 && (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-12 text-gray-500"
                >
                  No Coupon Found
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

export default AllCoupon;