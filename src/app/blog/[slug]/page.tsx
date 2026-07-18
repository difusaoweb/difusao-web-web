import { notFound } from "next/navigation";

import { BlogPostPage } from "@/components/ecosystems/BlogPostPage";
import { getPostBySlug } from "@/services/Post/getPostBySlug";

import type { Metadata } from "next";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  return {
    title: `${post.title} | Difusão Web`,
    description: post.subtitle,
    alternates: {
      canonical: `https://difusaoweb.com/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      locale: "pt_BR",
      url: `https://difusaoweb.com/blog/${post.slug}`,
      siteName: "Difusão Web",
      title: post.title,
      description: post.subtitle,
      images: [
        {
          url: post.thumbnailFull ?? post.thumbnail,
          width: 1280,
          height: 720,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.subtitle,
      images: [post.thumbnailFull ?? post.thumbnail],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post || post.status !== "publish") {
    notFound();
  }

  return <BlogPostPage post={post} />;
}
