"use client";
import * as React from "react";
import { AppBar, Box, Container, Toolbar, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const pages = [
  { slug: "blog", title: "Blog" },
  { slug: "operations", title: "Difusão Operations" },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#9300d1", boxShadow: "none !important" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ gap: 5 }}>
          <Link href="/" style={{ display: "flex" }}>
            <Image
              src="/logo-white-difusao-web.png"
              width={150}
              height={39}
              alt="Logo da Difusão Web"
            />
          </Link>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {pages.map((page) => (
              <Link
                href={`/${page.slug}`}
                passHref
                legacyBehavior
                key={page.slug}
              >
                <Button
                  sx={{
                    color: pathname.startsWith(`/${page.slug}`)
                      ? "#fff"
                      : "#eee",
                    textTransform: "none",
                    fontWeight: pathname.startsWith(`/${page.slug}`)
                      ? 900
                      : undefined,
                  }}
                >
                  {page.title}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
