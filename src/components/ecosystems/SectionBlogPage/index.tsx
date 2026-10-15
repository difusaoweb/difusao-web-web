import Link from "next/link";
import NextImage from "next/image";
import { IconCalendar, IconClock, IconGauge } from "@tabler/icons-react";

import { Post } from "@/generated/prisma";
import { difficultyChipClass, difficultyLabel } from "@/constants/difficulty";

interface BlogPageProps {
  posts: Post[];
}

export const SectionBlogPage = ({ posts }: BlogPageProps) => (
  <div className="container-xxl flex flex-col items-center py-10 md:py-14">
    <h2 className="text-center text-3xl lg:text-5xl font-normal lg:leading-tight mb-2">
      Últimos conteúdos
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6 w-full">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="no-underline text-inherit h-full flex flex-col bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
        >
          <NextImage
            src={post.thumbnail}
            width={480}
            height={270}
            alt={`Thumbnail dedicado do Blog Difusão Web sobre ${post.title}`}
            quality={100}
            className="object-cover object-center w-full aspect-video h-auto"
          />
          <div className="flex-1 p-4">
            <h3 className="text-lg font-bold mb-2">{post.title}</h3>
            <p className="text-gray-600 text-sm">{post.subtitle}</p>
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <div className="flex items-center gap-1">
                <IconCalendar size={16} stroke={1.5} />
                <span className="text-xs leading-none">
                  {post.publishedAt
                    ? new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                    : "Data indisponível"}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <IconClock size={16} stroke={1.5} />
                <span className="text-xs leading-none">
                  {post.readingTime} minutos
                </span>
              </div>
              <div className="flex items-center gap-1">
                <IconGauge size={16} stroke={1.5} />
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    difficultyChipClass[post.difficulty] ?? "bg-gray-100 text-gray-800"
                  }`}
                >
                  {difficultyLabel[post.difficulty]}
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
    <Link
      href="/blog"
      className="inline-flex items-center justify-center px-6 py-3 rounded bg-primary text-white text-base font-medium hover:opacity-90 transition-opacity"
    >
      Ver todos
    </Link>
  </div>
);
