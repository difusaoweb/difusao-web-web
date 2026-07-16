"use server";
import { redirect } from "next/navigation";
import { revalidatePath, revalidateTag } from "next/cache";

import { Difficulty } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";

export async function createPost(formData: FormData) {
  const slug = String(formData.get("slug"));
  const title = String(formData.get("title"));
  const subtitle = String(formData.get("subtitle"));
  const readingTime = Number(formData.get("readingTime"));
  const difficulty = String(formData.get("difficulty")) as Difficulty;
  const thumbnail = String(formData.get("thumbnail") ?? "").trim();
  const thumbnailFull = String(formData.get("thumbnailFull") ?? "").trim();
  const content = String(formData.get("content"));

  await prisma.post.create({
    data: {
      slug,
      title,
      subtitle,
      readingTime,
      difficulty,
      thumbnail,
      thumbnailFull: thumbnailFull || thumbnail,
      content,
      published: true,
      publishedAt: new Date(),
    },
  });

  revalidateTag("blog-posts");
  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);

  redirect("/admin");
}
