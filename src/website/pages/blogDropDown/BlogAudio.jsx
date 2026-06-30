import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import HomeChildPage1 from '../HomeChildPage1'

function BlogAudio() {
  return (

    <>
    <Navbar/>
    <HomeChildPage1/>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">

          {/* --- Main Content Section (Left) --- */}
          <main className="w-full md:w-3/4">
            {/* Featured Image */}
            <div className="mb-6">
              <img
                src="https://via.placeholder.com/800x450"
                alt="Blog Banner"
                className="w-full h-auto rounded"
              />
            </div>

            {/* Audio Player Placeholder (SoundCloud style) */}
            <div className="bg-gray-100 p-4 mb-6 border-l-4 border-orange-500">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white">▶</div>
                <div>
                  <p className="text-sm font-bold">Latest Tracks</p>
                  <p className="text-xs text-gray-500">SoundCloud</p>
                </div>
              </div>
            </div>

            {/* Blog Heading */}
            <h1 className="text-3xl font-bold mb-4">How BLOG TITLE Made Me A Better Salesperson</h1>

            {/* Meta Info */}
            <div className="flex gap-4 text-gray-500 text-sm mb-6">
              <span>👤 Posted by: admin</span>
              <span>📅 On: March 10, 2015</span>
            </div>

            {/* Blog Body */}
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex...</p>

              {/* Blockquote */}
              <blockquote className="border-l-4 border-indigo-500 italic pl-4 my-6 text-gray-600">
                "Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur..."
              </blockquote>

              <p>Aenean tempor eros, vitae sollicitudin velit. Etiam varius enim nec quam tempor...</p>
            </div>

            {/* Tags/Comments Footer */}
            <div className="mt-8 pt-4 border-t border-gray-200 text-indigo-600 text-sm">
              3 comments / TAGS: fashion, t-shirt, white
            </div>

            {/* Share Section */}
            <div className="mt-8 text-center border-t pt-4">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Share Now</p>
              <div className="flex justify-center gap-4">
                {/* Add social icons here */}
                <span>f</span> <span>t</span> <span>p</span> <span>g+</span>
              </div>
            </div>
          </main>

          {/* --- Sidebar Section (Right) --- */}
          <aside className="w-full md:w-1/4">
            {/* Search Box */}
            <div className="mb-8">
              <h3 className="bg-indigo-600 text-white px-4 py-2 font-bold mb-2">Search</h3>
              <input type="text" placeholder="Search..." className="w-full border p-2" />
            </div>

            {/* Blog Archives */}
            <div className="mb-8">
              <h3 className="bg-indigo-600 text-white px-4 py-2 font-bold mb-2">Blog Archives</h3>
              <ul className="text-sm space-y-2 text-gray-600">
                <li>• March 2015 (1)</li>
                <li>• December 2014 (3)</li>
                <li>• November 2014 (4)</li>
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="mb-8">
              <h3 className="bg-indigo-600 text-white px-4 py-2 font-bold mb-2">Recent Posts</h3>
              <ul className="text-sm space-y-2 text-gray-600">
                <li className="border-b pb-1">Blog image post</li>
                <li className="border-b pb-1">Post with Gallery</li>
                <li className="border-b pb-1">Post with Audio</li>
              </ul>
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="bg-indigo-600 text-white px-4 py-2 font-bold mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['Chilled', 'Dark', 'Euro', 'Fashion', 'Food'].map(tag => (
                  <span key={tag} className="bg-gray-100 px-2 py-1 text-xs">{tag}</span>
                ))}
              </div>
            </div>

            {/* Promo Banner */}
            <div className="relative">
              <img src="https://via.placeholder.com/300x250" alt="Sale" className="w-full" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-20">
                <p className="text-xl font-bold">50% OFF</p>
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
      <Footer />
    </>

  )
}

export default BlogAudio