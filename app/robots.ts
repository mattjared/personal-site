import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://mattjared.xyz/sitemap.xml",
    host: "https://mattjared.xyz",
  };  
}
