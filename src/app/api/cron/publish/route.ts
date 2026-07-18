import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

const SECRET = process.env.CRON_SECRET;

export async function GET(request: Request) {
  const token = request.headers.get("x-cron-secret");

  if (token !== SECRET) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const now = new Date();

  const posts = await prisma.post.findMany({
    where: {
      status: "future",
      publishedAt: {
        lte: now,
      },
    },
    select: {
      id: true,
      slug: true,
    },
  });

  if (posts.length === 0) {
    return NextResponse.json({ updated: 0 });
  }

  await prisma.post.updateMany({
    where: {
      id: {
        in: posts.map((post) => post.id),
      },
    },
    data: {
      status: "publish",
    },
  });

  revalidateTag("blog-posts");

  for (const post of posts) {
    revalidateTag(`post-${post.id}`);
    revalidateTag(`post-slug-${post.slug}`);

    revalidatePath(`/blog/${post.slug}`);
  }

  revalidatePath("/blog");
  revalidatePath("/");

  return NextResponse.json({
    updated: posts.length,
  });
}
