import React from 'react'

function Aboutbook() {
  return (
    <div className="bg-white py-12 px-6">

      {/* Container */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT - Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
            alt="Book Store"
            className="rounded-xl shadow-md"
          />
        </div>

        {/* RIGHT - Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            About Our Book Store 📚
          </h2>

          <p className="text-gray-600 mb-4">
            Welcome to our Book Store! We provide a wide collection of books 
            including novels, educational, motivational, and many more. 
            Our mission is to make reading easy and enjoyable for everyone.
          </p>

          <p className="text-gray-600 mb-6">
            Whether you are a student, a professional, or a book lover, 
            we have something special for you. Discover new stories, 
            gain knowledge, and grow with us.
          </p>

          {/* Features */}
          <ul className="space-y-2 text-gray-700">
            <li>✅ Wide range of books</li>
            <li>✅ Affordable prices</li>
            <li>✅ Fast delivery</li>
            <li>✅ Easy shopping experience</li>
          </ul>

          {/* Button */}
          <button className="mt-6 bg-yellow-500 text-black px-5 py-2 rounded-md font-semibold hover:bg-yellow-400 transition">
            Explore Books
          </button>
        </div>

      </div>

    </div>
  )
}

export default Aboutbook