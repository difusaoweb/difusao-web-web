import * as React from "react";

import { BlogPostPage } from "@/components/ecosystems/BlogPostPage";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Públicos personalizados no Meta Ads | Difusão Web",
  description:
    "Aprenda a criar e segmentar públicos personalizados no Meta Ads para sua loja vender mais.",
  keywords: [
    "Meta Ads",
    "Facebook Ads",
    "Instagram Ads",
    "Públicos Personalizados",
    "Vender",
    "Vendas",
    "Marketing",
    "Difusão Web",
    "Loja",
    "Lojista",
  ],
  alternates: {
    canonical:
      "https://difusaoweb.com/blog/publicos-personalizados-no-meta-ads",
  },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: "https://difusaoweb.com/blog/publicos-personalizados-no-meta-ads",
    siteName: "Difusão Web",
    title: "Públicos personalizados no Meta Ads",
    description:
      "Aprenda a criar e segmentar públicos personalizados no Meta Ads para sua loja vender mais.",
    images: [
      {
        url: "/posts/publicos-personalizados-no-meta-ads-thumbnail.png",
        width: 1280,
        height: 720,
        alt: "Públicos personalizados no Meta Ads",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Públicos personalizados no Meta Ads",
    description:
      "Aprenda a segmentar seus públicos no Meta Ads para sua loja vender mais.",
    images: ["/posts/publicos-personalizados-no-meta-ads-thumbnail.png"],
  },
};

export default function Page() {
  return (
    <>
      <BlogPostPage />
    </>
  );
}
