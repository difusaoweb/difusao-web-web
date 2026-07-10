"use server";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";
import { Difficulty } from "@/generated/prisma";

export async function updatePost(id: string, formData: FormData) {
  const slug = String(formData.get("slug"));
  const title = String(formData.get("title"));
  const subtitle = String(formData.get("subtitle"));
  const readingTime = Number(formData.get("readingTime"));
  const difficulty = String(formData.get("difficulty")) as Difficulty;
  const thumbnail = String(formData.get("thumbnail"));
  const content = String(formData.get("content"));
  const published = formData.get("published") === "true";

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
      content,
      published,
      publishedAt: currentPost.publishedAt ?? new Date(),
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
