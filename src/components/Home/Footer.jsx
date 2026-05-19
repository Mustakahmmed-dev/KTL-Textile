"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTiktok,
  FaViber,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0B1120] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300/20 blur-3xl rounded-full" />

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 z-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-bold text-blue-500 mb-5">
              KTL Textile
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              Premium wholesale textile manufacturer delivering quality
              garments and fabrics across Myanmar and international markets.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">

              {[
                FaFacebookF,
                FaLinkedinIn,
                FaXTwitter,
                FaTiktok,
              ].map((Icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-purple-600 hover:border-purple-600 transition duration-300 cursor-pointer"
                >
                  <Icon size={16} />
                </div>
              ))}

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">
              <Link href="/" className="hover:text-blue-400 hover:translate-x-1 transition duration-300">
                Home
              </Link>
              <Link href="/about" className="hover:text-blue-400 hover:translate-x-1 transition duration-300">
                About Us
              </Link>
              <Link href="/products" className="hover:text-blue-400 hover:translate-x-1 transition duration-300">
                Our Products
              </Link>
              <Link href="/contact-us" className="hover:text-blue-400 hover:translate-x-1 transition duration-300">
                Contact Us
              </Link>
              <Link href="/news" className="hover:text-blue-400 hover:translate-x-1 transition duration-300">
                News
              </Link>

            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Our Products
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              {[
                "T-Shirts",
                "Hoodies",
                "Uniforms",
                "Cotton Fabrics",
                "Custom Apparel",
              ].map((item, index) => (
                <Link
                  href="#"
                  key={index}
                  className="hover:text-blue-400 hover:translate-x-1 transition duration-300"
                >
                  {item}
                </Link>
              ))}

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Contact Us
            </h3>

            <div className="space-y-5 text-gray-400">

              {/* Address */}
              <div className="flex gap-4">
                <MapPin className="text-blue-500 shrink-0 mt-1" size={20} />

                <p>
                  အမှတ်(15) 127လမ်း၊ မင်္ဂလာတောင်ညွှန့်၊ ရန်ကုန်မြို့။, Yangon, Myanmar, 11211

                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <Phone className="text-blue-500" size={20} />

                <p>+95 9 515 8308</p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <Mail className="text-blue-500" size={20} />

                <p>info@ktltextile.com</p>
              </div>

              {/* Viber Button */}
              <a href="/" className="font-semibold mt-4 flex items-center gap-3 bg-purple-600 hover:bg-purple-700 transition px-5 py-3 rounded-full shadow-lg">

                <FaViber size={20} />

                Contact on Viber
              </a>

            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 KTL Textile. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-blue-400 transition">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-blue-400 transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}