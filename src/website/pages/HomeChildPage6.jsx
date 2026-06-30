import React from "react";

function HomeChildPage6() {
  const books = [
    {
      id: 1,
      brand: "Rpple",
      title: "Revolutionize Your BOOK With",
      image:
        "https://htmldemo.net/pustok/pustok/image/products/product-4.jpg",
    },
    {
      id: 2,
      brand: "Epple",
      title: "BOOK: Do You Really Need It? This",
      image:
        "https://htmldemo.net/pustok/pustok/image/products/product-4.jpg",
    },
    {
      id: 3,
      brand: "Ypple",
      title: "What You Can Learn From Bill Gates",
      image:
        "https://htmldemo.net/pustok/pustok/image/products/product-4.jpg",
    },
    {
      id: 4,
      brand: "Dpple",
      title: "Turn Your BOOK Into High Machine",
      image:
        "https://htmldemo.net/pustok/pustok/image/products/product-4.jpg",
    },
    {
      id: 5,
      brand: "Ppple",
      title: "Here Is A Quick Cure For Book",
      image:
        "https://htmldemo.net/pustok/pustok/image/products/product-4.jpg",
    },
    {
      id: 6,
      brand: "Wpple",
      title: "3 Ways Create Better BOOK With",
      image:
        "https://htmldemo.net/pustok/pustok/image/products/product-4.jpg",
    },
  ];

  return (
    <div className="w-full bg-[#f5f5f5] py-12 px-6 sm:px-10">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-semibold uppercase text-black">
          Children's Books
        </h1>
        <div className="w-52 h-[2px] bg-indigo-600 mx-auto mt-4"></div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {books.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-6 border-b border-gray-300 pb-6 md:flex-row md:border-r md:border-b-0 md:pb-8 md:pr-6"
          >
            {/* Image */}
            <img
              src={item.image}
              alt="book"
              className="w-32 h-40 object-cover"
            />

            {/* Content */}
            <div>
              <p className="text-gray-500 text-xl mb-2">{item.brand}</p>

              <h2 className="text-3xl font-semibold leading-tight mb-6">
                {item.title}
              </h2>

              {/* Price */}
              <div className="flex items-center gap-3">
                <span className="text-indigo-600 text-4xl font-bold">
                  £51.20
                </span>

                <span className="line-through text-gray-400 text-2xl">
                  £51.20
                </span>

                <span className="bg-red-600 text-white px-2 py-1 rounded text-lg">
                  20%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeChildPage6;