import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import HomeChildPage1 from '../HomeChildPage1'

function BlogImage() {
  return (
    <>
      <Navbar />
      <HomeChildPage1 />

      <div className="max-w-7xl mx-auto px-4 py-8 font-sans">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto py-6 px-4 text-sm text-gray-600">
          <Link to="/homepage1" className="hover:underline">
            Home
          </Link>{" "}
          &gt; <span className="text-black font-semibold">Blog Details</span>
        </div>
        {/* Main Blog Content */}
        <article>
          <div className="mb-8">
            <img
              src="https://htmldemo.net/pustok/pustok/image/others/blog-img-big-1.jpg"
              alt="Featured"
              className="w-full h-auto"
            />
          </div>

          <h1 className="text-3xl font-normal text-gray-800 mb-4">
            How BLOG TITLE Made Me A Better Salesperson
          </h1>

          <div className="flex gap-4 text-gray-400 text-xs mb-6">
            <span>👤 Posted by : admin</span>
            <span>📅 On : March 10, 2015</span>
          </div>

          <div className="text-gray-600 text-sm leading-relaxed space-y-6">
            <p>Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex...</p>

            <blockquote className="border-l-4 border-[blue] bg-gray-50 p-8 italic text-gray-500 text-center">
              "Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur..."
            </blockquote>

            <p>Aenean tempor eros, vitae sollicitudin velit. Etiam varius enim nec quam tempor...</p>
          </div>

          {/* Tags Metadata */}
          <div className="mt-10 py-3 border-t border-b border-gray-100 text-[13px] text-indigo-600">
            3 comments / TAGS: fashion, t-shirt, white
          </div>

          {/* Share Section */}
          <div className="mt-8 text-center border-b pb-8">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4">Share Now</p>
            <div className="flex justify-center gap-6 text-gray-400">
              <span>f</span> <span>t</span> <span>p</span> <span>g+</span> <span>in</span>
            </div>
          </div>
        </article>

        {/* --- Comments Section --- */}
        <section className="mt-12">
          <h3 className="text-lg font-bold text-gray-700 uppercase mb-6">3 Comments</h3>

          <div className="space-y-4">
            {[
              { name: 'Author', date: 'October 8, 2014 at 12:38 pm', text: 'Amie No Paradis' },
              { name: 'Jash', date: 'January 19, 2018 at 5:00 am', text: 'just a nice post' },
              { name: 'Dealer', date: 'August 11, 2021 at 5:00 am', text: 'Awesome Post' }
            ].map((comment, index) => (
              <div key={index} className="border border-gray-200 p-6 flex gap-4 relative">
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center text-[blue] font-bold text-2xl">H</div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-bold text-gray-800">{comment.name}</h4>
                      <p className="text-[10px] text-gray-400 italic mb-2">{comment.date}</p>
                    </div>
                    <button className="text-[10px] font-bold text-[blue] border border-[blue] px-3 py-1 rounded hover:bg-[blue] hover:text-white transition-colors">REPLY</button>
                  </div>
                  <p className="text-sm text-gray-500 italic">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Reply Form --- */}
        <section className="mt-12">
          <h3 className="text-lg font-bold text-gray-700 uppercase mb-2">Leave a Reply</h3>
          <p className="text-xs text-gray-400 mb-6">Your email address will not be published. Required fields are marked *</p>

          <form className="space-y-4">
            <textarea
              placeholder="Comment"
              className="w-full border border-gray-200 p-4 h-48 text-sm outline-none focus:border-[blue]"
            ></textarea>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input type="text" placeholder="Name *" className="border border-gray-200 p-3 text-sm outline-none focus:border-[blue]" />
              <input type="email" placeholder="Email *" className="border border-gray-200 p-3 text-sm outline-none focus:border-[blue]" />
              <input type="text" placeholder="Website" className="border border-gray-200 p-3 text-sm outline-none focus:border-[blue]" />
            </div>

            <button className="bg-[#333] text-white px-8 py-3 text-xs font-bold uppercase hover:bg-[blue] transition-colors">
              Post Comment
            </button>
          </form>
        </section>
      </div>


      <Footer />
    </>
  )
}

export default BlogImage