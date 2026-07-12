import { MetadataRoute } from "next";

import { getPosts } from "@/services/Post/getPosts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = process.env.NEXT_PUBLIC_CURRENT_SITE_URL ?? "";
  try {
    const posts = await getPosts();

    return [
      {
        url,
        lastModified: new Date(),
      },
      ...posts.map((post) => ({
        url: `${url}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt),
      })),
    ];
  } catch (err) {
    return [
      {
        url,
        lastModified: new Date(),
      },
    ];
  }
}
