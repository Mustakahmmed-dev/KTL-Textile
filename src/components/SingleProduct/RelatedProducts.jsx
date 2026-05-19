import Link from "next/link";
import { client } from "@/lib/sanity";

// FETCH RELATED PRODUCTS
async function getRelatedProducts(categoryId, currentProductId) {

  // ❌ NO CATEGORY
  if (!categoryId) return [];

  const query = `*[
    _type == "product" &&
    category._ref == $categoryId &&
    _id != $currentProductId
  ][0...8]{
    _id,
    title,
    slug,
    "imageUrl": image.asset->url,
    stockStatus
  }`;

  return await client.fetch(query, {
    categoryId,
    currentProductId,
  });
}

export default async function RelatedProducts({
  categoryId,
  currentProductId,
}) {

  const products = await getRelatedProducts(
    categoryId,
    currentProductId
  );

  // NO RELATED PRODUCTS
  if (!products?.length) return null;

  return (

    <section className="mt-24">

      {/* SECTION HEADER */}
      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-3xl font-bold">
            Related Products
          </h2>

          <p className="text-gray-500 mt-2">
            Explore similar textile rolls and collections.
          </p>

        </div>

        <Link
          href="/products"
          className="hidden md:inline-block text-sm font-medium hover:underline"
        >
          View All Products
        </Link>

      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {products.map((product) => (

          <Link
            key={product._id}
            href={`/products/${product.slug.current}`}
            className="group border border-purple-200 rounded overflow-hidden hover:shadow-lg transition bg-white"
          >

            {/* IMAGE */}
            <div className="overflow-hidden">

              <img
                src={product.imageUrl}
                alt={product.title}
                className="h-64 w-full object-cover group-hover:scale-105 transition duration-300"
              />

            </div>

            {/* CONTENT */}
            <div className="p-4">

              {/* TITLE */}
              <h3 className="font-semibold line-clamp-2">
                {product.title}
              </h3>

              {/* STOCK STATUS */}
              <div className="mt-3">

                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    product.stockStatus === "in-stock"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {product.stockStatus}
                </span>

              </div>

            </div>

          </Link>

        ))}

      </div>

      {/* MOBILE BUTTON */}
      <div className="mt-8 text-center md:hidden">

        <Link
          href="/products"
          className="inline-block bg-black text-white px-6 py-3 rounded-xl"
        >
          Browse All Products
        </Link>

      </div>

    </section>
  );
}