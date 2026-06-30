// src/pages/HomeSelector.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function HomeSelector() {
  const navigate = useNavigate();

  const pages = [
    {
      id: 1,
      title: "HOME PAGE 1",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800",
      path: "/homepage1",
    },
    {
      id: 2,
      title: "HOME PAGE 2",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800",
      path: "/homepage2",
    },
    {
      id: 3,
      title: "HOME PAGE 3",
      image:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800",
      path: "/homepage3",
    },
    {
      id: 4,
      title: "HOME PAGE 4",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800",
      path: "/homepage4",
    },
    {
      id: 5,
      title: "HOME PAGE 5",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800",
      path: "/homepage5",
    },
    {
      id: 6,
      title: "CATEGORY PAGE",
      image:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800",
      path: "/category",
    },
     {
      id: 7,
      title: "Product PAGE",
      image:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800",
      path: "/product",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-14 px-6">
      <div className="text-center mb-14">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Select Your Homepage
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Comes with 06 homepages available with multi style that better for
          your choice.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {pages.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-72 object-cover"
            />

            <div className="p-6 text-center">
              <button
                onClick={() => navigate(item.path)}
                className="border px-8 py-3 font-bold hover:bg-black hover:text-white duration-300"
              >
                {item.title}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeSelector;