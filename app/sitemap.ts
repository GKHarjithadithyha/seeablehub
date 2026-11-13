import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { siteUrl } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/services",
    "/solutions",
    "/industries",
    "/work",
    "/resources",
    "/faq",
    "/contact",
    ...services.map((s) => `/services/${s.slug}`),
  ];
  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority:
      path === "" ? 1 : path === "/services" ? 0.9 : path.startsWith("/services/") ? 0.8 : 0.7,
  }));
}
