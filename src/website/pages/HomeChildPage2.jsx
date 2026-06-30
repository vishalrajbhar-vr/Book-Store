import React, { useEffect, useState } from "react";

function HomeChildPage2() {
  const slides = [
    {
      id: 1,
      image:
        "https://htmldemo.net/pustok/pustok/image/bg-images/home-slider-2-ai.png",
      title: "J.D. Kurtness",
      subtitle: "De Vengeance",
      desc: "Cover Up Front Of Books And Leave Summary",
      price: "$78.09 - Learn More",
    },
    {
      id: 2,
      image:
        "https://htmldemo.net/pustok/pustok/image/bg-images/home-slider-1-ai.png",
      title: "Best Seller",
      subtitle: "Book Collection",
      desc: "Explore Amazing Stories And New Releases",
      price: "$55.00 - Learn More",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-[80vh] bg-[#ececf1] py-16 flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-6xl px-6 sm:px-10 flex flex-col-reverse items-center gap-12 md:flex-row md:justify-between">

        {/* Left Side Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={slides[current].image}
            alt="book"
            className="w-full max-w-xl object-contain duration-700"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-gray-800 leading-tight">
            {slides[current].title} <br />
            <span className="font-normal">{slides[current].subtitle}</span>
          </h1>

          <p className="text-2xl sm:text-3xl italic text-gray-500">
            {slides[current].desc}
          </p>

          <button className="w-full md:w-auto border-2 border-indigo-600 text-indigo-600 px-6 py-4 text-xl sm:px-12 sm:py-5 sm:text-2xl font-semibold hover:bg-indigo-600 hover:text-white duration-300">
            {slides[current].price}
          </button>

          {/* Dots */}
          <div className="flex gap-4 pt-5">
            {slides.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrent(index)}
                className={`w-5 h-5 rounded-full border-2 border-indigo-600 ${current === index ? "bg-indigo-600" : "bg-white"
                  }`}
              ></button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default HomeChildPage2;