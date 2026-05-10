 import Link from "next/link";

export default function Pagination({
  currentPage,
  totalPages,
}) {

  if (totalPages <= 1) return null;
  
 return (

    <div className="flex items-center justify-center gap-2 mt-16 flex-wrap">

      {/* Previous */}
      {currentPage > 1 && (

        <Link
          href={`/products?page=${currentPage - 1}`}
          className="px-4 py-2 border rounded-xl hover:bg-black hover:text-white transition"
        >
          Previous
        </Link>

      )}

      {/* PAGE NUMBERS */}
      {Array.from({ length: totalPages }).map((_, index) => {

        const page = index + 1;

        return (

          <Link
            key={page}
            href={`/products?page=${page}`}
            className={`w-10 h-10 flex items-center justify-center rounded-xl border transition ${
              currentPage === page
                ? "bg-black text-white"
                : "hover:bg-black hover:text-white"
            }`}
          >
            {page}
          </Link>

        );
      })}

      {/* Next */}
      {currentPage < totalPages && (

        <Link
          href={`/products?page=${currentPage + 1}`}
          className="px-4 py-2 border rounded-xl hover:bg-black hover:text-white transition"
        >
          Next
        </Link>

      )}

    </div>
  );
}