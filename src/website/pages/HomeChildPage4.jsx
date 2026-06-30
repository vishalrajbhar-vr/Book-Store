import React from "react";

function HomeChildPage4() {
  const products = [
    {
      id: 1,
      brand: "Upple",
      title: "Here Is A Quick Cure For Book",
      image:
        "https://htmldemo.net/pustok/pustok/image/products/product-1.jpg",
    },
    {
      id: 2,
      brand: "Ypple",
      title: "A Half Very Simple Things You To Save",
      image:
        "https://htmldemo.net/pustok/pustok/image/products/product-2.jpg",
    },
    {
      id: 3,
      brand: "Epple",
      title: "What You Can Learn From Bill Gates",
      image:
        "https://htmldemo.net/pustok/pustok/image/products/product-4.jpg",
    },
    {
      id: 4,
      brand: "Rpple",
      title: "Create Better BOOK With The Help Of Your",
      image:
        "https://htmldemo.net/pustok/pustok/image/products/product-4.jpg",
    },
    {
      id: 5,
      brand: "Tpple",
      title: "Turn Your BOOK Into High Machine",
      image:
        "v",
    },
    {
      id: 6,
      brand: "Mpple",
      title: "Revolutionize Your BOOK With These Easy",
      image:
        "https://htmldemo.net/pustok/pustok/image/products/product-11.jpg",
    },
  ];

  return (
    <div className="w-full bg-[#f5f5f5] py-6 px-4">
      {/* Top indigo Offer Bar */}
      <div className="bg-indigo-600 text-white text-center text-3xl py-4 rounded-md mb-12">
        Deal of the day up to 20% off Special offer
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white border p-4 text-center hover:shadow-xl duration-300"
          >
            {/* Brand */}
            <p className="text-gray-500 text-lg mb-2">{item.brand}</p>

            {/* Title */}
            <h2 className="text-2xl font-semibold leading-tight h-[80px]">
              {item.title}
            </h2>

            {/* Image */}
            <img
              src={item.image}
              alt="book"
              className="w-full h-72 object-contain my-5"
            />

            {/* Price */}
            <div className="flex justify-center items-center gap-2 mb-6">
              <span className="text-indigo-600 text-3xl font-bold">
                £51.20
              </span>
              <span className="line-through text-gray-400 text-xl">
                £61.20
              </span>
              <span className="bg-red-600 text-white px-2 rounded text-sm">
                20%
              </span>
            </div>

            {/* Countdown */}
            <div className="border border-gray-300 py-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 text-center gap-2">
                <div>
                  <h3 className="text-2xl font-semibold">00</h3>
                  <p className="text-gray-600">Days</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">00</h3>
                  <p className="text-gray-600">Hours</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">00</h3>
                  <p className="text-gray-600">Mins</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">00</h3>
                  <p className="text-gray-600">Secs</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeChildPage4;