import { defineCollection, z } from "astro:content";

const blogs = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      title: z.string(),
      excerpt: z.string(),
      description: z.string().max(160),
      thumbnail: image(),
      readTime: z.string(),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
      category: z.string(),
      author: z.string().default("The Thermo Team"),
      draft: z.boolean().default(false),
      canonicalUrl: z.string().url().optional(),
    }),
});
const products = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      title: z.string(),
      excerpt: z.string(),
      description: z.string().max(160),
      thumbnail: image(),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
      category: z.string(),
      author: z.string().default("The Thermo Team"),
      canonicalUrl: z.string().url().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blogs, products };
