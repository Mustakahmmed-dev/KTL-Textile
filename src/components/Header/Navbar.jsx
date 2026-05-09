"use client";

import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTiktok,
  FaViber,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SearchModal from "./SearchModal";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="w-full bg-purple-600 text-white text-sm px-4 py-2 flex justify-between items-center">
        <span className="">
          Wholesale Textile clothing provider in Yangon
        </span>

        <div className="flex items-center gap-2">

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition duration-300"
          >
            <FaFacebookF size={12} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-blue-700 hover:scale-110 transition duration-300"
          >
            <FaLinkedinIn size={12} />
          </a>

          {/* X / Twitter */}
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-black hover:scale-110 transition duration-300"
          >
            <FaXTwitter size={12} />
          </a>

          {/* TikTok */}
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-pink-500 hover:scale-110 transition duration-300"
          >
            <FaTiktok size={12} />
          </a>

        </div>
      </div>

      {/* Main Navbar */}
      <nav className="w-full bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold text-blue-600">
            <a href="/">KTL Textile</a>
          </div>

          {/* Center Menu */}
          <div className="hidden md:flex gap-10 text-gray-700 font-medium">
            <a href="/">Home</a>
            <a href="/about">About </a>
            <a href="/products">Products</a>
            <a href="/contact-us">Bulk Order</a>
            <a href="/blog">Blog</a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Search (ALL devices) */}
            <Search
              size={22}
              className="cursor-pointer hover:text-blue-600 transition"
              onClick={() => setSearchOpen(true)}
            />

            {/* Viber (desktop only) */}
            <a href="https://viber://chat?number=95957657567" className="hidden md:flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full">
              <FaViber />
              Contact
            </a>

            {/* Menu button */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white px-6 py-5 space-y-4 shadow-lg">
            <ul className="flex flex-col gap-4">
              <li><a href="/"> Home </a></li>
              <li><a href="/about"> About </a></li>
              <li><a href="/products"> Products </a></li>
              <li><a href="/contact-us"> Bulk Order </a></li>
              <li><a href="/blog"> Blog </a></li>
            </ul>

            <a href="https://viber://chat?number=95957657567" className="flex items-center justify-center gap-2 bg-purple-600 text-white py-2 rounded-full">
              <FaViber />
              Contact on Viber
            </a>
          </div>
        )}
      </nav>

      {/* Search Modal (GLOBAL) */}
      <SearchModal open={searchOpen} setOpen={setSearchOpen} />
    </>
  );
}