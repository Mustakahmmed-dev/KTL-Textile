import Link from "next/link";
import { client } from "@/lib/sanity";
import PortableTextRenderer from "@/components/PortableTextRenderer";
import RelatedProducts from "@/components/SingleProduct/RelatedProducts";
import ProductImageViewer from "@/components/SingleProduct/ProductImageViewer";
import { FaViber } from "react-icons/fa6";
import { PhoneCallIcon } from "lucide-react";
import ShareButtons from "@/components/News/ShareNews";

// Single product fetch
async function getProduct(slug) {
  const query = `*[_type == "product" && slug.current == $slug][0]{
    _id,
    title,
    "imageUrl": image.asset->url,
    stockStatus,
    seriesId,
    sku,
    rollsInSet,
    colors,

    category->{
      _id,
      name
    },

    description,
    tags
  }`;

  return await client.fetch(query, { slug });
}
export async function generateMetadata({ params }) {

  const { slug } = await params;

  const product = await getProduct(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {

    title: `${product.title} | KTL Textile`,

    description:
      product.description?.[0]?.children?.[0]?.text ||
      "Premium textile products from KTL Textile.",

    openGraph: {
      title: product.title,

      description:
        product.description?.[0]?.children?.[0]?.text ||

        "Premium textile products from KTL Textile.",

      images: [
        {
          url: product.imageUrl,
        },
      ],
    },

  };
}

export default async function ProductDetails({ params }) {

  const { slug } = await params;

  const product = await getProduct(slug);

  // Not found
  if (!product) {
    return (
      <div className="p-10 text-center">
        Product not found
      </div>
    );
  }

  return (

    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">

      {/* Top part */}

      <div className="grid lg:grid-cols-2 gap-10 items-start">

        {/* left image */}
        <div>
          <ProductImageViewer
            image={product.imageUrl}
            alt={product.title}
          />
        </div>

        {/* Right key details */}
        <div>
          <h1 className="text-xl md:text-2xl font-bold">
            {product.title}
          </h1>

          <p className="text-gray-500 mt-2">
            Category: {product.category?.name}
          </p>

          <div className="mt-4">
            Availability:
            <span
              className={`px-4 py-2 rounded-full text-sm font-medium ${product.stockStatus === "in-stock"
                ? " font-semibold text-green-700"
                : "bg-red-100 font-semibold text-red-600"
                }`}
            >
              {product.stockStatus}
            </span>

          </div>

          {/* Meta details */}
          <div className="mt-8 space-y-4 border-t border-gray-300 pt-6 ">

            <div className="flex justify-between border-b border-gray-300 pb-3 pr-5">
              <span className="font-medium">SKU</span>
              <span className="font-semibold">{product.sku}</span>
            </div>

            <div className="flex justify-between border-b border-gray-300 pb-3 pr-5">
              <span className="font-medium">Series ID</span>
              <span className="font-semibold">{product.seriesId}</span>
            </div>

            <div className="flex justify-between border-b border-gray-300 pb-3 pr-5">
              <span className="font-medium">Rolls in Set</span>
              <span className="font-semibold">{product.rollsInSet}</span>
            </div>

          </div>

          {/* Colors */}
          {product.colors?.length > 0 && (

            <div className="mt-8">

              <h3 className="font-semibold mb-3">
                Available Colors
              </h3>

              <div className="flex flex-wrap gap-2">

                {product.colors.map((color, index) => (

                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 capitalize rounded-full text-sm"
                  >
                    {color}
                  </span>

                ))}

              </div>

            </div>

          )}

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <a href="https://viber://chat?number=95957657567" className="flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-full">
              <PhoneCallIcon size={20} />
              Call Now
            </a>

            <a href="https://viber://chat?number=95957657567" className="flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full">
              <FaViber size={20} />
              Chat on Viber
            </a>

          </div>
          <div className="mt-5 flex items-center gap-2">
            <h3>Share</h3>
            <ShareButtons title={product.name} />
          </div>

        </div>

      </div>

      {/* Product description */}

      <div className="mt-20">

        <h2 className="text-xl mb-8 border-b border-gray-300">
          Product Description:
        </h2>

        <PortableTextRenderer value={product.description} />

      </div>

      {/* Tags */}
      <div className="mt-20">
        <h2 className="text-lg mb-4">
          Tags:
        </h2>
        {product.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2  bg-purple-50 p-5 rounded-lg">
            {product.tags.map((tag, index) => (

              <span
                key={index}
                className=" rounded-full text-sm bg-purple-200 italic px-3 py-2 "
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <hr className="mt-5 border-gray-300" />

      {/* Related Products  */}

      <RelatedProducts
        categoryId={product.category?._id}
        currentProductId={product._id}
      />

      {/*Final CTA */}

      <div className="mt-24 rounded-3xl p-10 text-center">

        <h2 className="text-3xl text-pink-600 font-bold">
          Not found what you're looking for?
        </h2>

        <p className="text-gray-600 mt-3">
          Browse all our available clothes rolls and textile collections.
        </p>

        <Link
          href="/products"
          className="inline-block mt-6 bg-purple-700 text-white px-8 py-3 rounded-xl hover:opacity-90 transition"
        >
          Browse All Products
        </Link>

      </div>

    </div>

  );
}