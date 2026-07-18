"use server";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";
import { Difficulty, PostStatus } from "@/generated/prisma";

export async function updatePost(id: string, formData: FormData) {
  const slug = String(formData.get("slug"));
  const title = String(formData.get("title"));
  const subtitle = String(formData.get("subtitle"));
  const readingTime = Number(formData.get("readingTime"));
  const difficulty = String(formData.get("difficulty")) as Difficulty;
  const thumbnail = String(formData.get("thumbnail") ?? "").trim();
  const thumbnailFull = String(formData.get("thumbnailFull") ?? "").trim();
  const content = String(formData.get("content"));
  const status = String(formData.get("status") ?? "draft") as PostStatus;
  const publishedAtValue = String(formData.get("publishedAt") ?? "").trim();

  const currentPost = await prisma.post.findUniqueOrThrow({
    where: {
      id,
    },
    select: {
      publishedAt: true,
    },
  });

  await prisma.post.update({
    where: {
      id,
    },
    data: {
      slug,
      title,
      subtitle,
      readingTime,
      difficulty,
      thumbnail,
      thumbnailFull: thumbnailFull || thumbnail,
      content,
      status,
      publishedAt: publishedAtValue
        ? new Date(publishedAtValue)
        : (currentPost.publishedAt ?? new Date()),
    },
  });

  revalidateTag("blog-posts");
  revalidateTag(`post-${id}`);
  // revalidateTag(`post-slug-${oldSlug}`);
  revalidateTag(`post-slug-${slug}`);
  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  revalidatePath("/");

  redirect("/admin/posts");
}
