import { urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";

export default function PortableTextRenderer({ value }) {

  const components = {

    // 🔥 BLOCK STYLES
    block: {

      h1: ({ children }) => (
        <h1 className="text-4xl font-bold mt-8 mb-4">
          {children}
        </h1>
      ),

      h2: ({ children }) => (
        <h2 className="text-3xl font-semibold mt-7 mb-3">
          {children}
        </h2>
      ),

      h3: ({ children }) => (
        <h3 className="text-2xl font-semibold mt-6 mb-3">
          {children}
        </h3>
      ),

      normal: ({ children }) => (
        <p className="text-gray-700 leading-8 mb-4">
          {children}
        </p>
      ),

      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-600 my-4">
          {children}
        </blockquote>
      ),
    },

    // 🔥 LISTS
    list: {

      bullet: ({ children }) => (
        <ul className="list-disc ml-6 space-y-2 mb-4">
          {children}
        </ul>
      ),

      number: ({ children }) => (
        <ol className="list-decimal ml-6 space-y-2 mb-4">
          {children}
        </ol>
      ),
    },

    // 🔥 LIST ITEMS
    listItem: {

      bullet: ({ children }) => (
        <li className="text-gray-700">
          {children}
        </li>
      ),

      number: ({ children }) => (
        <li className="text-gray-700">
          {children}
        </li>
      ),
    },

    // 🔥 MARKS / INLINE STYLES
    marks: {

      strong: ({ children }) => (
        <strong className="font-bold text-black">
          {children}
        </strong>
      ),

      em: ({ children }) => (
        <em className="italic">
          {children}
        </em>
      ),

      underline: ({ children }) => (
        <span className="underline">
          {children}
        </span>
      ),

      link: ({ value, children }) => (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          {children}
        </a>
      ),
    },

    // Other photos in body
    types: {

      image: ({ value }) => (

        <div className=" my-8">

          <img
            src={urlFor(value).url()}
            alt={value?.alt || "Product image"}
            className="w-full rounded-xl object-cover"
          />

          {value?.caption && (
            <p className="text-sm text-gray-500 mt-2 text-center">
              {value.caption}
            </p>
          )}

        </div>
      )
    },
  };

  return (
    <div className="portable-content">
      <PortableText
        value={value}
        components={components}
      />
    </div>
  );
}