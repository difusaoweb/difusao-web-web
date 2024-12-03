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
        paddingTop: 1,
        paddingBottom: 1,
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
          justifyContent: "space-between",
          alignItems: "center",
        }}
        component="section"
      >
        <Typography
          component="small"
          variant="body2"
          color="rgba(0, 0, 0, 0.56)"
        >
          Copyright © 2024 Difusão Web. Todos os direitos reservados.
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          {links.map(({ link, src, alt }) => (
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
