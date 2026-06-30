import React, { useState } from "react";
import {
  FaSearch,
  FaEdit,
  FaTrash,
  FaEye,
  FaUserShield,
  FaCheckCircle,
  FaTimesCircle,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

function Users() {
  const [search, setSearch] = useState("");

  const usersData = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@mail.com",
      phone: "9876543210",
      role: "Customer",
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Singh",
      email: "priya@mail.com",
      phone: "9876501234",
      role: "Customer",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Amit Verma",
      email: "amit@mail.com",
      phone: "9123456780",
      role: "Admin",
      status: "Active",
    },
  ];

  const filteredUsers = usersData.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-4">Users Management</h1>

      {/* Search */}
      <div className="bg-white p-4 rounded shadow mb-4 flex items-center gap-2">
        <FaSearch />
        <input
          type="text"
          placeholder="Search user..."
          className="w-full outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">User</th>
              <th className="p-3">Contact</th>
              <th className="p-3">Role</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user.id} className="border-t">
                <td className="p-3">{index + 1}</td>

                <td className="p-3">
                  <p className="font-semibold">{user.name}</p>
                </td>

                <td className="p-3 text-sm">
                  <p className="flex items-center gap-1">
                    <FaEnvelope /> {user.email}
                  </p>
                  <p className="flex items-center gap-1">
                    <FaPhone /> {user.phone}
                  </p>
                </td>

                <td className="p-3">
                  {user.role === "Admin" ? (
                    <span className="text-blue-600 flex items-center gap-1">
                      <FaUserShield /> Admin
                    </span>
                  ) : (
                    "Customer"
                  )}
                </td>

                <td className="p-3">
                  {user.status === "Active" ? (
                    <span className="text-green-600 flex items-center gap-1">
                      <FaCheckCircle /> Active
                    </span>
                  ) : (
                    <span className="text-red-600 flex items-center gap-1">
                      <FaTimesCircle /> Inactive
                    </span>
                  )}
                </td>

                <td className="p-3 flex gap-2">
                  <button className="text-blue-500">
                    <FaEye />
                  </button>
                  <button className="text-yellow-500">
                    <FaEdit />
                  </button>
                  <button className="text-red-500">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}

            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center p-4">
                  No Users Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;