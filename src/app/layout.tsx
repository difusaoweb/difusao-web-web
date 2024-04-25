import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { theme } from "@/styles/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Difusão Web | ⚛ Controle Financeiro, Marketing, Comercial e Operacional da sua loja",
  description:
    "⚛ Controle financeiro, marketing, comercial e operacional da sua loja, na palma da sua mão. 👇",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
