import { client } from "./sanity";

// Get all products

export async function getProducts() {

  const query = `*[_type == "product"] | order(_createdAt desc){

    _id,
    _createdAt,

    title,
    slug,

    "imageUrl": image.asset->url,

    stockStatus,

    seriesId,
    sku,
    rollsInSet,
    price,

    colors,

    category->{
      _id,
      name
    },

    description,

    tags

  }`;

  return await client.fetch(query);
}

// Get single product by category

export async function getProduct(slug) {

  const query = `*[
    _type == "product" &&
    slug.current == $slug
  ][0]{

    _id,
    _createdAt,

    title,
    slug,

    "imageUrl": image.asset->url,

    stockStatus,

    seriesId,
    sku,
    rollsInSet,
    price,

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

// Get related products

export async function getRelatedProducts(
  categoryId,
  currentProductId
) {

  // NO CATEGORY
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

    stockStatus,
    price

  }`;

  return await client.fetch(query, {
    categoryId,
    currentProductId,
  });
}

// Get products by category

export async function getProductsByCategory(categoryId) {

  const query = `*[
    _type == "product" &&
    category._ref == $categoryId
  ]{

    _id,

    title,
    slug,

    "imageUrl": image.asset->url,

    stockStatus,
    price,

    category->{
      _id,
      name
    }

  }`;

  return await client.fetch(query, {
    categoryId,
  });
}

// Get all categories

export async function getCategories() {

  const query = `*[
    _type == "category"
  ] | order(title asc){

    _id,
    title,

    "productCount": count(
      *[_type == "product" && references(^._id)]
    )

  }`;

  return await client.fetch(query);
}

// Search products
export async function searchProducts(searchTerm) {

  const query = `*[
    _type == "product" &&
    (
      title match $search ||
      sku match $search ||
      seriesId match $search
    )
  ]{

    _id,

    title,
    slug,

    "imageUrl": image.asset->url,

    stockStatus,
    price

  }`;

  return await client.fetch(query, {
    search: `*${searchTerm}*`,
  });
}