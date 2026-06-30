import React from "react";

function LastPageU() {
  return (
    <div className="bg-gray-100">

      {/* 🔄 Top Slider */}
      <div className="overflow-hidden max-w-7xl mx-auto py-4 border-y flex justify-center">
        <div className="flex  gap-15 animate-marquee-stop whitespace-nowrap text-gray-300 text-4xl font-semibold">
          <span>audiojungle</span>
          <span>graphicriver</span>
          <span>photodune</span>
          <span>codecanyon</span>
          <span>3docean</span>
          <span>activeden</span>
        </div>
      </div>

      {/* 🔻 Footer */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 py-12 px-6">

        {/* Left */}
        <div>
          <h1 className="text-4xl font-bold text-indigo-600 mb-4">
            Pustok<span className="text-black">.</span>
          </h1>

          <p className="mb-2">
            <b>Address:</b> Example Street 98, HH2 <br />
            BacHa, New York, USA
          </p>

          <p className="mb-2">
            <b>Phone:</b> +18088 234 5678
          </p>

          <p>
            <b>Email:</b> suport@plazathemes.com
          </p>
        </div>

        {/* Information */}
        <div>
          <h2 className="font-semibold text-lg mb-4">INFORMATION</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Prices drop</li>
            <li>New products</li>
            <li>Best sales</li>
            <li>Contact us</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Extras */}
        <div>
          <h2 className="font-semibold text-lg mb-4">EXTRAS</h2>
          <ul className="space-y-2 text-gray-600">
            <li>Delivery</li>
            <li>About Us</li>
            <li>Stores</li>
            <li>Contact us</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="font-semibold text-lg mb-4">
            NEWSLETTER SUBSCRIBE
          </h2>

          <input
            type="text"
            placeholder="Enter Your Email Address Here.."
            className="w-full border p-3 mb-3 outline-none"
          />

          <button className="bg-indigo-600 text-white w-full py-3 font-semibold hover:bg-indigo-700">
            SUBSCRIBE
          </button>

          <h3 className="mt-6 font-semibold">STAY CONNECTED</h3>

          <div className="flex gap-3 mt-3">
            <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center">
              f
            </div>
            <div className="w-10 h-10 bg-sky-500 text-white flex items-center justify-center">
              t
            </div>
            <div className="w-10 h-10 bg-orange-500 text-white flex items-center justify-center">
              g+
            </div>
            <div className="w-10 h-10 bg-red-600 text-white flex items-center justify-center">
              ▶
            </div>
          </div>
        </div>

      </div>

      {/* 🎯 Animation CSS */}
      <style>
        {`
          @keyframes marqueeStop {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(0%);
            }
          }

          .animate-marquee-stop {
            animation: marqueeStop 10s linear forwards;
          }
        `}
      </style>

    </div>
  );
}

export default LastPageU;