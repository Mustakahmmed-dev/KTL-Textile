import { client } from "./sanity";

export async function getProducts() {
  const query = `*[_type == "product"]{
    _id,
    name,
    slug,
    price,
    "imageUrl": image.asset->url,
    stockStatus,
    category>{
    title
    }
  }`;

  return await client.fetch(query);
}