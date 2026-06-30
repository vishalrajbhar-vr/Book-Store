import React, { useState } from "react";
import {
  FaSearch,
  FaUserShield,
  FaSignInAlt,
  FaSignOutAlt,
  FaEdit,
  FaTrash,
  FaPlus,
  FaLock,
  FaClock,
  FaDesktop,
} from "react-icons/fa";

const AdminLogs = () => {
  const [search, setSearch] = useState("");

  const logsData = [
    {
      id: 1,
      admin: "Vishal Rajbhar",
      action: "Login",
      icon: <FaSignInAlt />,
      time: "29 Apr 2026, 10:15 AM",
      device: "Windows Chrome",
      ip: "192.168.1.10",
      status: "Success",
    },
    {
      id: 2,
      admin: "Vishal Rajbhar",
      action: "Added Product",
      icon: <FaPlus />,
      time: "29 Apr 2026, 10:45 AM",
      device: "Windows Chrome",
      ip: "192.168.1.10",
      status: "Success",
    },
    {
      id: 3,
      admin: "Vishal Rajbhar",
      action: "Updated Category",
      icon: <FaEdit />,
      time: "29 Apr 2026, 11:10 AM",
      device: "Windows Chrome",
      ip: "192.168.1.10",
      status: "Success",
    },
    {
      id: 4,
      admin: "Vishal Rajbhar",
      action: "Deleted Coupon",
      icon: <FaTrash />,
      time: "29 Apr 2026, 12:00 PM",
      device: "Mobile Safari",
      ip: "192.168.1.25",
      status: "Warning",
    },
    {
      id: 5,
      admin: "Vishal Rajbhar",
      action: "Password Changed",
      icon: <FaLock />,
      time: "29 Apr 2026, 01:30 PM",
      device: "Windows Chrome",
      ip: "192.168.1.10",
      status: "Success",
    },
    {
      id: 6,
      admin: "Vishal Rajbhar",
      action: "Logout",
      icon: <FaSignOutAlt />,
      time: "29 Apr 2026, 02:00 PM",
      device: "Windows Chrome",
      ip: "192.168.1.10",
      status: "Success",
    },
  ];

  const filteredLogs = logsData.filter(
    (item) =>
      item.admin.toLowerCase().includes(search.toLowerCase()) ||
      item.action.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Admin Logs
        </h1>

        <p className="text-gray-500 mt-1">
          Track all admin activities and security actions
        </p>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow p-4 mb-6">
        <div className="flex items-center border rounded-lg px-4 py-3">
          <FaSearch className="text-gray-400 mr-3" />

          <input
            type="text"
            placeholder="Search logs..."
            className="w-full outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
              <FaUserShield />
            </div>

            <div>
              <p className="text-gray-500">Total Logs</p>
              <h2 className="text-2xl font-bold">
                {logsData.length}
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
              <FaSignInAlt />
            </div>

            <div>
              <p className="text-gray-500">Successful Actions</p>
              <h2 className="text-2xl font-bold">5</h2>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-red-100 text-red-600 flex items-center justify-center">
              <FaClock />
            </div>

            <div>
              <p className="text-gray-500">Today Activity</p>
              <h2 className="text-2xl font-bold">6</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Logs Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full min-w-[1100px]">
          <thead className="bg-gray-50 border-b">
            <tr className="text-left">
              <th className="px-6 py-4">Admin</th>
              <th className="px-6 py-4">Action</th>
              <th className="px-6 py-4">Date & Time</th>
              <th className="px-6 py-4">Device</th>
              <th className="px-6 py-4">IP Address</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredLogs.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition"
              >
                {/* Admin */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      <FaUserShield />
                    </div>

                    <div>
                      <h2 className="font-semibold">
                        {item.admin}
                      </h2>
                      <p className="text-sm text-gray-500">
                        Admin ID #{item.id}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Action */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 font-medium">
                    <span className="text-blue-600">
                      {item.icon}
                    </span>
                    {item.action}
                  </div>
                </td>

                {/* Time */}
                <td className="px-6 py-4 text-gray-700">
                  {item.time}
                </td>

                {/* Device */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <FaDesktop className="text-gray-500" />
                    {item.device}
                  </div>
                </td>

                {/* IP */}
                <td className="px-6 py-4 text-gray-700">
                  {item.ip}
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.status === "Success"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}

            {filteredLogs.length === 0 && (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-10 text-gray-500"
                >
                  No Logs Found
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

export default AdminLogs;