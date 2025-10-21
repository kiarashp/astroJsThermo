import { getCollection } from "astro:content";

export async function fetchProducts() {
  return getCollection("products");
}

export async function getPublishedProducts() {
  const products = await fetchProducts();
  return products.filter((b) => !b.data.draft);
}

export async function getRelatedProducts(currentProductSlug: string, category: string) {
  const products = await getPublishedProducts();
  return products.filter(
    (b) => b.data.category === category && b.slug !== currentProductSlug
  );
}
