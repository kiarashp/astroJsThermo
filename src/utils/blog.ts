// src/utils/blogs.ts
import { getCollection } from "astro:content";

export async function fetchBlogs() {
  return getCollection("blogs");
}

export async function getPublishedBlogs() {
  const blogs = await fetchBlogs();
  return blogs.filter((b) => !b.data.draft);
}

export async function getRelatedBlogs(currentBlogSlug: string, category: string) {
  const blogs = await getPublishedBlogs();
  return blogs.filter(
    (b) => b.data.category === category && b.slug !== currentBlogSlug
  );
}
