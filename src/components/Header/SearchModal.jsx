"use client";

import { useState } from "react";
import { X, Search } from "lucide-react";

export default function SearchModal({ open, setOpen }) {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("all");

  // Dummy data (replace with Sanity later)
  const products = [
    { name: "Cotton T-Shirt", price: "$5" },
    { name: "Hoodie Premium", price: "$12" },
  ];

  const blogs = [
    { title: "Textile Trends 2026" },
    { title: "Wholesale Clothing Guide" },
  ];

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  const filteredBlogs = blogs.filter(b =>
    b.title.toLowerCase().includes(query.toLowerCase())
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4">

      {/* Modal */}
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="flex items-center border-b px-4 py-3">
          <Search className="text-gray-400 mr-2" size={20} />

          <input
            type="text"
            placeholder="Type anything to search..."
            className="flex-1 outline-none text-lg"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 px-4 py-3 border-b">
          {["all", "products", "blogs"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-1 rounded-full border ${
                tab === t
                  ? "bg-blue-600 text-white"
                  : "text-gray-600"
              }`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="max-h-[400px] overflow-y-auto p-4 space-y-6">

          {/* Products */}
          {(tab === "all" || tab === "products") && (
            <div>
              <h3 className="font-semibold mb-2">Products</h3>

              {filteredProducts.length === 0 && (
                <p className="text-gray-400 text-sm">No products found</p>
              )}

              {filteredProducts.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between py-2 border-b text-sm"
                >
                  <span>{item.name}</span>
                  <span className="text-blue-600">{item.price}</span>
                </div>
              ))}
            </div>
          )}

          {/* Blogs */}
          {(tab === "all" || tab === "blogs") && (
            <div>
              <h3 className="font-semibold mb-2">Blogs</h3>

              {filteredBlogs.length === 0 && (
                <p className="text-gray-400 text-sm">No blogs found</p>
              )}

              {filteredBlogs.map((item, i) => (
                <div
                  key={i}
                  className="py-2 border-b text-sm"
                >
                  {item.title}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}