import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Difusão Web",
  description:
    "Loja virtual + Painel administrativo. Tenha uma loja online completa, venda e fidelize seus clientes. Administre o setor Finançeiro, Comercial, Marketing e Operacial de sua loja online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
