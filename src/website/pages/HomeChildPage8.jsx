import React from "react";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaYoutube } from "react-icons/fa";

function HomeChildPage8() {
  return (
    <div className="bg-[#f5f5f5] py-12 px-6 md:px-16 lg:px-24">
      
      {/* Top Logos */}
      <div className="border-y border-gray-300 py-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-gray-400 text-xl font-semibold text-center">
          <span>audiojungle</span>
          <span>graphicriver</span>
          <span>photodune</span>
          <span>codecanyon</span>
          <span>3docean</span>
          <span>activeden</span>
        </div>
      </div>

      {/* Footer Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Left Info */}
        <div>
          <h1 className="text-6xl font-bold text-indigo-600 mb-8">
            Pustok<span className="text-indigo-600">.</span>
          </h1>

          <div className="space-y-5 text-gray-700 text-lg">
            <p>
              <span className="font-bold text-black">Address:</span>{" "}
              Example Street 98, HH2 BacHa, New York, USA
            </p>

            <p>
              <span className="font-bold text-black">Phone:</span>{" "}
              +18088 234 5678
            </p>

            <p>
              <span className="font-bold text-black">Email:</span>{" "}
              suport@hastech.com
            </p>
          </div>
        </div>

        {/* Information */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-6 uppercase">
            Information
          </h2>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li>Prices drop</li>
            <li>New products</li>
            <li>Best sales</li>
            <li>Contact us</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Extras */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-6 uppercase">
            Extras
          </h2>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li>Delivery</li>
            <li>About Us</li>
            <li>Stores</li>
            <li>Contact us</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-2xl font-semibold text-black mb-6 uppercase">
            Newsletter Subscribe
          </h2>

          <input
            type="email"
            placeholder="Enter Your Email Address Here.."
            className="w-full border border-gray-300 px-4 py-4 mb-4 outline-none bg-white"
          />

          <button className="w-full bg-indigo-600 text-white py-4 font-semibold hover:bg-indigo-700 transition">
            SUBSCRIBE
          </button>

          <h3 className="text-2xl font-semibold text-black mt-10 mb-5 uppercase">
            Stay Connected
          </h3>

          <div className="flex gap-3">
            <div className="bg-blue-700 text-white p-3 cursor-pointer hover:scale-110 transition">
              <FaFacebookF />
            </div>

            <div className="bg-sky-500 text-white p-3 cursor-pointer hover:scale-110 transition">
              <FaTwitter />
            </div>

            <div className="bg-orange-500 text-white p-3 cursor-pointer hover:scale-110 transition">
              <FaGooglePlusG />
            </div>

            <div className="bg-red-600 text-white p-3 cursor-pointer hover:scale-110 transition">
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeChildPage8;