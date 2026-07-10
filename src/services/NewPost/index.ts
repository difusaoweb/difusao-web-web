"use server";
import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";

import { Difficulty } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";

export async function createPost(formData: FormData) {
  const slug = String(formData.get("slug"));
  const title = String(formData.get("title"));
  const subtitle = String(formData.get("subtitle"));
  const readingTime = Number(formData.get("readingTime"));
  const difficulty = String(formData.get("difficulty")) as Difficulty;
  const thumbnail = String(formData.get("thumbnail"));
  const content = String(formData.get("content"));

  await prisma.post.create({
    data: {
      slug,
      title,
      subtitle,
      readingTime,
      difficulty,
      thumbnail,
      content,
    },
  });
  revalidateTag("blog-posts");

  redirect("/admin");
}
