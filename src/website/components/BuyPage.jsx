import React from "react";
import { FaGoogle, FaApple, FaFacebook, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

function BuyPage() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Top Navbar */}
      
      <div className="bg-zinc-900 text-white px-8 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
         <Link
          to="/"
          className="text-xl font-bold hover:text-yellow-400 transition"
        >
          📚 BookStore
        </Link>

        <div className="flex gap-4">
          <button className="bg-zinc-800 px-4 py-2 rounded-md hover:bg-zinc-700">
            Create an Envato Account
          </button>
          <button className="bg-zinc-800 px-4 py-2 rounded-md hover:bg-zinc-700">
            Sign In
          </button>
        </div>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-8">

        {/* Left Side Form */}
        <div className="md:col-span-2 bg-white rounded-md shadow p-6">
          <div className="flex flex-col gap-4 justify-between items-start border-b pb-4 mb-6 md:flex-row md:items-center">
            <h2 className="text-4xl font-bold text-gray-700">Create Account</h2>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <span className="text-gray-500">Already have an account?</span>
              <button className="bg-gray-500 text-white px-4 py-2 rounded-md w-full sm:w-auto">
                Sign In
              </button>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="space-y-4">

            <button className="w-full border py-4 rounded-md flex justify-center items-center gap-3 text-xl font-semibold hover:bg-gray-50">
              <FaGoogle className="text-red-500" />
              Continue with Google
            </button>

            <button className="w-full border py-4 rounded-md flex justify-center items-center gap-3 text-xl font-semibold hover:bg-gray-50">
              <FaApple />
              Continue with Apple
            </button>

            <button className="w-full border py-4 rounded-md flex justify-center items-center gap-3 text-xl font-semibold hover:bg-gray-50">
              <FaFacebook className="text-blue-600" />
              Continue with Facebook
            </button>

            <button className="w-full border py-4 rounded-md flex justify-center items-center gap-3 text-xl font-semibold hover:bg-gray-50">
              <FaEnvelope />
              Continue with Email
            </button>

          </div>

          {/* Checkbox */}
          <div className="mt-6 border-t pt-6">
            <label className="flex items-start gap-3">
              <input type="checkbox" checked readOnly className="mt-1 w-5 h-5" />
              <div>
                <p className="font-semibold text-lg">
                  Yes to creative inspo in your inbox.
                </p>
                <p className="text-gray-500">
                  Fresh tutorials, trends, tools and updates.
                </p>
              </div>
            </label>
          </div>

          {/* Terms */}
          <p className="text-gray-500 mt-6 border-t pt-6">
            By continuing, you confirm you are 18 or over and agree to our
            Privacy Policy and Terms of Use.
          </p>

          {/* Bottom Button */}
          <div className="mt-8 flex justify-end">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700">
              Create account & continue
            </button>
          </div>
        </div>

        {/* Right Side Summary */}
        <div className="bg-white rounded-md shadow p-6 h-fit">
          <h2 className="text-3xl font-bold text-gray-700 border-b pb-4">
            Order Summary
          </h2>

          <div className="space-y-4 mt-4 text-lg">
            <div className="flex justify-between">
              <span>Books Store HTML</span>
              <span className="text-indigo-600">$11.00</span>
            </div>

            <div className="flex justify-between">
              <span>Total Discounts:</span>
              <span className="text-indigo-600">$6.00</span>
            </div>

            <div className="flex justify-between">
              <span>Handling Fee:</span>
              <span>$0.00</span>
            </div>
          </div>

          <div className="border-t mt-6 pt-4 flex justify-between text-2xl font-bold">
            <span>Total:</span>
            <span>US$ 11.00</span>
          </div>

          <div className="mt-8 text-gray-400 flex items-center gap-2 text-lg">
            <FaLock />
            Secure checkout
          </div>
        </div>

      </div>
    </div>
  );
}

export default BuyPage;