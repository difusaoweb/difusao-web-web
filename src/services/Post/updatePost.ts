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
  const publishedAt = publishedAtValue
    ? new Date(publishedAtValue)
    : new Date();

  const currentPost = await prisma.post.findUniqueOrThrow({
    where: {
      id,
    },
    select: {
      slug: true,
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
      publishedAt,
    },
  });

  revalidateTag("blog-posts");
  revalidateTag(`post-${id}`);
  revalidateTag(`post-slug-${currentPost.slug}`);
  revalidateTag(`post-slug-${slug}`);
  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  revalidatePath("/");

  redirect("/admin/posts");
}
