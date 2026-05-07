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
      <div className="w-full bg-blue-600 text-white text-sm px-4 py-2 flex justify-between items-center">
        <span className="hidden sm:block">
          Wholesale Textile Manufacturer in Yangon
        </span>

        <div className="flex gap-4">
          <FaFacebookF />
          <FaLinkedinIn />
          <FaXTwitter />
          <FaTiktok />
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="w-full bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold text-blue-600">
            KTL Textile
          </div>

          {/* Center Menu */}
          <div className="hidden md:flex gap-10 text-gray-700 font-medium">
            <a href="#">Home</a>
            <a href="#">About </a>
            <a href="#">Products</a>
            <a href="#">Bulk Order</a>
            <a href="#">Blog</a>
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
              <li><a href="#"> Home </a></li>
              <li><a href="#"> About </a></li>
              <li><a href="#"> Products </a></li>
              <li><a href="#"> Bulk Order </a></li>
              <li><a href="#"> Blog </a></li>
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