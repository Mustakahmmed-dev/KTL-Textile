"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1600&auto=format&fit=crop",
    title: "Premium Textile Manufacturing",
    subtitle: "Wholesale clothing supplier across Myanmar & worldwide.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop",
    title: "Modern Fashion Production",
    subtitle: "High-quality garments with export-level standards.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop",
    title: "Bulk Orders & Global Delivery",
    subtitle: "Reliable wholesale solutions for your business.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-full relative"
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/45" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                
                <div className="max-w-xl text-white">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                    {slide.title}
                  </h1>

                  <p className="text-lg md:text-xl text-gray-200 mb-6">
                    {slide.subtitle}
                  </p>

                  <a href="/products" className="rounded-full bg-transparent border border-gray-100 p-4 hover:bg-purple-600">
                    View More
                  </a>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index
                ? "bg-white scale-125"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}