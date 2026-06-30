import React, { useEffect, useState } from "react";
import { Hand } from "lucide-react";
import { TbGridDots } from "react-icons/tb";
import { IoReorderThreeOutline } from "react-icons/io5";
import { PiDotsSixBold } from "react-icons/pi";
import { IoStarSharp } from "react-icons/io5";


function CategoryShowcase() {
    const [view, setView] = useState("3");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeDot, setActiveDot] = useState(0);

    const books = [
        {
            id: 1,
            discription: "Apple",
            discriptiontitle: "Apple iphone se 16gb featch unlock",
            title: "Pieces of Light",
            price: "$104",
            image:
                "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
        },
        {
            id: 2,
            discription: "Canon",
            discriptiontitle: "blending magic with modern sensibility.",
            title: "The Dress and the Girl",
            price: "$98",
            image:
                "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
        },
        {
            id: 3,
            discription: "Apple",
            discriptiontitle: "lets you find and read ebooks all in one place.",
            title: "Wounded",
            price: "$602",
            image:
                "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400",
        },
        {
            id: 4,
            discription: "Canon",
            discriptiontitle: " look for canon Books in the App Store.",
            title: "Hidden Pages",
            price: "$120",
            image:
                "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400",
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveDot((prev) => (prev === 2 ? 0 : prev + 1));

            setView((prev) =>
                prev === "3" ? "4" : prev === "4" ? "list" : "3"
            );

            setCurrentIndex((prev) =>
                prev === books.length - 1 ? 0 : prev + 1
            );
        }, 2000);

        return () => clearInterval(timer);
    }, []);

    const visibleBooks =
        view === "3"
            ? books.slice(0, 3)
            : view === "4"
                ? books.slice(0, 4)
                : [books[currentIndex]];

    return (
        <section className="w-full min-h-screen bg-zinc-100 px-8 py-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left */}
                <div>
                    <h1 className="text-5xl font-bold mb-8">Category Custom View</h1>

                    <p className="text-xl text-zinc-600 leading-9 mb-12">
                        You Choose view mode in category page. e.g. Grid View with
                        3, 4 or 5 columns and List View.
                    </p>

                    <button className="border-2 border-black px-10 py-4 rounded-md">
                        CHECK NOW
                    </button>
                </div>

                {/* Right */}
                <div className="bg-white rounded-xl shadow-xl p-5">

                    {/* Top Bar */}
                    <div className="bg-zinc-100 rounded-full px-4 py-3 flex items-center gap-3">
                        <div className="flex gap-2">
                            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        </div>

                        <div className="flex-1 h-2 bg-zinc-300 rounded-full ml-3"></div>
                    </div>
                    <p className="mb-3 text-sm">Product Compair</p>
                    {/* Icons */}
                    <div className="relative flex items-center justify-between border border-blue-100 p-2 rounded-lg mb-8">

                        <div className="flex gap-6 relative items-center">

                            {/* 3 Dot Icon */}

                            <div className="w-5 h-5">
                                <TbGridDots />
                            </div>

                            {/* 4 Dot Icon */}
                            <div className="w-5 h-5">
                                <PiDotsSixBold />
                            </div>

                            {/* 3 Line Icon */}
                            <div className="flex  w-5 h-5">
                                <IoReorderThreeOutline />
                            </div>

                            {/* Moving Hand */}
                            <Hand
                                className={`absolute top-4 w-4 h-4 transition-all duration-100 ${activeDot === 0
                                    ? "left-0"
                                    : activeDot === 1
                                        ? "left-[48px]"
                                        : "left-[96px]"
                                    }`}
                            />
                        </div>
                        <p className="text-sm text-zinc-500">showing 1 to 9 of 10</p>

                        <p className="text-sm text-zinc-500">show: 9</p>
                        <p className="text-sm text-zinc-500">short by: default</p>
                    </div>

                    {/* 3 Grid */}
                    {view === "3" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {visibleBooks.map((book) => (
                                <div key={book.id} className="text-center">
                                    <h3 className="mb-2 text-sm font-semibold">{book.discription}</h3>
                                    <h3 className="mb-2 text-[12px] ">{book.discriptiontitle}</h3>
                                    <img
                                        src={book.image}
                                        alt=""
                                        className="w-full h-52 object-cover rounded-lg"
                                    />
                                    <h3 className="mt-2 text-sm font-semibold">{book.title}</h3>
                                    <p className="text-green-600 font-bold">{book.price}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* 4 Grid */}
                    {view === "4" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {visibleBooks.map((book) => (
                                <div key={book.id} className="text-center">
                                    <h3 className="mb-2 text-sm font-semibold">{book.discription}</h3>
                                    <h3 className="mb-2 text-[12px] ">{book.discriptiontitle}</h3>
                                    <img
                                        src={book.image}
                                        alt=""
                                        className="w-full h-40 object-cover rounded-lg"
                                    />
                                    <h3 className="mt-2 text-xs font-semibold">{book.title}</h3>
                                    <p className="text-green-600 text-sm font-bold">
                                        {book.price}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* List */}
                    {view === "list" && (
                        <div>
                            {visibleBooks.map((book) => (
                                <div
                                    key={book.id}
                                    className="flex flex-col sm:flex-row items-center gap-4 border-b pb-4"
                                >
                                    <img
                                        src={book.image}
                                        alt=""
                                        className="w-24 h-28 object-cover rounded-md"
                                    />
                                    <div className="ml-5">

                                        <h3 className="mb-2 text-sm font-semibold">{book.discription}</h3>
                                        <h3 className="mb-2 text-sm ">A built-in Apple app that lets you find and read ebooks all in one place.
                                            You can browse curated collections and top ebooks and even get personalised recommendations.
                                            If you can't find the app on your device,</h3>
                                        <p className="text-green-600 font-bold mb-2">{book.price}</p>
                                        <h3 className=" flex item-center font-semibold mb-2"><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></h3>
                                        <button className=" border border-black-100 p-1">Add to Cart</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default CategoryShowcase;