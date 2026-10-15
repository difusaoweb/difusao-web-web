import * as React from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    link: "/legal/privacy-policy",
    title: "Política de privacidade",
  },
  {
    link: "/legal/cloud-terms-of-service",
    title: "Termos",
  },
];

const linksSocial = [
  {
    link: "https://www.instagram.com/difusao.w",
    src: "/instagram-icon.png",
    alt: "Difusão Web no Instagram",
  },
  {
    link: "https://www.youtube.com/@difusaoweb",
    src: "/youtube-icon.png",
    alt: "Difusão Web no YouTube",
  },
  {
    link: "https://www.tiktok.com/@difusaoweb",
    src: "/tiktok-icon.png",
    alt: "Difusão Web no TikTok",
  },
];

export const Footer = () => {
  return (
    <footer className="flex justify-center items-center py-8 bg-[#f5f5f7]">
      <section className="container-xxl flex flex-col lg:flex-row items-center justify-center">
        <small className="text-sm font-normal text-black/56 mr-auto mb-4 lg:mb-0">
          Copyright © {new Date().getFullYear()} Difusão Web
        </small>
        <nav className="mr-4 mb-4 lg:mb-0">
          <ul className="flex flex-col lg:flex-row list-none p-0 m-0 gap-1 lg:gap-3">
            {links.map((link) => (
              <li key={link.link}>
                <Link
                  href={link.link}
                  target="_blank"
                  className="text-inherit no-underline hover:underline"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-1">
          {linksSocial.map(({ link, src, alt }) => (
            <a
              key={link}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary hover:bg-[#333333] transition-colors inline-flex items-center justify-center min-w-0 shadow-none"
            >
              <Image src={src} width={24} height={24} alt={alt} />
            </a>
          ))}
        </div>
      </section>
    </footer>
  );
};
