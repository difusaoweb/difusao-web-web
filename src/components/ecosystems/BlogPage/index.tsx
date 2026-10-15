"use client";
import * as React from "react";
import Link from "next/link";
import NextImage from "next/image";
import {
  IconCalendar,
  IconClock,
  IconGauge,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

import { Post } from "@/generated/prisma";
import { fbq } from "@/lib/metaPixel";
import { difficultyChipClass, difficultyLabel } from "@/constants/difficulty";

const colors = {
  primary: "#667eea",
  secondary: "#764ba2",
  background: "#f9f9f9",
  text: "#333333",
};

interface BlogPageProps {
  posts: Post[];
}

export const BlogPage = ({ posts }: BlogPageProps) => {
  React.useEffect(() => {
    fbq("track", "PageView");
  }, []);

  return (
    <div className="bg-[#f9f9f9] min-h-screen">
      <div
        className="text-white py-14 md:py-18"
        style={{
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
        }}
      >
        <div className="container-md">
          <span className="inline-block mb-4 px-3 py-1 rounded-full text-sm bg-white/15 text-white">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold">Blog Difusão Web</h1>
          <p className="mt-4 max-w-xl text-white/95">
            Conteúdo sobre marketing, operações, gestão e finanças para pequenos
            lojistas.
          </p>
        </div>
      </div>

      <div className="container-xxl py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                        ? new Date(post.publishedAt).toLocaleDateString(
                            "pt-BR",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            },
                          )
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
                        difficultyChipClass[post.difficulty] ??
                        "bg-gray-100 text-gray-800"
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

        <div
          className="mt-12 p-10 text-center rounded-lg text-white"
          style={{
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
          }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Receba novos conteúdos
          </h2>
          <p className="mb-6">Em breve você poderá assinar nossa newsletter.</p>
          <a
            href="https://wa.me/5585992910554?text=Ol%C3%A1%2C%20gostaria%20de%20testar%20o%20Difus%C3%A3o%20Core%20por%2014%20dias%20gr%C3%A1tis!"
            className="inline-flex items-center gap-2 px-8 py-3 rounded bg-white text-[#667eea] font-bold text-base hover:bg-gray-100 hover:-translate-y-0.5 transition-all shadow-md"
          >
            <IconBrandWhatsapp size={22} stroke={1.5} />
            Inscrever-se
          </a>
        </div>
      </div>
    </div>
  );
};
