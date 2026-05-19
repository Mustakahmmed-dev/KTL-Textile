import Link from "next/link";
import { getProducts } from "@/lib/api";
import { PhoneCallIcon } from "lucide-react";

export default async function ProductsSection() {
  const products = await getProducts();

  return (
    <div className="p-6 md:p-12">
      
      {/* HERO / INTRO */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <p className="text-gray-600">
          Explore premium textile products from our company
        </p>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {products.map((product) => (
          <div
            key={product._id}
            className=" rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition bg-white"
          >

            {/* IMAGE LINK */}
            <Link href={`/products/${product.slug.current}`}>
              <img
                src={product.imageUrl}
                className="h-60 md:h-48 w-full object-cover hover:scale-105 transition"
                alt={product.title}
              />
            </Link>

            {/* CONTENT */}
            <div className="p-4">

              <h2 className="font-semibold text-lg">
                {product.title}
              </h2>

              <p className="text-sm text-gray-500">
                Price: {product.price && `${product.price}`}
              </p>

              {/* STOCK STATUS */}
              <p
                className={`text-sm font-medium mt-1 ${
                  product.stockStatus === "in-stock"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {product.stockStatus}
              </p>

              {/* CTA BUTTONS */}
              <div className="flex gap-2 mt-4">

                {/* CALL BUTTON */}
                {/* <a
                  href="tel:+8801XXXXXXXXX"
                  className=" text-center border border-gray-200 text-white text-sm"
                >
                  <span className="flex items-center justify-center  bg-blue-600 p-2 rounded-full"><PhoneCallIcon /></span>
                </a> */}
                <a
                  href="tel:+8801XXXXXXXXX"
                  className="flex-1 text-center bg-transparent border border-gray-200 py-2 hover:text-white text-sm hover:bg-purple-600"
                >
                  Call Now
                </a>

                {/* VIBER BUTTON */}
                <a
                  href="viber://chat?number=+8801XXXXXXXXX"
                  className="flex-1 text-center bg-purple-600 text-white py-2 text-sm"
                >
                  Viber
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}