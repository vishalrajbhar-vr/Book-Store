import React from "react";

function LastPage() {
  return (
    <section className="w-full min-h-screen bg-[#f5f5f5] py-20 px-6">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-semibold text-zinc-800 mb-6">
          Fully Responsive & Mobile Optimized
        </h1>

        <p className="text-xl text-zinc-600 leading-10 max-w-4xl mx-auto">
          All functions of your website will be guaranteed on almost devices:
          desktops, laptops, ipads, iphones, android... and give visitors
          beautiful interfaces
        </p>
      </div>

      {/* Device Showcase */}
      <div className="relative max-w-6xl mx-auto h-[720px] md:h-[600px]">

        {/* Leaf Left */}
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500"
          alt=""
          className="absolute left-4 top-32 w-28 md:left-10 md:top-44 md:w-44 opacity-90 rotate-[-20deg]"
        />

        {/* Leaf Right */}
        <img
          src="https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=500"
          alt=""
          className="absolute right-4 top-24 w-44 md:right-0 md:w-72 opacity-95"
        />

        {/* Main Desktop */}
        <div className="absolute left-1/2 top-10 -translate-x-1/2 w-full max-w-[620px] h-[380px] bg-white rounded-2xl shadow-2xl rotate-[-8deg] border-[14px] border-zinc-200 overflow-hidden md:left-20 md:translate-x-0">
          {/* Browser top */}
          <div className="h-7 bg-zinc-100 flex items-center gap-2 px-4">
            <span className="w-2 h-2 bg-zinc-300 rounded-full"></span>
            <span className="w-2 h-2 bg-zinc-300 rounded-full"></span>
            <span className="w-2 h-2 bg-zinc-300 rounded-full"></span>
          </div>

          {/* Screen */}
          <div className="bg-zinc-50 h-full p-6">
            <div className="grid grid-cols-2 gap-6 items-center">
              <img
                src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500"
                alt=""
                className="rounded-xl h-52 object-cover"
              />

              <div>
                <h2 className="text-3xl font-bold text-zinc-800 mb-4">
                  J.D. Kurtness <br /> De Vengeance
                </h2>

                <p className="text-zinc-500 mb-4">
                  Cover up front of book and cover summary
                </p>

                <button className="px-5 py-2 border border-lime-600 text-lime-600 rounded-md">
                  View More
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-yellow-100 h-24 rounded-lg"></div>
              <div className="bg-red-500 h-24 rounded-lg text-white flex items-center justify-center font-bold text-3xl">
                SALE
              </div>
              <div className="bg-zinc-200 h-24 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Laptop */}
        <div className="absolute right-4 bottom-8 w-full max-w-[420px] h-[240px] bg-white rounded-xl shadow-xl border-[10px] border-zinc-200 overflow-hidden md:right-10 md:bottom-16">
          <div className="h-6 bg-zinc-100 flex items-center gap-2 px-3">
            <span className="w-2 h-2 bg-zinc-300 rounded-full"></span>
            <span className="w-2 h-2 bg-zinc-300 rounded-full"></span>
            <span className="w-2 h-2 bg-zinc-300 rounded-full"></span>
          </div>

          <div className="bg-indigo-700 h-24"></div>

          <div className="grid grid-cols-4 gap-3 p-4">
            <div className="bg-blue-300 h-12 rounded"></div>
            <div className="bg-orange-400 h-12 rounded"></div>
            <div className="bg-zinc-800 h-12 rounded"></div>
            <div className="bg-pink-400 h-12 rounded"></div>
          </div>
        </div>

        {/* Mobile */}
        <div className="absolute left-1/2 bottom-6 -translate-x-1/2 w-[90px] h-[180px] bg-white rounded-2xl shadow-2xl border-[6px] border-zinc-200 overflow-hidden md:left-[48%] md:translate-x-0">
          <div className="h-5 bg-zinc-100"></div>

          <div className="p-2 space-y-2">
            <div className="bg-blue-500 h-4 rounded"></div>
            <div className="bg-zinc-200 h-3 rounded"></div>
            <div className="bg-zinc-200 h-3 rounded"></div>
            <div className="bg-zinc-300 h-10 rounded"></div>
            <div className="bg-zinc-200 h-3 rounded"></div>
            <div className="bg-zinc-300 h-8 rounded"></div>
          </div>
        </div>

        {/* Bottom Shadow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-8 bg-zinc-300 blur-2xl rounded-full"></div>
      </div>
    </section>
  );
}

export default LastPage;