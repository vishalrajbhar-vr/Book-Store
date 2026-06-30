import React from "react";
import Footer from "../../components/Footer";
import HomeChildPage1 from "../HomeChildPage1";

function Checkout() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* 🔹 Header */}
      <HomeChildPage1 />

      {/* 🔹 Page Content */}
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Title */}
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        {/* Login + Coupon */}
        <div className="border border-green-500 p-4 mb-4 bg-white text-sm">
          Returning customer? Click here to login
        </div>

        <div className="border border-green-500 p-4 mb-8 bg-white text-sm">
          Have a coupon? Click here to enter your code
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* 🔸 Billing Address */}
          <div className="bg-white p-6 shadow">
            <h2 className="text-xl font-semibold mb-4">Billing Address</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input placeholder="First Name" className="border p-2" />
              <input placeholder="Last Name" className="border p-2" />
            </div>

            <input placeholder="Company Name" className="border p-2 w-full mt-4" />

            <select className="border p-2 w-full mt-4">
              <option>India</option>
              <option>USA</option>
            </select>

            <input placeholder="Email Address" className="border p-2 w-full mt-4" />
            <input placeholder="Phone" className="border p-2 w-full mt-4" />

            <input placeholder="Address Line 1" className="border p-2 w-full mt-4" />
            <input placeholder="Address Line 2" className="border p-2 w-full mt-4" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <input placeholder="Town / City" className="border p-2" />
              <input placeholder="State" className="border p-2" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <input placeholder="Zip Code" className="border p-2" />
              <input placeholder="Country" className="border p-2" />
            </div>

            <textarea
              placeholder="Order notes..."
              className="border p-2 w-full mt-4"
            ></textarea>
          </div>

          {/* 🔸 Your Order */}
          <div className="bg-white p-6 shadow">
            <h2 className="text-xl font-semibold mb-4">Your Order</h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Product</span>
                <span>Total</span>
              </div>

              <div className="flex justify-between">
                <span>Book 1 × 1</span>
                <span>$50.00</span>
              </div>

              <div className="flex justify-between">
                <span>Book 2 × 1</span>
                <span>$54.00</span>
              </div>

              <hr />

              <div className="flex justify-between">
                <span>Sub Total</span>
                <span>$104.00</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="flex justify-between font-bold">
                <span>Grand Total</span>
                <span>$104.00</span>
              </div>
            </div>

            {/* Payment */}
            <div className="mt-6 text-sm">
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" /> Direct Bank Transfer
              </label>

              <label className="flex items-center gap-2 mt-2">
                <input type="radio" name="payment" /> Cash on Delivery
              </label>
            </div>

            <button className="bg-green-600 text-white w-full py-3 mt-6 hover:bg-green-700">
              PLACE ORDER
            </button>
          </div>

        </div>
      </div>

      {/* 🔻 Footer (BOTTOM) */}
      <Footer />

    </div>
  );
}

export default Checkout;