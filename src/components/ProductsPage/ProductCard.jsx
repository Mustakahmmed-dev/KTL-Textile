import { PhoneCallIcon } from "lucide-react";
import Link from "next/link";
import { FaViber } from "react-icons/fa6";

export default function ProductCard({ product }) {
  console.log(product)

  return (

    <Link
      href={`/products/${product.slug.current}`}
      className="group border border-purple-300 rounded-lg overflow-hidden bg-white hover:shadow-xl transition"
    >

      {/* IMAGE */}
      <div className="overflow-hidden">

        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-300"
        />

      </div>

      {/* CONTENT */}
      <div className="p-2">

        {/* TITLE */}
        <h2 className="font-semibold line-clamp-2">
          {product.title}
        </h2>

        {/* PRICE */}
        <div className=" flex items-center justify-between">
          <span className="">
            {product.price && `Price: ${product.price} mmk`}
          </span>

          <span
            className={`text-xs px-3 py-1 rounded-full ${product.stockStatus === "in-stock"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-600"
              }`}
          >
            {product.stockStatus}
          </span>

        </div>

        <div className="mt-2 flex flex-col gap-2 flex-row">

          <a href="https://viber://chat?number=95957657567" className="flex items-center text-sm justify-center gap-1 bg-black text-white p-2 rounded-full">
            <PhoneCallIcon size={10} />
            Call Now
          </a>

          <a href="https://viber://chat?number=95957657567" className="flex items-center text-sm justify-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full">
            <FaViber size={10} />
            Chat on Viber
          </a>

        </div>
      </div>

    </Link>
  );
}