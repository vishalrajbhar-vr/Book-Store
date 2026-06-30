import React from 'react'
import Bookcarditems from './Bookcarditems'

function BookCard() {
  const books = [
    {
      id: 1,
      image: "https://via.placeholder.com/200x250?text=Book+1",
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      price: 299,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/200x250?text=Book+2",
      title: "Atomic Habits",
      author: "James Clear",
      price: 399,
    },
    {
      id: 3,
      image: "https://via.placeholder.com/200x250?text=Book+3",
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      price: 250,
    },
    {
      id: 4,
      image: "https://via.placeholder.com/200x250?text=Book+4",
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: 350,
    },
  ]

  return (
    <div className="px-6 py-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Book Store
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <Bookcarditems
            key={book.id}
            image={book.image}
            title={book.title}
            author={book.author}
            price={book.price}
          />
        ))}
      </div>
    </div>
  )
}

export default BookCard