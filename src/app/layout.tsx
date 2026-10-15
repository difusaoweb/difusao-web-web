import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import Image from "next/image";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

import "./globals.css";
import { Header } from "@/components/molecules/Header";
import { Footer } from "@/components/organims/Footer";

import type { Metadata } from "next";

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
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
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
      <body
        className="min-h-screen flex flex-col font-sans antialiased"
        suppressHydrationWarning
      >
        <noscript>
          <Image
            height={1}
            width={1}
            style={{ display: "none" }}
            alt=""
            src="https://www.facebook.com/tr?id=2179093299356861&ev=PageView&noscript=1"
            unoptimized
          />
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ""} />
      </body>
    </html>
  );
}
