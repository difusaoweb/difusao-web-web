import { Inter } from "next/font/google";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { GoogleAnalytics } from "@next/third-parties/google";

import { theme } from "@/styles/theme";
import { Header } from "@/components/molecules/Header";
import { Footer } from "@/components/organims/Footer";

import type { Metadata } from "next";
import Script from "next/script";

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
      <head>
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2179093299356861');
fbq('track', 'PageView');`}
        </Script>
      </head>
      <body className={inter.className}>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2179093299356861&ev=PageView&noscript=1"
          />
        </noscript>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Box component="main">{children}</Box>
          <Footer />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ""} />
    </html>
  );
}
