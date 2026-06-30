import React from 'react'

function Bookcarditems({ image, title, author, price }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {title}
        </h2>

        <p className="text-gray-500 mt-1">
          {author}
        </p>

        <h3 className="text-lg font-bold text-blue-600 mt-2">
          ₹{price}
        </h3>

        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Buy Now
        </button>
      </div>
      
    </div>
  )
}

export default Bookcarditems