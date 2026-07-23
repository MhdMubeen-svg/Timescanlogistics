import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { guides } from "@/lib/guides";

const base = "https://www.timescanlogistics.com";
const routes = ["", "/about", "/services", "/industries", "/global-network", "/tracking", "/quote", "/blog", "/careers", "/contact", "/faq", "/resources", "/tools", "/guides"];

export default function sitemap(): MetadataRoute.Sitemap {
  const pageRoutes: MetadataRoute.Sitemap = routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: r === "/blog" ? ("weekly" as const) : ("monthly" as const),
    priority: r === "" ? 1 : 0.8,
  }));
  const blogRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));
  const guideRoutes: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${base}/guides/${g.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...pageRoutes, ...blogRoutes, ...guideRoutes];
}
