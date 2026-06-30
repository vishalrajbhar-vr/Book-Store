import React from "react";

function HomeChildPage5() {
  const books = [
    {
      id: 1,
      brand: "Rpple",
      title: "Do You Really Need It? This Will Help You",
      image:
        "https://htmldemo.net/pustok/pustok/image/products/product-2.jpg",
    },
    {
      id: 2,
      brand: "Wpple",
      title: "Do You Really Need It? This Will Help You",
      image:
        "https://htmldemo.net/pustok/pustok/image/products/product-2.jpg",
    },
    {
      id: 3,
      brand: "Epple",
      title: "Here Is Quick Cure BOOK This Will Help",
      image:
        "https://htmldemo.net/pustok/pustok/image/products/product-2.jpg",
    },
    {
      id: 4,
      brand: "Ypple",
      title: "Very Simple Things You Can Save BOOK",
      image:
        "https://htmldemo.net/pustok/pustok/image/products/product-4.jpg",
    },
  ];

  return (
    <div
      className="w-full bg-cover bg-center py-10 px-6"
      style={{
        backgroundImage:
          "url('')",
      }}
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-semibold uppercase text-black">
           Best Seller Books
        </h1>
        <div className="w-40 h-[2px] bg-indigo-600 mx-auto mt-3"></div>
      </div>

      {/* Main White Box */}
      <div className="max-w-6xl mx-auto bg-white p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 shadow-lg">

        {/* Left Big Image */}
        <div>
          <img
            src="https://htmldemo.net/pustok/pustok/image/others/best-seller-author.jpg"
            alt="author"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Products */}
        <div className="grid grid-cols-1 gap-8">
          {books.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 border-b border-gray-200 pb-6"
            >
              {/* Image */}
              <img
                src={item.image}
                alt="book"
                className="w-24 h-28 object-cover"
              />

              {/* Content */}
              <div>
                <p className="text-gray-500 text-lg">{item.brand}</p>

                <h2 className="text-2xl font-semibold leading-tight mt-2">
                  {item.title}
                </h2>

                <div className="flex items-center gap-3 mt-5">
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
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Dots */}
      <div className="flex justify-center gap-3 mt-10">
        <div className="w-4 h-4 rounded-full bg-indigo-600"></div>
        <div className="w-4 h-4 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
}

export default HomeChildPage5;