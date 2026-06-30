import React from "react";
import { Headphones, ChevronDown, ShoppingCart, Menu } from "lucide-react";

function MultipalOption() {
    return (
        <section className="w-full min-h-screen bg-[#f5f5f5] py-20 px-6">
            {/* Heading */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h1 className="text-5xl font-semibold text-zinc-800 mb-5">
                    Multiple Header Options
                </h1>

                <p className="text-xl text-zinc-600">
                    Choose header type that will fit your website needs and style as you
                    wish
                </p>
            </div>

            {/* Browser Mockup */}
            <div className="max-w-7xl mx-auto bg-white rounded-md shadow-lg overflow-hidden">
                {/* Browser Top */}
                <div className="bg-zinc-100 px-4 py-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-zinc-300 rounded-full"></span>
                    <span className="w-2 h-2 bg-zinc-300 rounded-full"></span>
                    <span className="w-2 h-2 bg-zinc-300 rounded-full"></span>

                    <div className="ml-4 flex-1 h-3 bg-zinc-200 rounded-full"></div>
                </div>

                {/* Header Design */}
                <div className="px-10 py-10">
                    {/* Top Nav */}
                    <div className="flex flex-wrap justify-between items-center gap-6 mb-8">
                        {/* Logo */}
                        <h2 className="text-5xl font-bold text-indigo-600 tracking-tight">
                            Pustok<span className="text-zinc-700">.</span>
                        </h2>

                        {/* Support */}
                        <div className="flex items-center gap-3">
                            <Headphones className="text-indigo-600 w-9 h-9" />
                            <div>
                                <p className="text-sm text-zinc-500">Free Support 24/7</p>
                                <p className="font-semibold text-zinc-800">
                                    +01-202-555-0181
                                </p>
                            </div>
                        </div>

                        {/* Menu */}
                        <div className="flex gap-8 text-sm font-medium text-zinc-700">
                            <span className="flex items-center gap-1 cursor-pointer">
                                HOME <ChevronDown size={16} />
                            </span>

                            <span className="flex items-center gap-1 cursor-pointer">
                                SHOP <ChevronDown size={16} />
                            </span>

                            <span className="cursor-pointer">FEATURED</span>

                            <span className="flex items-center gap-1 cursor-pointer">
                                PAGE <ChevronDown size={16} />
                            </span>

                            <span className="cursor-pointer">BLOG</span>
                            <span className="cursor-pointer">CONTACT</span>
                        </div>
                    </div>

                    {/* Search Row */}
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        {/* Category */}
                        <div className="border border-zinc-300 h-14 px-5 flex items-center gap-3 w-full max-w-xs">
                            <Menu size={18} />
                            <span className="font-medium">All Departments</span>
                            <ChevronDown size={16} />
                        </div>

                        {/* Search */}
                        <div className="flex flex-1 min-w-0 w-full">
                            <input
                                type="text"
                                placeholder="I'm searching for..."
                                className="w-full border border-zinc-300 h-14 px-5 outline-none"
                            />

                            <button className="bg-indigo-600 hover:bg-lime-700 text-white px-10 font-semibold">
                                Search
                            </button>
                        </div>

                        {/* Login */}
                        <div className="text-sm leading-5">
                            <p className="font-semibold text-zinc-800">Log in</p>
                            <p className="text-zinc-500">or Register</p>
                        </div>

                        {/* Cart */}
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <ShoppingCart className="text-indigo-600 w-8 h-8" />
                                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                                    0
                                </span>
                            </div>

                            <div className="text-sm">
                                <p className="text-zinc-500">My Shopping Cart</p>
                                <p className="font-bold text-indigo-600">$0.00</p>
                            </div>

                            <ChevronDown size={16} />
                        </div>
                    </div>

                    {/* Bottom Shadow */}
                    <div className="w-full max-w-xs h-5 bg-zinc-200 blur-xl rounded-full mx-auto mt-10"></div>
                </div>
            </div>

            {/* Second Browser Preview */}
            <div className="max-w-7xl mx-auto bg-white rounded-md shadow-lg overflow-hidden">
                {/* Browser Top */}
                <div className="bg-zinc-100 px-4 py-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-zinc-300 rounded-full"></span>
                    <span className="w-2 h-2 bg-zinc-300 rounded-full"></span>
                    <span className="w-2 h-2 bg-zinc-300 rounded-full"></span>

                    <div className="ml-4 flex-1 h-3 bg-zinc-200 rounded-full"></div>
                </div>

                {/* Header Design */}
                <div className="px-10 py-10">
                    {/* Top Nav */}
                    <div className="flex flex-wrap justify-between items-center gap-6 mb-8">
                        {/* Logo */}
                        <h2 className="text-5xl font-bold text-indigo-600 tracking-tight">
                            Pustok<span className="text-zinc-700">.</span>
                        </h2>

                        {/* Support */}
                        <div className="flex items-center gap-3">
                            <Headphones className="text-indigo-600 w-9 h-9" />
                            <div>
                                <p className="text-sm text-zinc-500">Free Support 24/7</p>
                                <p className="font-semibold text-zinc-800">
                                    +01-202-555-0181
                                </p>
                            </div>
                        </div>

                        {/* Menu */}
                        <div className="flex gap-8 text-sm font-medium text-zinc-700">
                            <span className="flex items-center gap-1 cursor-pointer">
                                HOME <ChevronDown size={16} />
                            </span>

                            <span className="flex items-center gap-1 cursor-pointer">
                                SHOP <ChevronDown size={16} />
                            </span>

                            <span className="cursor-pointer">FEATURED</span>

                            <span className="flex items-center gap-1 cursor-pointer">
                                PAGE <ChevronDown size={16} />
                            </span>

                            <span className="cursor-pointer">BLOG</span>
                            <span className="cursor-pointer">CONTACT</span>
                        </div>
                    </div>

                    {/* Search Row */}
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        {/* Category */}
                        <div className="border border-zinc-300 h-14 px-5 flex items-center gap-3 w-full max-w-xs">
                            <Menu size={18} />
                            <span className="font-medium">All Departments</span>
                            <ChevronDown size={16} />
                        </div>

                        {/* Search */}
                        <div className="flex flex-1 min-w-0 w-full">
                            <input
                                type="text"
                                placeholder="I'm searching for..."
                                className="w-full border border-zinc-300 h-14 px-5 outline-none"
                            />

                            <button className="bg-indigo-600 hover:bg-lime-700 text-white px-10 font-semibold">
                                Search
                            </button>
                        </div>

                        {/* Login */}
                        <div className="text-sm leading-5">
                            <p className="font-semibold text-zinc-800">Log in</p>
                            <p className="text-zinc-500">or Register</p>
                        </div>

                        {/* Cart */}
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <ShoppingCart className="text-indigo-600 w-8 h-8" />
                                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                                    0
                                </span>
                            </div>

                            <div className="text-sm">
                                <p className="text-zinc-500">My Shopping Cart</p>
                                <p className="font-bold text-indigo-600">$0.00</p>
                            </div>

                            <ChevronDown size={16} />
                        </div>
                    </div>

                    {/* Bottom Shadow */}
                    <div className="w-full max-w-xs h-5 bg-zinc-200 blur-xl rounded-full mx-auto mt-10"></div>
                </div>

                {/* third browse preview */}
                <div className="max-w-7xl mx-auto bg-white rounded-md shadow-lg overflow-hidden">
                    {/* Browser Top */}
                    <div className="bg-zinc-100 px-4 py-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-zinc-300 rounded-full"></span>
                        <span className="w-2 h-2 bg-zinc-300 rounded-full"></span>
                        <span className="w-2 h-2 bg-zinc-300 rounded-full"></span>

                        <div className="ml-4 flex-1 h-3 bg-zinc-200 rounded-full"></div>
                    </div>

                    {/* Header Design */}
                    <div className="px-10 py-10">
                        {/* Top Nav */}
                        <div className="flex flex-wrap justify-between items-center gap-6 mb-8">
                            {/* Logo */}
                            <h2 className="text-5xl font-bold text-indigo-600 tracking-tight">
                                Pustok<span className="text-zinc-700">.</span>
                            </h2>

                            {/* Support */}
                            <div className="flex items-center gap-3">
                                <Headphones className="text-indigo-600 w-9 h-9" />
                                <div>
                                    <p className="text-sm text-zinc-500">Free Support 24/7</p>
                                    <p className="font-semibold text-zinc-800">
                                        +01-202-555-0181
                                    </p>
                                </div>
                            </div>

                            {/* Menu */}
                            <div className="flex gap-8 text-sm font-medium text-zinc-700">
                                <span className="flex items-center gap-1 cursor-pointer">
                                    HOME <ChevronDown size={16} />
                                </span>

                                <span className="flex items-center gap-1 cursor-pointer">
                                    SHOP <ChevronDown size={16} />
                                </span>

                                <span className="cursor-pointer">FEATURED</span>

                                <span className="flex items-center gap-1 cursor-pointer">
                                    PAGE <ChevronDown size={16} />
                                </span>

                                <span className="cursor-pointer">BLOG</span>
                                <span className="cursor-pointer">CONTACT</span>
                            </div>
                        </div>

                        {/* Search Row */}
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                            {/* Category */}
                            <div className="border border-zinc-300 h-14 px-5 flex items-center gap-3 w-full max-w-xs">
                                <Menu size={18} />
                                <span className="font-medium">All Departments</span>
                                <ChevronDown size={16} />
                            </div>

                            {/* Search */}
                            <div className="flex flex-1 min-w-0 w-full">
                                <input
                                    type="text"
                                    placeholder="I'm searching for..."
                                    className="w-full border border-zinc-300 h-14 px-5 outline-none"
                                />

                                <button className="bg-indigo-600 hover:bg-lime-700 text-white px-10 font-semibold">
                                    Search
                                </button>
                            </div>

                            {/* Login */}
                            <div className="text-sm leading-5">
                                <p className="font-semibold text-zinc-800">Log in</p>
                                <p className="text-zinc-500">or Register</p>
                            </div>

                            {/* Cart */}
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <ShoppingCart className="text-indigo-600 w-8 h-8" />
                                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                                        0
                                    </span>
                                </div>

                                <div className="text-sm">
                                    <p className="text-zinc-500">My Shopping Cart</p>
                                    <p className="font-bold text-indigo-600">$0.00</p>
                                </div>

                                <ChevronDown size={16} />
                            </div>
                        </div>

                        {/* Bottom Shadow */}
                        <div className="w-full max-w-xs h-5 bg-zinc-200 blur-xl rounded-full mx-auto mt-10"></div>
                    </div>
                </div>

                {/* forth browser preview */}
                <div className="max-w-7xl mx-auto bg-white rounded-md shadow-lg overflow-hidden">
                    {/* Browser Top */}
                    <div className="bg-zinc-100 px-4 py-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-zinc-300 rounded-full"></span>
                        <span className="w-2 h-2 bg-zinc-300 rounded-full"></span>
                        <span className="w-2 h-2 bg-zinc-300 rounded-full"></span>

                        <div className="ml-4 flex-1 h-3 bg-zinc-200 rounded-full"></div>
                    </div>

                    {/* Header Design */}
                    <div className="px-10 py-10">
                        {/* Top Nav */}
                        <div className="flex flex-wrap justify-between items-center gap-6 mb-8">
                            {/* Logo */}
                            <h2 className="text-5xl font-bold text-indigo-600 tracking-tight">
                                Pustok<span className="text-zinc-700">.</span>
                            </h2>

                            {/* Support */}
                            <div className="flex items-center gap-3">
                                <Headphones className="text-indigo-600 w-9 h-9" />
                                <div>
                                    <p className="text-sm text-zinc-500">Free Support 24/7</p>
                                    <p className="font-semibold text-zinc-800">
                                        +01-202-555-0181
                                    </p>
                                </div>
                            </div>

                            {/* Menu */}
                            <div className="flex gap-8 text-sm font-medium text-zinc-700">
                                <span className="flex items-center gap-1 cursor-pointer">
                                    HOME <ChevronDown size={16} />
                                </span>

                                <span className="flex items-center gap-1 cursor-pointer">
                                    SHOP <ChevronDown size={16} />
                                </span>

                                <span className="cursor-pointer">FEATURED</span>

                                <span className="flex items-center gap-1 cursor-pointer">
                                    PAGE <ChevronDown size={16} />
                                </span>

                                <span className="cursor-pointer">BLOG</span>
                                <span className="cursor-pointer">CONTACT</span>
                            </div>
                        </div>

                        {/* Search Row */}
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                            {/* Category */}
                            <div className="border border-zinc-300 h-14 px-5 flex items-center gap-3 w-full max-w-xs">
                                <Menu size={18} />
                                <span className="font-medium">All Departments</span>
                                <ChevronDown size={16} />
                            </div>

                            {/* Search */}
                            <div className="flex flex-1 min-w-0 w-full">
                                <input
                                    type="text"
                                    placeholder="I'm searching for..."
                                    className="w-full border border-zinc-300 h-14 px-5 outline-none"
                                />

                                <button className="bg-indigo-600 hover:bg-lime-700 text-white px-10 font-semibold">
                                    Search
                                </button>
                            </div>

                            {/* Login */}
                            <div className="text-sm leading-5">
                                <p className="font-semibold text-zinc-800">Log in</p>
                                <p className="text-zinc-500">or Register</p>
                            </div>

                            {/* Cart */}
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <ShoppingCart className="text-indigo-600 w-8 h-8" />
                                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                                        0
                                    </span>
                                </div>

                                <div className="text-sm">
                                    <p className="text-zinc-500">My Shopping Cart</p>
                                    <p className="font-bold text-indigo-600">$0.00</p>
                                </div>

                                <ChevronDown size={16} />
                            </div>
                        </div>

                        {/* Bottom Shadow */}
                        <div className="w-full max-w-xs h-5 bg-zinc-200 blur-xl rounded-full mx-auto mt-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MultipalOption;