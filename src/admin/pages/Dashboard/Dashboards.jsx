import React from "react";
import {
  FaBook,
  FaShoppingCart,
  FaUsers,
  FaRupeeSign,
} from "react-icons/fa";

function Dashboard() {
  const orders = [
    "#1001 - ₹1200 - Atomic Habits",
    "#1002 - ₹899 - Rich Dad Poor Dad",
    "#1003 - ₹650 - The Alchemist",
  ];

  const users = [
    { name: "Rahul", email: "rahul@mail.com" },
    { name: "Amit", email: "amit@mail.com" },
    { name: "Sneha", email: "sneha@mail.com" },
    { name: "Priya", email: "priya@mail.com" },
  ];

  const revenue = [40, 60, 30, 80, 100, 70, 50];

  const weeklyOrders = [
    { day: "Mon", val: 20 },
    { day: "Tue", val: 35 },
    { day: "Wed", val: 25 },
    { day: "Thu", val: 50 },
    { day: "Fri", val: 60 },
    { day: "Sat", val: 40 },
    { day: "Sun", val: 30 },
  ];

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold">Book Store Dashboard</h1>

       
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Books</p>
              <h2 className="text-2xl font-bold">320</h2>
            </div>
            <FaBook className="text-blue-500 text-3xl" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Orders</p>
              <h2 className="text-2xl font-bold">210</h2>
            </div>
            <FaShoppingCart className="text-green-500 text-3xl" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Users</p>
              <h2 className="text-2xl font-bold">145</h2>
            </div>
            <FaUsers className="text-purple-500 text-3xl" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Revenue</p>
              <h2 className="text-2xl font-bold">₹85,000</h2>
            </div>
            <FaRupeeSign className="text-red-500 text-3xl" />
          </div>
        </div>
      </div>

      {/* Revenue + Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6">
        {/* Revenue */}
        <div className="lg:col-span-2 bg-white p-5 rounded-xl shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Revenue</h2>

            <select className="border px-3 py-1 rounded-md">
              <option>7 Days</option>
              <option>30 Days</option>
            </select>
          </div>

          <div className="flex items-end justify-between h-64 gap-3">
            {revenue.map((item, index) => (
              <div key={index} className="flex flex-col items-center w-full">
                <div
                  className="bg-blue-500 w-full rounded-t-md"
                  style={{ height: `${item * 2}px` }}
                ></div>

                <p className="text-sm mt-2">{days[index]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Orders */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="font-bold text-lg mb-4">Today's Orders</h2>

          <div className="space-y-3">
            {orders.map((item, index) => (
              <div
                key={index}
                className="border-b pb-3 text-sm text-gray-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Weekly Orders + Users */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6">
        {/* Weekly Orders */}
        <div className="lg:col-span-2 bg-white p-5 rounded-xl shadow">
          <h2 className="font-bold text-lg mb-4">Weekly Orders</h2>

          <div className="space-y-4">
            {weeklyOrders.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span>{item.day}</span>
                  <span>{item.val}</span>
                </div>

                <div className="w-full bg-gray-200 h-3 rounded-full">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: `${item.val}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Customers */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="font-bold text-lg mb-4">Recent Customers</h2>

          <div className="space-y-4">
            {users.map((user, index) => (
              <div
                key={index}
                className="flex items-center gap-3 border-b pb-3"
              >
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold">
                  {user.name[0]}
                </div>

                <div>
                  <h3 className="font-semibold">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 bg-white rounded-xl shadow p-4 text-center text-gray-600">
        © 2026 Book Store Admin Panel • Built with React JS
      </div>
    </div>
  );
}

export default Dashboard;