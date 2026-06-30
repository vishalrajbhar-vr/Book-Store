import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HomeChildPage1 from '../HomeChildPage1'
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import LastPageU from '../LastPageU';

function Contact() {
    return (
        <>
            <Navbar />
            <HomeChildPage1 />


            <div className="bg-gray-100 min-h-screen">

                {/* Breadcrumb */}
               <div className="max-w-6xl mx-auto py-6 px-4 text-sm text-gray-600">
  <Link to="/homepage1" className="hover:text-blue-600">
    Home
  </Link>{" "}
  &gt; <span className="text-black font-semibold">Contact</span>
</div>

                {/* Map */}
                <div className="max-w-6xl mx-auto px-4">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps?q=Delhi&output=embed"
                        className="w-full h-[350px] rounded-md border"
                        loading="lazy"
                    ></iframe>
                </div>

                {/* Content */}
                <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Left Side - Details */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-3">
                            Location & Details
                        </h2>

                        <p className="text-gray-600 mb-6">
                            It is a long established fact that readable content of a page
                            will be distracted by layout.
                        </p>

                        <div className="space-y-4 text-gray-700">

                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="mt-1 text-blue-600" />
                                <p>
                                    Address: 1234 - Bandit Tringi Aliquam Vitae, New Delhi, India
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-blue-600" />
                                <p>Email: support@example.com</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaPhone className="text-blue-600" />
                                <p>Phone: (800) 0123 456 789</p>
                            </div>

                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">
                            Send Us a Message
                        </h2>

                        <form className="space-y-4">

                            <div>
                                <label className="block text-sm mb-1">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    className="w-full border px-3 py-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm mb-1">
                                    Your Email *
                                </label>
                                <input
                                    type="email"
                                    className="w-full border px-3 py-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm mb-1">
                                    Your Phone *
                                </label>
                                <input
                                    type="text"
                                    className="w-full border px-3 py-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm mb-1">
                                    Your Message
                                </label>
                                <textarea
                                    rows="4"
                                    className="w-full border px-3 py-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
                            >
                                SEND
                            </button>

                        </form>
                    </div>

                </div>
            </div>
            
            <LastPageU/>
            <Footer />
            
        </>
    )
}

export default Contact