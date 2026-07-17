import { unstable_cache } from "next/cache";
import { prisma } from "@/lib/prisma";

export const getPosts = unstable_cache(
  async (limit = 3) => {
    const take = limit === -1 ? undefined : limit;

    return prisma.post.findMany({
      where: {
        published: true,
      },
      orderBy: {
        publishedAt: "desc",
      },
      take,
    });
  },
  ["blog-posts"],
  {
    tags: ["blog-posts"],
  },
);
