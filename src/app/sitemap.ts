import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://staravenue.vn";

  const routes = [
    "",
    "/vi-tri",
    "/mat-bang",
    "/tien-ich",
    "/tien-ich/he-sinh-thai-cong-vien",
    "/bang-gia",
    "/gioi-thieu",
    "/lien-he",
    "/tin-tuc",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
