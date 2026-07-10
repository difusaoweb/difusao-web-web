import { unstable_cache } from "next/cache";

import { prisma } from "@/lib/prisma";

export const getPost = (id: string) =>
  unstable_cache(
    async () => {
      return prisma.post.findUniqueOrThrow({
        where: {
          id,
        },
      });
    },
    [`post-${id}`],
    {
      tags: [`post-${id}`],
    },
  )();
