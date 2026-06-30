import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 sticky top-0 z-50">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        {/* Logo Home Link */}
        <Link
          to="/"
          className="text-xl font-bold hover:text-yellow-400 transition"
        >
          📚 BookStore
        </Link>

        {/* Buy Now Button */}
        <Link
          to="/buyPage"
          className="bg-indigo-700 text-black px-5 py-2 rounded-md font-semibold hover:bg-yellow-400 transition"
        >
          Buy Now 🛒
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;