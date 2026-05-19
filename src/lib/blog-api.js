import { client } from "./sanity";

export async function getLatestPosts() {

  const query = `*[_type == "blog"] | order(publishedAt desc)[0...3]{

    _id,

    title,
    slug,

    excerpt,

    "imageUrl": mainImage.asset->url,

    tags,

    publishedAt

  }`;

  return await client.fetch(query);
}