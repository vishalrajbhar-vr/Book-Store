import React from "react";
import {
  FaTruck,
  FaUndoAlt,
  FaPiggyBank,
  FaLifeRing,
} from "react-icons/fa";

function HomeChildPage9() {
  return (
    <div className="bg-[#f3f3f3] px-6 md:px-16 lg:px-24 py-8">
      
      {/* Top Service Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        
        {/* Box 1 */}
        <div className="border border-gray-300 bg-white p-5 flex items-center gap-4">
          <FaTruck className="text-indigo-600 text-5xl" />
          <div>
            <h2 className="text-2xl font-medium text-gray-900">
              Free Shipping Item
            </h2>
            <p className="text-gray-700 text-lg">Orders over $500</p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="border border-gray-300 bg-white p-5 flex items-center gap-4">
          <FaUndoAlt className="text-indigo-600 text-5xl" />
          <div>
            <h2 className="text-2xl font-medium text-gray-900">
              Money Back Guarantee
            </h2>
            <p className="text-gray-700 text-lg">100% money back</p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="border border-gray-300 bg-white p-5 flex items-center gap-4">
          <FaPiggyBank className="text-indigo-600 text-5xl" />
          <div>
            <h2 className="text-2xl font-medium text-gray-900">
              Cash On Delivery
            </h2>
            <p className="text-gray-700 text-lg">Lorem ipsum dolor amet</p>
          </div>
        </div>

        {/* Box 4 */}
        <div className="border border-gray-300 bg-white p-5 flex items-center gap-4">
          <FaLifeRing className="text-indigo-600 text-5xl" />
          <div>
            <h2 className="text-2xl font-medium text-gray-900">
              Help & Support
            </h2>
            <p className="text-gray-700 text-lg">Call us : + 0123.4567.89</p>
          </div>
        </div>
      </div>

      {/* Bottom Banner Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Banner */}
        <div className="bg-[#ecd28b] rounded-sm p-8 flex items-center justify-between min-h-[220px]">
          <div className="flex gap-2">
            <div className="w-4 h-36 bg-[#40556f]"></div>
            <div className="w-4 h-36 bg-[#8b6db5]"></div>
            <div className="w-4 h-36 bg-[#d8d2bc]"></div>
            <div className="w-4 h-36 bg-[#9fb39a]"></div>
          </div>

          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900">
              The Book
            </h1>
            <p className="text-3xl italic text-gray-700 mt-2">
              Available Worldwide
            </p>

            <button className="mt-6 bg-red-800 text-white px-8 py-3 text-xl hover:bg-red-900 transition">
              Shop Now
            </button>
          </div>

          <div className="w-28 h-40 bg-gradient-to-b from-cyan-200 to-gray-800 rotate-[-15deg] shadow-xl flex items-center justify-center text-center text-sm font-bold px-2">
            ROCK SOLID
          </div>
        </div>

        {/* Right Banner */}
        <div className="bg-red-700 rounded-sm p-8 flex items-center justify-center min-h-[220px]">
          <div className="text-white text-7xl font-bold mr-10">
            SALE
          </div>

          <div className="bg-white px-8 py-6 text-center">
            <p className="text-3xl text-gray-700 uppercase">
              Up To
            </p>
            <h2 className="text-7xl font-bold text-red-700">
              40%
            </h2>
            <p className="text-4xl text-gray-800 uppercase">
              OFF
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeChildPage9;