import { client } from "./sanity";

export async function getProducts() {
  const query = `*[_type == "product"]{
    _id,
    name,
    price,
    "imageUrl": image.asset->url,
    stockStatus,
    category
  }`;

  return await client.fetch(query);
}