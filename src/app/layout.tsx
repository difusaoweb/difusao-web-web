import { Inter } from "next/font/google";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { GoogleAnalytics } from "@next/third-parties/google";

import { SessionProvider } from "@/components/atoms/SessionProvider";
import { theme } from "@/styles/theme";
import { Header } from "@/components/molecules/Header";

import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Difusão Web",
  description:
    "Difusão Web, superando desafios. Ferramentas para auxiliar lojistas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <SessionProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Box component="main">{children}</Box>
          </ThemeProvider>
        </SessionProvider>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ""} />
    </html>
  );
}
