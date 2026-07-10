import { unstable_cache } from "next/cache";
import { prisma } from "@/lib/prisma";

export const getPosts = unstable_cache(
  async () => {
    return prisma.post.findMany({
      where: {
        published: true,
      },
      orderBy: {
        publishedAt: "desc",
      },
    });
  },
  ["blog-posts"],
  {
    tags: ["blog-posts"],
  },
);
