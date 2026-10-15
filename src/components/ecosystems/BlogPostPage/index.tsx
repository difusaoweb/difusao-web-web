"use client";
import * as React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import NextLink from "next/link";
import NextImage from "next/image";
import {
  IconCalendar,
  IconClock,
  IconGauge,
} from "@tabler/icons-react";

import { Post } from "@/generated/prisma";
import { fbq } from "@/lib/metaPixel";
import { difficultyChipClass, difficultyLabel } from "@/constants/difficulty";

interface BlogPostPageProps {
  post: Post;
}

export function BlogPostPage({ post }: BlogPostPageProps) {
  const colors = {
    primary: "#667eea",
    secondary: "#764ba2",
    success: "#27ae60",
    warning: "#f39c12",
    danger: "#e74c3c",
    background: "#f9f9f9",
    text: "#333333",
  };

  React.useEffect(() => {
    fbq("track", "PageView");
    fbq("track", "ViewContent", {
      content_type: "article",
      content_name: post.title,
      content_category: "Marketing",
    });
  }, [post.title]);

  return (
    <article className="bg-white min-h-screen">
      <header className="py-6 md:py-8 relative overflow-hidden bg-[#fafbfc] border-b border-[#dfe2e6]">
        <div className="container-lg flex flex-col z-10">
          <NextImage
            src={post.thumbnailFull ?? post.thumbnail}
            width={1280}
            height={720}
            alt={`Header dedicado do Blog Difusão Web sobre ${post.title}`}
            className="object-cover w-full md:w-4/5 h-auto mb-6 rounded"
          />
          <h1 className="font-bold mb-4 text-3xl md:text-[2.8rem] leading-tight">
            {post.title}
          </h1>
          <p className="font-light opacity-95 max-w-xl text-base md:text-xl mb-4">
            {post.subtitle}
          </p>
          <div className="flex gap-6 flex-wrap">
            <div>
              <div className="flex items-center gap-1">
                <IconClock size={16} stroke={1.5} className="text-[#555]" />
                <span className="text-xs text-[#555] block leading-none">
                  Tempo de leitura
                </span>
              </div>
              <p className="font-semibold text-[#333333]">
                {post.readingTime} minutos
              </p>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <IconCalendar size={16} stroke={1.5} className="text-[#555]" />
                <span className="text-xs text-[#555] block leading-none">
                  Data
                </span>
              </div>
              <time className="font-semibold text-[#333333]">
                {post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })
                  : "Data indisponível"}
              </time>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <IconGauge size={16} stroke={1.5} className="text-[#555]" />
                <span className="text-xs text-[#555] block leading-none">
                  Nível
                </span>
              </div>
              <span
                className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium mt-0.5 ${
                  difficultyChipClass[post.difficulty] ??
                  "bg-gray-100 text-gray-800"
                }`}
              >
                {difficultyLabel[post.difficulty]}
              </span>
            </div>
          </div>
        </div>
      </header>

      <section className="container-lg py-6 md:py-8 prose-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <h1 className="text-3xl font-bold mb-4 mt-10">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-2xl font-bold mb-3 mt-8">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl font-bold mb-2 mt-6">{children}</h3>
            ),
            p: ({ children }) => (
              <p className="mb-4 leading-[1.9] text-base">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="pl-6 mb-4 list-disc">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="pl-6 mb-4 list-decimal">{children}</ol>
            ),
            li: ({ children }) => <li className="mb-2">{children}</li>,
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-primary bg-gray-100 py-2 px-6 my-6 italic">
                {children}
              </blockquote>
            ),
            code({ children }) {
              return (
                <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono text-sm">
                  {children}
                </code>
              );
            },
            pre({ children }) {
              return (
                <pre className="bg-[#1e1e1e] text-white p-4 rounded-lg overflow-x-auto my-6">
                  {children}
                </pre>
              );
            },
            a: ({ href, children }) => (
              <NextLink
                href={href ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:opacity-80"
              >
                {children}
              </NextLink>
            ),
            img: ({ src, alt }) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={src}
                alt={alt ?? ""}
                className="w-full rounded-lg my-6"
              />
            ),
            hr: () => <hr className="my-8 border-gray-200" />,
          }}
        >
          {post.content}
        </ReactMarkdown>
      </section>

      <footer className="container-md py-8 md:py-12">
        <div
          className="p-8 rounded-lg border-2 flex flex-col items-center text-center"
          style={{
            backgroundColor: "rgba(102, 126, 234, 0.05)",
            borderColor: colors.primary,
          }}
        >
          <p className="text-[#999] mb-4">Gostou deste conteúdo?</p>
          <a
            href="https://wa.me/5585992910554?text=Ol%C3%A1%2C%20gostaria%20de%20testar%20o%20Difus%C3%A3o%20Core%20por%2014%20dias%20gr%C3%A1tis!"
            className="inline-flex items-center justify-center px-8 py-3 rounded text-white font-bold text-base hover:-translate-y-0.5 transition-all shadow-md"
            style={{
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
            }}
          >
            Compartilhe este Artigo
          </a>
        </div>
      </footer>
    </article>
  );
}
