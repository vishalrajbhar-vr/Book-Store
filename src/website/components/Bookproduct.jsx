import React from 'react'

function Bookproduct() {
  const books = [
    {
      id: 1,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      price: "₹299",
      image: "https://via.placeholder.com/200x250?text=Book+1",
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      price: "₹399",
      image: "https://via.placeholder.com/200x250?text=Book+2",
    },
    {
      id: 3,
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      price: "₹250",
      image: "https://via.placeholder.com/200x250?text=Book+3",
    },
    {
      id: 4,
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: "₹350",
      image: "https://via.placeholder.com/200x250?text=Book+4",
    },
  ]

  return (
    <div className="px-6 py-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Book Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {book.title}
              </h2>

              <p className="text-gray-500 mt-1">{book.author}</p>

              <h3 className="text-lg font-bold text-blue-600 mt-2">
                {book.price}
              </h3>

              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bookproduct