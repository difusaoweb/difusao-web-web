import { unstable_cache } from "next/cache";

import { prisma } from "@/lib/prisma";

export const getPostBySlug = (slug: string) =>
  unstable_cache(
    async () => {
      return prisma.post.findUniqueOrThrow({
        where: {
          slug,
        },
      });
    },
    [`post-slug-${slug}`],
    {
      tags: [`post-slug-${slug}`],
    },
  )();
