"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const pages = [
  { slug: "operations", title: "Difusão Operations" },
  { slug: "social", title: "Difusão Social" },
  { slug: "blog", title: "Blog" },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-none">
      <div className="container-xl">
        <div className="flex items-center gap-5 min-h-14 py-2">
          <Link href="/" className="flex shrink-0">
            <Image
              src="/logo-white-difusao-web.png"
              width={150}
              height={39}
              alt="Logo da Difusão Web"
            />
          </Link>

          <nav className="flex flex-1 items-center gap-1">
            {pages.map((page) => {
              const isActive = pathname.startsWith(`/${page.slug}`);
              return (
                <Link
                  key={page.slug}
                  href={`/${page.slug}`}
                  className={`px-3 py-2 text-sm rounded transition-colors ${
                    isActive
                      ? "text-white font-black"
                      : "text-[#eee] font-normal hover:text-white"
                  }`}
                >
                  {page.title}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};
