"use client";

import { useState } from "react";

export default function ProductImageViewer({
  image,
  alt,
}) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

      <div
        onClick={() => setIsOpen(true)}
        className="cursor-zoom-in overflow-hidden rounded-2xl"
      >

        <img
          src={image}
          alt={alt}
          className="w-full object-cover hover:scale-105 transition duration-300"
        />

      </div>

      {isOpen && (

        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        >

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-white text-4xl"
          >
            ×
          </button>

          {/* IMAGE */}
          <img
            src={image}
            alt={alt}
            className="max-w-full max-h-[90vh] rounded-xl object-contain"
          />

        </div>

      )}

    </>
  );
}