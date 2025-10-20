import { defineCollection, z } from "astro:content";

const blogs = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      title: z.string(),
      excerpt: z.string(),
      content: z.string(),
      thumbnail: image(),
      date: z.string(),
      readTime: z.string(),
      pubDate: z.date(),
      category: z.string(),
    }),
});
const products = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      title: z.string(),
      excerpt: z.string(),
      content: z.string(),
      thumbnail: image()
    //   .refine(
    //     (img) =>
    //       img.format === "jpg" || img.format === "jpeg" || img.format === "png",
    //     {
    //       message: "Thumbnail must be JPG, JPEG, or PNG image.",
    //     }
    //   )
      ,
      date: z.string(),
      category: z.string(),
    }),
});

export const collections = { blogs, products };
