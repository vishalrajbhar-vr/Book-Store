import React, { useState } from "react";
import {
  FaSearch,
  FaEye,
  FaTrash,
  FaCheckCircle,
  FaClock,
  FaTruck,
  FaTimesCircle,
} from "react-icons/fa";

const Orders = () => {
  const [search, setSearch] = useState("");

  const ordersData = [
    {
      id: "#1001",
      customer: "Rahul Sharma",
      book: "Atomic Habits",
      amount: 1200,
      status: "Delivered",
      date: "12 Apr 2026",
    },
    {
      id: "#1002",
      customer: "Priya Singh",
      book: "Rich Dad Poor Dad",
      amount: 899,
      status: "Pending",
      date: "13 Apr 2026",
    },
    {
      id: "#1003",
      customer: "Amit Verma",
      book: "The Alchemist",
      amount: 650,
      status: "Shipped",
      date: "14 Apr 2026",
    },
    {
      id: "#1004",
      customer: "Sneha Gupta",
      book: "Deep Work",
      amount: 999,
      status: "Cancelled",
      date: "15 Apr 2026",
    },
  ];

  const filteredOrders = ordersData.filter(
    (order) =>
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      order.id.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusStyle = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-600";
      case "Pending":
        return "bg-yellow-100 text-yellow-600";
      case "Shipped":
        return "bg-blue-100 text-blue-600";
      case "Cancelled":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Delivered":
        return <FaCheckCircle />;
      case "Pending":
        return <FaClock />;
      case "Shipped":
        return <FaTruck />;
      case "Cancelled":
        return <FaTimesCircle />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Orders Management
        </h1>
        <p className="text-gray-500">
          Track and manage all customer orders
        </p>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <div className="flex items-center border rounded-lg px-3">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search by order ID or customer..."
            className="w-full p-3 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead className="bg-gray-50">
            <tr className="text-left text-gray-600">
              <th className="p-4">Order ID</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Book</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Date</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.map((order, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="p-4 font-semibold">{order.id}</td>
                <td className="p-4">{order.customer}</td>
                <td className="p-4">{order.book}</td>
                <td className="p-4">₹{order.amount}</td>
                <td className="p-4">{order.date}</td>

                {/* Status */}
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 w-fit ${getStatusStyle(
                      order.status
                    )}`}
                  >
                    {getStatusIcon(order.status)}
                    {order.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="p-4 text-center">
                  <div className="flex justify-center gap-2">
                    <button className="bg-blue-100 p-2 rounded hover:bg-blue-200">
                      <FaEye />
                    </button>

                    <button className="bg-red-100 p-2 rounded hover:bg-red-200">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {filteredOrders.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center p-6 text-gray-500">
                  No Orders Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="text-center mt-6 text-gray-500 text-sm">
        © 2026 Book Store Admin Panel
      </div>
    </div>
  );
};

export default Orders;