import Pagination from "@/components/ProductsPage/Pagination";
import ProductsGrid from "@/components/ProductsPage/ProductsGrid";
import { getProducts } from "@/lib/api";

// Seo codes
export const metadata = {
  title: "Products | KTL Textile",
  description:
    "Browse premium textile rolls, fabrics, and clothing materials from KTL Textile.",
};

const PRODUCTS_PER_PAGE = 12;

export default async function ProductsPage({ searchParams }) {

  const products = await getProducts();

  // PAGINATION
  const currentPage = Number(searchParams?.page) || 1;

  const totalProducts = products.length;

  const totalPages = Math.ceil(
    totalProducts / PRODUCTS_PER_PAGE
  );

  const startIndex =
    (currentPage - 1) * PRODUCTS_PER_PAGE;

  const endIndex =
    startIndex + PRODUCTS_PER_PAGE;

  const currentProducts = products.slice(
    startIndex,
    endIndex
  );
  return (

    <main>
      {/* Hero photo */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">

        {/* background image */}
        <img
          src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1600&auto=format&fit=crop"
          alt="Products Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* overlay text */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Contnet */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">

          <div>

            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Our Products
            </h1>

            <p className="text-white/80 mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Explore premium textile rolls, clothing materials,
              and fabric collections from KTL Textile.
            </p>

          </div>

        </div>

      </section>

      {/* Products grid */}

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">

        <ProductsGrid
          products={currentProducts}
        />

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
        />

      </section>

    </main>
  );
}