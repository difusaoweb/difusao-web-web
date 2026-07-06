import * as React from "react";

import { OperationsPage } from "@/components/ecosystems/OperationsPage";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Difusão Operations - Gestão para Pequenos Lojistas",
  description:
    "Sistema de gestão simples e poderoso para pequenos lojistas. Controle estoque, vendas e veja seu lucro em tempo real. Teste 14 dias grátis.",
  openGraph: {
    title: "Difusão Operations - Gestão Simples. Lucro Visível.",
    description:
      "Sistema de gestão para pequenos lojistas. Controle total do estoque, vendas e lucro.",
    url: "https://difusaoweb.com/operations",
    siteName: "Difusão Web",
    images: [
      {
        url: "https://difusaoweb.com/background-tela-smarphone.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <OperationsPage />
    </>
  );
}
