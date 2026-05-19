import Link from "next/link";
import Image from "next/image";
import { CalendarDays, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { client, urlFor } from "@/lib/sanity";

const POSTS_PER_PAGE = 20;

// fetching all blogs contents
async function getBlogs(page) {
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const query = `
    {
      "blogs": *[_type == "blog"] 
        | order(publishedAt desc)
        [${start}...${end}] {
          _id,
          title,
          slug,
          mainImage,
          excerpt,
          publishedAt
        },

      "total": count(*[_type == "blog"])
    }
  `;

  return await client.fetch(query);
}

// SEO codes
export async function generateMetadata({ searchParams }) {

  const page = Number(searchParams?.page || 1);

  return {
    title:
      page > 1
        ? `News Page ${page} - KTL Textile`
        : "News & Updates - KTL Textile",

    description:
      "Latest textile industry news, wholesale fabric updates, textile market insights, and company blogs from KTL Textile.",
  };
}

export default async function NewsPage({ searchParams }) {

  const currentPage = Number(searchParams?.page || 1);

  const data = await getBlogs(currentPage);

  const blogs = data.blogs;
  const totalBlogs = data.total;

  const totalPages = Math.ceil(totalBlogs / POSTS_PER_PAGE);

  return (
    <main className="w-full overflow-hidden bg-white">

      {/* Hero*/}
      <section className="relative h-[42vh] md:h-[52vh] flex items-center justify-center text-center">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-10 px-6 text-white">

          <h1 className="text-4xl md:text-6xl font-bold mb-5">
            News & Updates
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-200 leading-relaxed">
            Explore textile industry insights, wholesale fabric updates,
            market trends, and company news from KTL Textile.
          </p>
        </div>
      </section>

      {/* News section*/}
      <section className="py-20 md:px-6 bg-gray-50">

        <div className="max-w-7xl mx-auto">

          {/* News Grid */}
          <div className="grid xl:grid-cols-2 gap-8">

            {blogs.map((blog) => (

              <Link
                key={blog._id}
                href={`/news/${blog.slug.current}`}
                className="group relative overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
              >

                {/* Hover Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Content Wrapper */}
                <div className="relative z-10 flex flex-col h-full">

                  {/* Image */}
                  <div className="relative w-full h-[280px] overflow-hidden">

                    <Image
                      src={urlFor(blog.mainImage).url()}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500" />

                  </div>

                  {/* Content */}
                  <div className="flex-1 p-7 flex flex-col">

                    {/* Date */}
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">

                      <CalendarDays
                        size={16}
                        className="text-purple-600"
                      />

                      {new Date(blog.publishedAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 leading-snug mb-4 group-hover:text-purple-700 transition duration-300">

                      {blog.title}

                    </h3>

                    {/* Excerpt */}
                    {blog.excerpt && (
                      <p className="text-gray-600 leading-relaxed line-clamp-3 mb-6">
                        {blog.excerpt}
                      </p>
                    )}

                    {/* Read More */}
                    <div className="mt-auto inline-flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all duration-300">

                      Read More

                      <ArrowRight size={18} />
                    </div>

                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-purple-200 transition duration-500" />

              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (

            <div className="flex flex-wrap justify-center items-center gap-3 mt-20">

              {/* Previous */}
              <Link
                href={
                  currentPage > 1
                    ? `/news?page=${currentPage - 1}`
                    : "#"
                }
                className={`w-11 h-11 rounded-full flex items-center justify-center border transition
                ${currentPage === 1
                    ? "pointer-events-none opacity-40 bg-gray-200"
                    : "bg-white hover:bg-blue-600 hover:text-white"
                  }`}
              >
                <ChevronLeft size={18} />
              </Link>

              {/* Numbers */}
              {Array.from({ length: totalPages }, (_, index) => {

                const page = index + 1;

                return (
                  <Link
                    key={page}
                    href={`/news?page=${page}`}
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-medium transition
                    ${currentPage === page
                        ? "bg-blue-600 text-white"
                        : "bg-white hover:bg-blue-600 hover:text-white"
                      }`}
                  >
                    {page}
                  </Link>
                );
              })}

              {/* Next */}
              <Link
                href={
                  currentPage < totalPages
                    ? `/news?page=${currentPage + 1}`
                    : "#"
                }
                className={`w-11 h-11 rounded-full flex items-center justify-center border transition
                ${currentPage === totalPages
                    ? "pointer-events-none opacity-40 bg-gray-200"
                    : "bg-white hover:bg-blue-600 hover:text-white"
                  }`}
              >
                <ChevronRight size={18} />
              </Link>

            </div>
          )}
        </div>
      </section>
    </main>
  );
}