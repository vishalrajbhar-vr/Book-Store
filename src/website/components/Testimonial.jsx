import React, { useEffect, useState } from "react";

function Testimonial() {

  const testimonials = [
    {
      name: "Vishal",
      review: "Bahut accha platform hai books kharidne ke liye 📚",
      role: "Student",
      image: "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
      name: "Rahul",
      review: "Fast delivery aur quality best hai 🔥",
      role: "Developer",
      image: "https://randomuser.me/api/portraits/men/12.jpg"
    },
    {
      name: "Sneha",
      review: "Har category ki books easily mil jati hain 😊",
      role: "Reader",
      image: "https://randomuser.me/api/portraits/women/13.jpg"
    },
    {
      name: "Amit",
      review: "Affordable price aur smooth UI 👍",
      role: "Engineer",
      image: "https://randomuser.me/api/portraits/men/14.jpg"
    },
    {
      name: "Priya",
      review: "Best online bookstore experience ❤️",
      role: "Teacher",
      image: "https://randomuser.me/api/portraits/women/15.jpg"
    }
  ];

  const [index, setIndex] = useState(0);

  // 🔹 Auto Slide (every 3 sec)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <div className="bg-gray-100 py-12 px-6 text-center">

      <h2 className="text-3xl font-bold mb-8">
        What Our Users Say 💬
      </h2>

      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md transition-all duration-500">

        {/* Image */}
        <img
          src={current.image}
          alt={current.name}
          className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
        />

        {/* Review */}
        <p className="text-gray-600 mb-4">
          "{current.review}"
        </p>

        {/* Name */}
        <h3 className="font-semibold text-lg">{current.name}</h3>

        {/* Role */}
        <p className="text-sm text-gray-400">{current.role}</p>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-5 gap-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-yellow-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

    </div>
  );
}

export default Testimonial;