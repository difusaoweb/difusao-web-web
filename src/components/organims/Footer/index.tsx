import * as React from "react";
import {
  Box,
  Container,
  IconButton,
  Typography,
  SvgIcon,
  Avatar,
  Link as LinkMui,
  Button,
} from "@mui/material";
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
    link: "https://www.instagram.com/difusaoweb",
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
    <Box
      sx={{
        justifyContent: "center",
        justifyItems: "center",
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        paddingTop: 4,
        paddingBottom: 6,
        backgroundColor: "#f5f5f7",
      }}
      component="footer"
    >
      <Container
        maxWidth="xxl"
        sx={{
          justifyItems: "center",
          display: "flex",
          alignContent: "center",
          // justifyContent: "space-between",
          alignItems: "center",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
        }}
        component="section"
      >
        <Typography
          component="small"
          variant="body2"
          color="rgba(0, 0, 0, 0.56)"
          sx={{
            fontWeight: 400,
            marginRight: "auto",
          }}
        >
          Copyright © {new Date().getFullYear()} Difusão Web
        </Typography>
        <Box
          component="nav"
          sx={{
            marginRight: 4,
          }}
        >
          <Box
            component="ul"
            sx={{
              display: "flex",
              padding: 0,
              margin: 0,
              listStyleType: "none",
              gap: { xs: 1, lg: 3 },
              flexDirection: {
                xs: "column",
                lg: "row",
              },
            }}
          >
            {links.map((link) => (
              <Box component="li" key={link.link}>
                <Link href={link.link} passHref legacyBehavior target="_blank">
                  <LinkMui
                    sx={{
                      color: "unset",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {link.title}
                  </LinkMui>
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          {linksSocial.map(({ link, src, alt }) => (
            <Link
              target="_blank"
              href={link}
              passHref
              legacyBehavior
              key={link}
            >
              <Button
                sx={{
                  padding: 1,
                  borderRadius: 50,
                  minWidth: "unset",
                  boxShadow: "none !important",
                  "&:hover": {
                    backgroundColor: "#333333",
                  },
                }}
                variant="contained"
                target="_blank"
                href={link}
              >
                <Image src={src} width={24} height={24} alt={alt} />
              </Button>
            </Link>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
