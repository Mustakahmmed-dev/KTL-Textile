"use client";

import { Menu, Search, X } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaViber, FaTiktok } from "react-icons/fa";
import { useState } from "react";
// import {
//   Menu,
//   X,
//   Search,
//   Facebook,
//   Linkedin,
// } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* 🔹 Top Social Bar */}
      <div className="w-full bg-blue-600 text-white text-sm px-4 py-2 flex justify-between items-center">
        <span>Wholesale Textile Manufacturer</span>

        <div className="flex gap-4">
          {/* <Facebook size={18} className="cursor-pointer hover:scale-110 transition" /> */}
          {/* <Linkedin size={18} className="cursor-pointer hover:scale-110 transition" /> */}
          <span className="cursor-pointer hover:scale-110 transition"> X </span>
          <span className="cursor-pointer hover:scale-110 transition"> <FaTiktok /> </span>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <nav className="w-full bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            KTL Textile
          </div>

          {/* Center Menu */}
          <div className="hidden md:flex gap-10 text-gray-700 font-medium text-lg">
            <a href="#" className="hover:text-blue-600 transition">Home</a>
            <a href="#" className="hover:text-blue-600 transition">About</a>
            <a href="#" className="hover:text-blue-600 transition">Products</a>
            <a href="#" className="hover:text-blue-600 transition">Bulk Order</a>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-5">

            {/* Search Icon */}
            <Search
              size={22}
              className="cursor-pointer hover:text-blue-600 transition"
              onClick={() => setSearchOpen(true)}
            />

            {/* Viber Button */}
            <a
              href="#"
              className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition"
            >
              Viber Contact
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* 🔹 Mobile Dropdown */}
        {open && (
          <div className="md:hidden bg-white px-6 py-5 space-y-4 shadow-lg animate-fadeIn">
            <a href="#" className="block text-gray-700">Home</a>
            <a href="#" className="block text-gray-700">About</a>
            <a href="#" className="block text-gray-700">Products</a>
            <a href="#" className="block text-gray-700">Bulk Order</a>

            <div className="flex gap-4 pt-3">
              <FaFacebookF size={20} />
              <FaLinkedinIn size={20} />
              <FaViber />
              <FaTiktok />
              
            </div>

            <button className="w-full bg-purple-600 text-white py-2 rounded-full">
              Viber Contact
            </button>
          </div>
        )}
      </nav>

      {/* 🔥 Full Screen Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center z-50 animate-fadeIn">

          {/* Close Button */}
          <X
            size={32}
            className="absolute top-6 right-6 text-white cursor-pointer"
            onClick={() => setSearchOpen(false)}
          />

          {/* Search Box */}
          <div className="w-full max-w-2xl px-6">
            <div className="flex items-center bg-white rounded-full overflow-hidden shadow-lg">

              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 px-6 py-4 text-lg outline-none"
              />

              <button className="bg-blue-600 text-white px-6 py-4 hover:bg-blue-700">
                Search
              </button>
            </div>

            {/* Clear option */}
            <button
              onClick={() => setSearchOpen(false)}
              className="text-white mt-4 underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}