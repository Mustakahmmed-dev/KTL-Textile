import Link from "next/link";
import { getLatestPosts } from "@/lib/blog-api";

export default async function LatestNews() {

  const posts = await getLatestPosts();

  // ❌ NO POSTS
  if (!posts?.length) return null;

  return (

    <section className="py-20">

      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* TOP */}
        <div className="flex items-end justify-between gap-4 mb-10">

          <div>

            <p className="text-xl uppercase tracking-[3px] text-gray-600">
              Latest News
            </p>

         
          </div>

          <Link
            href="/news"
            className="hidden md:inline-flex hover:underline font-medium"
          >
            View All News
          </Link>

        </div>

        {/* POSTS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {posts.map((post) => (

            <Link
              key={post._id}
              href={`/news/${post.slug.current}`}
              className="group"
            >

              {/* IMAGE */}
              <div className="overflow-hidden rounded-3xl">

                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-300"
                />

              </div>

              {/* CONTENT */}
              <div className="mt-5">

                {/* DATE */}
                <p className="text-sm text-gray-500">

                  {new Date(post.publishedAt).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}

                </p>

                {/* TITLE */}
                <h3 className="text-xl font-semibold mt-3 leading-snug group-hover:underline line-clamp-2">

                  {post.title}

                </h3>

              </div>

            </Link>

          ))}

        </div>

        {/* MOBILE BUTTON */}
        <div className="mt-10 text-center md:hidden">

          <Link
            href="/news"
            className="inline-flex bg-black text-white px-6 py-3 rounded-full"
          >
            View All News
          </Link>

        </div>

      </div>

    </section>

  );
}