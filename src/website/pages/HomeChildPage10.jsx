import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function HomeChildPage10() {
  const [showReview, setShowReview] = useState(false);

  return (
    <div className="bg-[#f5f5f5] p-10">

      <div className="max-w-7xl mx-auto">

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-16 border-b border-gray-300 pb-4">
          <button
            onClick={() => setShowReview(false)}
            className={`text-xl sm:text-2xl font-medium ${
              !showReview
                ? "text-black border-b-2 border-green-500"
                : "text-black"
            }`}
          >
            DESCRIPTION
          </button>

          <button
            onClick={() => setShowReview(true)}
            className={`text-3xl font-medium ${
              showReview
                ? "text-green-600 border-b-2 border-green-500"
                : "text-black"
            }`}
          >
            REVIEWS (1)
          </button>
        </div>

        {/* Same Single Div */}
        <div className="pt-12">

          {!showReview ? (

            <p className="text-[28px] leading-[55px] text-gray-800">
              Fashion has been creating well-designed collections since 2010.
              The brand offers feminine designs delivering stylish separates
              and statement dresses which have since evolved into a full
              ready-to-wear collection in which every item is a vital part
              of a woman's wardrobe. The result? Cool, easy, chic looks with
              youthful elegance and unmistakable signature style. All the
              beautiful pieces are made in Italy and manufactured with the
              greatest attention. Now Fashion extends to a range of
              accessories including shoes, hats, belts and more!
            </p>

          ) : (

            <div>

              <h2 className="text-3xl font-medium mb-8 uppercase">
                1 Review For Auctor Gravida Enim
              </h2>

              <div className="border border-gray-300 bg-white p-8 flex flex-col gap-6 mb-12 md:flex-row md:items-center">
                <div className="w-16 h-16 bg-green-500 text-white text-4xl font-bold flex items-center justify-center">
                  H
                </div>

                <div>
                  <div className="flex gap-1 text-yellow-400 text-xl mb-4">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar className="text-gray-300" />
                    <FaStar className="text-gray-300" />
                  </div>

                  <h3 className="text-2xl font-medium mb-2">
                    ADMIN - March 23, 2015
                  </h3>

                  <p className="text-xl text-gray-700">
                    Lorem et placerat vestibulum, metus nisi posuere nisl,
                    in accumsan elit odio quis mi.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-medium mb-8 uppercase">
                Add A Review
              </h2>

              <p className="text-2xl mb-4">Your Rating</p>

              <div className="flex gap-2 text-gray-300 text-3xl mb-8">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-2xl mb-4">Comment</p>

              <textarea
                rows="6"
                className="w-full border border-gray-300 p-4 text-xl outline-none"
              ></textarea>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default HomeChildPage10;