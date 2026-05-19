"use client";

import { useEffect, useState } from "react";

import { Link2, Check } from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export default function ShareButtons({
  title,
  className = "",
}) {

  const [currentUrl, setCurrentUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

  const twitterShare = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;

  const linkedinShare = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`;

  const handleCopy = async () => {

    try {

      await navigator.clipboard.writeText(currentUrl);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);

    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <div className={className}>
     
      <div className="flex flex-wrap items-center gap-4">

        {/* Facebook */}
        <a
          href={facebookShare}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
          className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
        >
          <FaFacebookF size={17} />
        </a>

        {/* X / Twitter */}
        <a
          href={twitterShare}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
          className="w-12 h-12 rounded-full bg-gray-100 text-gray-900 flex items-center justify-center hover:bg-black hover:text-white hover:-translate-y-1 transition-all duration-300"
        >
          <FaXTwitter size={17} />
        </a>

        {/* Linkedin */}
        <a
          href={linkedinShare}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Linkedin"
          className="w-12 h-12 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center hover:bg-sky-700 hover:text-white hover:-translate-y-1 transition-all duration-300"
        >
          <FaLinkedinIn size={17} />
        </a>

        {/* Copy Link */}
        <button
          onClick={handleCopy}
          aria-label="Copy link"
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1
          
          ${
            copied
              ? "bg-green-600 text-white"
              : "bg-purple-100 text-purple-700 hover:bg-purple-700 hover:text-white"
          }`}
        >

          {copied ? (
            <Check size={18} />
          ) : (
            <Link2 size={18} />
          )}

        </button>

      </div>
    </div>
  );
}