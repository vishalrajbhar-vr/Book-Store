import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import HomeChildPage1 from '../HomeChildPage1'

function BlogDetails() {
  return (
    <>
    <Navbar/>
    <HomeChildPage1/>
    <div className="max-w-7xl mx-auto px-4 py-8 font-sans">
      {/* Breadcrumb - Matches image_b56b9d.png */}
      <div className="text-xs text-gray-500 mb-8">Home    Blog Details</div>

      <div className="flex flex-col md:flex-row gap-10">
        
        {/* --- Sidebar Section (Left Side) --- */}
        <aside className="w-full md:w-1/4 space-y-10 order-2 md:order-1">
          {/* Search */}
          <section>
            <h3 className="bg-[blue] text-white px-4 py-3 text-center font-bold text-sm">Search</h3>
            <div className="mt-4 flex border border-gray-200 items-center px-2">
              <input type="text" placeholder="Search" className="w-full py-2 text-sm outline-none" />
              <span className="text-gray-400 text-sm">🔍</span>
            </div>
          </section>

          {/* Blog Archives */}
          <section>
            <h3 className="bg-[blue] text-white px-4 py-3 text-center font-bold text-sm">BLOG ARCHIVES</h3>
            <ul className="mt-4 space-y-4 text-sm text-gray-600">
              <li className="hover:text-indigo-600 cursor-pointer border-l-2 border-transparent hover:border-indigo-600 pl-2 transition-all">• March 2015 (1)</li>
              <li className="hover:text-indigo-600 cursor-pointer border-l-2 border-transparent hover:border-indigo-600 pl-2 transition-all">• December 2014 (3)</li>
              <li className="hover:text-indigo-600 cursor-pointer border-l-2 border-transparent hover:border-indigo-600 pl-2 transition-all">• November 2014 (4)</li>
              <li className="hover:text-indigo-600 cursor-pointer border-l-2 border-transparent hover:border-indigo-600 pl-2 transition-all">• September 2014 (1)</li>
              <li className="hover:text-indigo-600 cursor-pointer border-l-2 border-transparent hover:border-indigo-600 pl-2 transition-all">• August 2014 (1)</li>
            </ul>
          </section>

          {/* Recent Posts */}
          <section>
            <h3 className="bg-[blue] text-white px-4 py-3 text-center font-bold text-sm">RECENT POSTS</h3>
            <ul className="mt-4 space-y-4 text-sm text-gray-600">
              <li className="border-b border-gray-100 pb-2 hover:text-indigo-600 cursor-pointer">• Blog image post</li>
              <li className="border-b border-gray-100 pb-2 hover:text-indigo-600 cursor-pointer">• Post with Gallery</li>
              <li className="border-b border-gray-100 pb-2 hover:text-indigo-600 cursor-pointer">• Post with Audio</li>
              <li className="border-b border-gray-100 pb-2 hover:text-indigo-600 cursor-pointer">• Post with Video</li>
              <li className="border-b border-gray-100 pb-2 hover:text-indigo-600 cursor-pointer">• Maecenas ultricies</li>
            </ul>
          </section>

          {/* Tags */}
          <section>
            <h3 className="bg-[blue] text-white px-4 py-3 text-center font-bold text-sm">Tags</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Chilled', 'Dark', 'Euro', 'Fashion', 'Food', 'Hardware', 'Hat', 'Hipster', 'Holidays', 'Light', 'Mac', 'Place', 'T-Shirt', 'Travel', 'Video-2', 'White'].map((tag) => (
                <span key={tag} className="bg-gray-100 text-gray-500 px-3 py-1 text-[11px] hover:bg-[blue] hover:text-white cursor-pointer transition-colors border border-gray-200">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Ad Banner - Matches image_b56b9d.png */}
          <div className="relative rounded overflow-hidden shadow-sm">
            <img 
              src="https://htmldemo.net/pustok/pustok/image/others/home-side-promo.jpg" 
              alt="50% Off Sale" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30">
               <span className="text-[10px] tracking-widest uppercase">The Best</span>
               <h4 className="text-5xl font-black italic">SALE</h4>
               <p className="text-3xl font-light">50<span className="text-lg">% OFF</span></p>
            </div>
          </div>
        </aside>

        {/* --- Main Content Section (Right Side) --- */}
        <main className="w-full md:w-3/4 order-1 md:order-2">
          {/* Main Blog Image */}
          <div className="mb-8">
            <img 
              src="https://htmldemo.net/pustok/pustok/image/others/blog-img-big-1.jpg" 
              alt="Featured Post" 
              className="w-full h-auto object-cover border border-gray-100"
            />
          </div>

          <h2 className="text-3xl font-normal text-gray-800 mb-4">
            How BLOG TITLE Made Me A Better Salesperson
          </h2>
          
          <div className="flex gap-6 text-gray-400 text-xs mb-8">
            <span>👤 Posted by : admin</span>
            <span className="text-gray-300">|</span>
            <span>📅 On : March 10, 2015</span>
          </div>

          <div className="text-gray-600 text-sm leading-relaxed space-y-6">
            <p>
              Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent ornare tortor ac ante egestas hendrerit. Aliquam et metus pharetra, bibendum massa nec, fermentum odio.
            </p>
            
            {/* Blockquote - Matches image_b56b9d.png style */}
            <blockquote className="border-l-4 border-[blue] bg-gray-50 p-8 italic text-gray-500 relative">
              "Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur. In venenatis elit ac ultrices convallis. Duis est nisi, tincidunt ac urna sed, cursus blandit lectus. In ullamcorper sit amet ligula ut eleifend."
            </blockquote>

            <p>
              Aenean tempor eros, vitae sollicitudin velit. Etiam varius enim nec quam tempor, sed efficitur ex ultrices. Phasellus pretium est vel dui vestibulum condimentum. Aenean nec suscipit nibh. Phasellus nec lacus id arcu facilisis elementum.
            </p>

            <p>
              Suspendisse turpis ipsum, tempus in nulla eu, posuere pharetra nibh. In dignissim vitae lorem non mollis. Praesent pretium tellus in tortor viverra condimentum. Nullam dignissim facilisis nisl, accumsan placerat justo ultricies vel.
            </p>
          </div>

          {/* Comments and Tags Footer */}
          <div className="mt-12 py-3 border-t border-gray-100 text-[13px]">
            <span className="text-indigo-600 font-medium">3 comments / TAGS: fashion, t-shirt, white</span>
          </div>

          {/* Social Share Icons */}
          <div className="mt-12 text-center">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4">Share Now</p>
            <div className="flex justify-center gap-6 text-gray-400">
              <span className="hover:text-blue-700 cursor-pointer text-xs">f</span>
              <span className="hover:text-blue-400 cursor-pointer text-xs">t</span>
              <span className="hover:text-red-500 cursor-pointer text-xs">p</span>
              <span className="hover:text-orange-500 cursor-pointer text-xs">g+</span>
              <span className="hover:text-blue-800 cursor-pointer text-xs">in</span>
            </div>
          </div>
        </main>

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

     <div className="mt-16">
        <Footer />
      </div>
    </>
  )
}

export default BlogDetails