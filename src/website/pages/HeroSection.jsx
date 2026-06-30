import React from "react";

function HeroSection() {
  return (
    <section
      className="relative w-full min-h-[80vh] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1600')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      <div className="relative z-10 max-w-7xl mx-auto min-h-[80vh] px-6 py-20 lg:px-10 flex flex-col lg:flex-row items-center lg:items-start gap-12">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/3 text-white">
          <p className="text-sm tracking-widest uppercase mb-2">
            BUILT SITES
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            WITH THE SOUL
            <br />
            OF INSPIRATION
          </h1>

          <p className="text-base sm:text-sm text-zinc-200 mb-8 max-w-2xl">
            Pustok Book Store HTML Template
          </p>

          <button className="border border-white px-6 py-3 text-sm font-semibold hover:bg-white hover:text-black duration-300">
            READ MORE
          </button>
        </div>

        {/* Right Devices */}
        <div className="hidden lg:block w-2/3 relative h-[650px] overflow-hidden">

          {/* Desktop */}
          <div className="absolute right-0 top-8 w-full max-w-[700px] bg-white rounded-xl shadow-2xl overflow-hidden">

            {/* Browser Header */}
            <div className="bg-zinc-100 px-5 py-3 flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-indigo-400"></span>
            </div>

            {/* Navbar */}
            <div className="px-6 py-4 flex justify-between items-center border-b">
              <h2 className="text-4xl font-bold text-blue-600">
                Pustok<span className="text-zinc-700">.</span>
              </h2>

              <div className="flex gap-5 text-xs font-medium text-zinc-700">
                <span>HOME</span>
                <span>SHOP</span>
                <span>FEATURED</span>
                <span>PAGE</span>
                <span>BLOG</span>
                <span>CONTACT</span>
              </div>
            </div>

            {/* Hero Area */}
            <div className="grid grid-cols-2 gap-6 px-8 py-10 bg-[#f7f5fb]">

              {/* Book Image */}
              <div className="flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500"
                  alt=""
                  className="w-60 h-72 object-contain rotate-[-18deg]"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center">
                <h2 className="text-5xl font-semibold text-zinc-800 leading-tight mb-4">
                  J.D. Kurtness
                  <br />
                  De Vengeance
                </h2>

                <p className="text-2xl text-zinc-400 italic mb-6">
                  Cover up front of book and
                  <br />
                  leave summary
                </p>

                <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 font-semibold w-fit hover:bg-blue-600 hover:text-white duration-300">
                  $78.09 - Learn More
                </button>
              </div>
            </div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-3 gap-4 p-5 bg-white">
              <div className="bg-yellow-100 rounded-lg h-24 flex items-center justify-center font-bold text-xl">
                The Book
              </div>

              <div className="bg-red-600 text-white rounded-lg h-24 flex items-center justify-center font-bold text-4xl">
                SALE
              </div>

              <div className="bg-zinc-100 rounded-lg h-24 flex items-center justify-center font-bold text-3xl text-red-500">
                40% OFF
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="absolute left-12 top-32 w-[210px] bg-white rounded-[2rem] shadow-2xl border-[6px] border-zinc-200 overflow-hidden">

            <div className="w-16 h-2 bg-zinc-300 rounded-full mx-auto mt-3"></div>

            <div className="p-4">
              <h2 className="text-3xl font-bold text-blue-600 text-center mb-3">
                Pustok.
              </h2>

              <div className="bg-zinc-100 rounded-md p-2 text-sm mb-3">
                Category
              </div>

              <div className="bg-blue-600 text-white text-center py-2 rounded-md mb-3">
                Search
              </div>

              <div className="space-y-2">
                <div className="bg-zinc-100 h-12 rounded-md"></div>
                <div className="bg-zinc-100 h-12 rounded-md"></div>
                <div className="bg-zinc-100 h-12 rounded-md"></div>
                <div className="bg-zinc-100 h-12 rounded-md"></div>
              </div>
            </div>

            <div className="w-10 h-10 border-2 border-blue-300 rounded-full mx-auto my-3"></div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;