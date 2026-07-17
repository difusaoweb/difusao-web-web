import * as React from "react";

import { BlogPage } from "@/components/ecosystems/BlogPage";
import { getPosts } from "@/services/Post/getPosts";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Difusão Web",
  description:
    "Artigos sobre gestão, marketing, comercial, operacional e financeiro para lojas de pequeno e médio porte.",
  keywords: [
    "Blog",
    "Gestão",
    "Marketing",
    "Comercial",
    "Operacional",
    "Financeiro",
    "Loja",
    "Lojista",
    "Difusão Web",
  ],
  alternates: {
    canonical: "https://difusaoweb.com/blog",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://difusaoweb.com/blog",
    siteName: "Difusão Web",
    title: "Blog | Difusão Web",
    description:
      "Conteúdo sobre gestão, marketing, comercial, operacional e financeiro para lojas de pequeno e médio porte.",
    images: [
      {
        url: "/logo-white-difusao-web-blog-og.png",
        width: 1200,
        height: 630,
        alt: "Difusão Web Blog",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Blog | Difusão Web",
    description:
      "Artigos sobre gestão, marketing, comercial, operacional e financeiro para lojas de pequeno e médio porte.",
  },
};

export const revalidate = false;

export default async function Page() {
  const posts = await getPosts(-1);

  return (
    <>
      <BlogPage posts={posts} />
    </>
  );
}
