import { prisma } from "@/lib/prisma";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  if (request.headers.get("x-vercel-cron") !== "1") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const now = new Date();

  const result = await prisma.post.updateMany({
    where: {
      status: "future",
      publishedAt: {
        lte: now,
      },
    },
    data: {
      status: "publish",
    },
  });

  if (result.count > 0) {
    revalidateTag("blog-posts");
    revalidatePath("/blog");
    revalidatePath("/");
  }

  return NextResponse.json(result);
}
