import * as React from "react";
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Button,
  Tooltip,
  Avatar,
} from "@mui/material";
import { Adb as AdbIcon, Menu as MenuIcon } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";

const pages = [{ slug: "store", title: "Difusão Store" }];

export const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#9300d1", boxShadow: "none !important" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ gap: 5 }}>
          <Link href="/" style={{ display: "flex" }}>
            <Image
              src="/logo-white-difusão-web.png"
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
                <Button sx={{ color: "white", textTransform: "none" }}>
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
