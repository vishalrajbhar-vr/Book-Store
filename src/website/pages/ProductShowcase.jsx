// src/pages/ProductShowcase.jsx
import React, { useEffect, useState } from "react";

function ProductShowcase() {
    const products = [
        {
            id: 1,
            image:
                "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800",
            thumb:
                "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200",
            color: "bg-pink-200",
        },
        {
            id: 2,
            image:
                "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800",
            thumb:
                "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200",
            color: "bg-gray-100",
        },
        {
            id: 3,
            image:
                "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800",
            thumb:
                "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=200",
            color: "bg-yellow-400",
        },
        {
            id: 4,
            image:
                "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800",
            thumb:
                "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=200",
            color: "bg-slate-700",
        },
    ];

    const [active, setActive] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % products.length);
        }, 2500);

        return () => clearInterval(timer);
    }, [products.length]);

    const changeSlide = (index) => {
        setActive(index);
    };

    return (
        <div className="bg-[#f5f5f5] min-h-screen px-4 py-16 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mx-auto max-w-7xl">

                {/* LEFT SIDE */}
                <div className="bg-white shadow-xl w-full rounded-2xl overflow-hidden">

                    <div className="flex items-center gap-2 bg-zinc-200 p-2 rounded-t-2xl">

                        {/* Left Dots */}
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>

                        {/* Search Bar */}
                        <div className="flex-1 bg-white rounded-full h-4 ml-4 border border-gray-200"></div>

                    </div>

                    <div className="bg-white shadow-xl w-full p-8">
                        <p className="text-sm text-gray-500 mb-6">
                            Home {">"} JBL Flip 3 Splashproof Portable Bluetooth
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                            {/* Big Image */}
                            <div>
                                <img
                                    src={products[active].image}
                                    alt="product"
                                    className="w-full h-[320px] md:h-[450px] object-cover rounded-3xl"
                                />

                                {/* Bottom Thumbnails */}
                                <div className="flex gap-3 mt-5">
                                    {products.map((item, index) => (
                                        <img
                                            key={item.id}
                                            src={item.thumb}
                                            onClick={() => changeSlide(index)}
                                            className={`w-15 h-20 object-cover rounded cursor-pointer border-2 ${active === index
                                                ? "border-green-500"
                                                : "border-gray-300"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Product Text LEFT SIDE */}
                            <div>
                                <p className="text-sm text-gray-500 mb-2">
                                    Tags: Cartier, Citizen
                                </p>

                                <h2 className="text-sm font-bold text-gray-800 leading-snug">
                                    JBL Flip 3 Splashproof Portable Bluetooth
                                </h2>

                                <div className="space-y-1 text-[12px] text-gray-600 mt-3">
                                    <p>Ex Tax: $500.00</p>
                                    <p>Brands: Apple</p>
                                    <p>Product Code: model1</p>
                                    <p>Reward Points: 600</p>
                                    <p>Availability: In Stock</p>
                                </div>

                                <h3 className="text-sm font-bold text-green-600 mt-3">
                                    $602.00
                                </h3>

                                <p className="text-yellow-500 text-sm mt-2">★★★★★</p>

                                <p className="text-gray-500 text-[10px] leading-4 ">
                                    Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.16GHz.
                                </p>

                                <h4 className="font-semibold text-sm mt-2">
                                    Available Options
                                </h4>

                                <p className="text-sm mt-2 mb-3 text-gray-600">Color</p>

                                {/* Color Boxes */}
                                <div className="flex gap-3 mb-6">
                                    {products.map((item, index) => (
                                        <div
                                            key={item.id}
                                            onClick={() => changeSlide(index)}
                                            className={`w-9 h-9 cursor-pointer border-2 ${item.color
                                                } ${active === index
                                                    ? "border-black scale-110"
                                                    : "border-gray-300"
                                                }`}
                                        ></div>
                                    ))}
                                </div>

                                <div className="flex items-center gap-2">
                                    <p>Qty</p><button className="h-7 w-7 bg-zinc-200 rounded-full">1</button>

                                    <button className="w-auto border border-green-500 px-6 py-2 font-semibold text-sm inline-block">
                                        + Add To Cart
                                    </button>
                                </div>

                                <div className="flex flex-col gap-3 mt-2 text-gray-400 text-xs sm:flex-row sm:flex-wrap">

                                    <button className="flex items-center gap-1">
                                        ♡<span>Add To Wish List</span> ⚖<span>Compare This Product</span>
                                    </button>
                                </div>

                                <div className="flex gap-2 mt-2">
                                    {/* Like */}
                                    <button className="flex items-center gap-1 bg-blue-700 text-white text-[6px] px-2 py-1 rounded">
                                        👍
                                        <span>Like 0</span>
                                    </button>

                                    {/* Tweet */}
                                    <button className="flex items-center gap-1 bg-sky-500 text-white text-[6px] px-2 py-1 rounded">
                                        🐦
                                        <span>Tweet</span>
                                    </button>

                                    {/* Share */}
                                    <button className="flex items-center gap-1 bg-orange-500 text-white text-[6px] px-2 py-1 rounded">
                                        📤
                                        <span>Share</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="pl-0 md:pl-8 pt-10 md:pt-0">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                        Included Color Swatches
                    </h1>

                    <p className="text-2xl text-gray-600 mt-8 leading-relaxed max-w-xl">
                        You can swatch product attributes with color, size or any
                        attributes
                    </p>

                    <button className="mt-16 border-2 border-black px-14 py-5 text-xl hover:bg-black hover:text-white duration-300">
                        CHECK NOW
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductShowcase;