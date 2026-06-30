import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import HomeChildPage1 from '../HomeChildPage1'

function BlogVideo() {
  return (
    <>
      <Navbar />
      <HomeChildPage1 />
      <div className="max-w-7xl mx-auto px-4 py-8 font-sans">
        {/* Breadcrumb style text at the top left */}
        <div className="text-xs text-gray-500 mb-6">Home  Blog Details</div>

        <div className="flex flex-col md:flex-row gap-8">

          {/* --- Main Blog Content (Left Column) --- */}
          <main className="w-full md:w-2/3 lg:w-3/4">
            {/* Video Header - Matches Screenshot 2026-05-04 122801.png */}
            <div className="aspect-video mb-6">
              <iframe
                className="w-full h-full rounded shadow-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>

            <h1 className="text-3xl font-semibold text-gray-800 mb-3">
              How BLOG TITLE Made Me A Better Salesperson
            </h1>

            <div className="flex gap-4 text-gray-400 text-sm mb-6 border-b pb-4">
              <span>👤 Posted by : admin</span>
              <span>📅 On : March 10, 2015</span>
            </div>

            <article className="text-gray-600 leading-relaxed space-y-6">
              <p>
                Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus.
              </p>

              {/* Styled Blockquote as seen in Screenshot 2026-05-04 122801.png */}
              <blockquote className="border-l-4 border-indigo-500 bg-gray-50 p-6 italic text-gray-700">
                "Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur. In venenatis elit ac ultrices convallis. Duis est nisi, tincidunt ac urna sed, cursus blandit lectus."
              </blockquote>

              <p>
                Aenean tempor eros, vitae sollicitudin velit. Etiam varius enim nec quam tempor, sed efficitur ex ultrices. Phasellus pretium est vel dui vestibulum condimentum.
              </p>
            </article>

            {/* Post Footer */}
            <div className="mt-10 py-4 border-t border-b border-gray-100 flex justify-between items-center text-sm">
              <div className="text-indigo-600 font-medium">
                3 comments / TAGS: fashion, t-shirt, white
              </div>
            </div>

            {/* Social Share */}
            <div className="mt-8 text-center">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-4">Share Now</p>
              <div className="flex justify-center gap-6 text-gray-500">
                <span className="hover:text-blue-600 cursor-pointer text-sm">f</span>
                <span className="hover:text-blue-400 cursor-pointer text-sm">t</span>
                <span className="hover:text-red-500 cursor-pointer text-sm">p</span>
                <span className="hover:text-red-600 cursor-pointer text-sm">g+</span>
                <span className="hover:text-blue-700 cursor-pointer text-sm">in</span>
              </div>
            </div>
          </main>

          {/* --- Sidebar (Right Column) --- */}
          <aside className="w-full md:w-1/3 lg:w-1/4 space-y-8">
            {/* Search Widget */}
            <section>
              <h3 className="bg-[blue] text-white px-4 py-2 text-center font-bold text-sm uppercase">Search</h3>
              <div className="mt-4 flex border border-gray-200">
                <input type="text" placeholder="Search" className="w-full px-3 py-2 text-sm outline-none" />
                <button className="px-3 text-gray-400">🔍</button>
              </div>
            </section>

            {/* Archive Widget */}
            <section>
              <h3 className="bg-[blue] text-white px-4 py-2 text-center font-bold text-sm uppercase">Blog Archives</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-500 px-2">
                <li className="hover:text-indigo-600 cursor-pointer">• March 2015 (1)</li>
                <li className="hover:text-indigo-600 cursor-pointer">• December 2014 (3)</li>
                <li className="hover:text-indigo-600 cursor-pointer">• November 2014 (4)</li>
              </ul>
            </section>

            {/* Recent Posts */}
            <section>
              <h3 className="bg-[blue] text-white px-4 py-2 text-center font-bold text-sm uppercase">Recent Posts</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-500 px-2">
                <li className="border-b border-gray-100 pb-2 hover:text-indigo-600 cursor-pointer">• Blog image post</li>
                <li className="border-b border-gray-100 pb-2 hover:text-indigo-600 cursor-pointer">• Post with Gallery</li>
                <li className="border-b border-gray-100 pb-2 hover:text-indigo-600 cursor-pointer">• Post with Video</li>
              </ul>
            </section>

            {/* Tags Widget */}
            <section>
              <h3 className="bg-[blue] text-white px-4 py-2 text-center font-bold text-sm uppercase">Tags</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Chilled', 'Dark', 'Euro', 'Fashion', 'Food', 'Hardware', 'Mac', 'T-Shirt'].map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-500 px-2 py-1 text-[10px] uppercase hover:bg-indigo-600 hover:text-white cursor-pointer transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Promo Ad - Matches Screenshot 2026-05-04 122801.png */}
            <div className="relative group overflow-hidden rounded">
              <img
                src="https://via.placeholder.com/300x250/333/fff?text=Sale+Background"
                alt="Sale Ad"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white p-4 text-center">
                <p className="text-xs tracking-widest mb-1">THE BEST</p>
                <h2 className="text-5xl font-black italic">SALE</h2>
                <p className="text-4xl font-light">50<span className="text-xl">% OFF</span></p>
              </div>
            </div>
          </aside>
        </div>

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

      <div className="mt-12">
        <Footer />
      </div>
    </>

  )
}

export default BlogVideo