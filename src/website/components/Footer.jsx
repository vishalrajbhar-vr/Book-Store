import React from 'react'

function Footer() {
  return (
    <div className="bg-gray-900 text-white px-6 py-10 mt-10">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* LEFT */}
        <div>
          <h2 className="text-xl font-bold mb-3">📚 BookStore</h2>
          <p className="text-gray-400">
            Best place to buy and explore books online.
          </p>
        </div>

        {/* CENTER */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">Shop</li>
            <li className="hover:text-yellow-400 cursor-pointer">Cart</li>
            <li className="hover:text-yellow-400 cursor-pointer">Login</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-gray-400">📧 support@bookstore.com</p>
          <p className="text-gray-400">📞 +91 9876543210</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © 2026 BookStore. All rights reserved.
      </div>

    </div>
  )
}

export default Footer