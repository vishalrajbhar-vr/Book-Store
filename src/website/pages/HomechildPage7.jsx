import React from "react";

function HomechildPage7() {
  return (
    <div
      className="w-full min-h-[420px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://thumbs.dreamstime.com/b/open-book-stack-books-open-book-stack-books-reading-learning-education-concept-panorama-good-copy-space-120469473.jpg')",
      }}
    >
      {/* Left Content */}
      <div className="w-full max-w-3xl px-6 sm:px-12 mx-auto text-center">
        <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl italic font-serif leading-tight">
          I Love This Idea!
        </h1>

        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl italic font-serif mt-6 leading-snug">
          Cover up front of book and leave summary
        </h2>

        <button className="mt-10 bg-yellow-400 hover:bg-yellow-500 text-black text-xl sm:text-2xl font-semibold px-8 py-4 sm:px-14 sm:py-5 rounded-sm duration-300">
          $78.09 - Learn More
        </button>
      </div>
    </div>
  );
}

export default HomechildPage7;