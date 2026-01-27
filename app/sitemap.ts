import type { MetadataRoute } from "next";
import { getBlogData } from "./lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getBlogData({ allPosts: true });

  const blogUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://mattjared.xyz/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: "https://mattjared.xyz",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://mattjared.xyz/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://mattjared.xyz/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://mattjared.xyz/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...blogUrls,
  ];
}
