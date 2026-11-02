import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/schemas";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteUrl ? [{ url: siteUrl }] : [];
}
