"use client";
import * as React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Paper,
  Divider,
  Link,
  Chip,
} from "@mui/material";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import NextLink from "next/link";
import NextImage from "next/image";

import { Difficulty, Post } from "@/generated/prisma";
import { fbq } from "@/lib/metaPixel";

interface BlogPostPageProps {
  post: Post;
}

export function BlogPostPage({ post }: BlogPostPageProps) {
  const colors = {
    primary: "#667eea",
    secondary: "#764ba2",
    success: "#27ae60",
    warning: "#f39c12",
    danger: "#e74c3c",
    background: "#f9f9f9",
    text: "#333333",
  };

  React.useEffect(() => {
    fbq("track", "PageView");
    fbq("track", "ViewContent", {
      content_type: "article",
      content_name: post.title,
      content_category: "Marketing",
    });
  }, [post.title]);

  return (
    <Box
      component="article"
      sx={{ backgroundColor: "#fff", minHeight: "100vh" }}
    >
      <Box
        component="header"
        sx={{
          py: { xs: 3, md: 4 },
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#fafbfc",
          borderBottom: "1px solid #dfe2e6",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "column",
            zIndex: 1,
            "& > img": {
              width: { xs: "100%", md: "80%" },
              height: "auto",
              mb: 3,
            },
          }}
        >
          <NextImage
            src={post.thumbnailFull ?? post.thumbnail}
            width={1280}
            height={720}
            alt={`Header dedicado do Blog Difusão Web sobre ${post.title}`}
            style={{
              objectFit: "cover",
            }}
          />
          {/* <Chip
            label="Meta Ads • Estratégia Digital"
            size="small"
            sx={{
              backgroundColor: "rgba(0,0,0,0.8)",
              color: "white",
              mb: 2,
              fontWeight: 600,
              width: "min-content",
            }}
          /> */}
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "2rem", md: "2.8rem" },
            }}
          >
            {post.title}
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{
              fontWeight: 300,
              opacity: 0.95,
              maxWidth: "600px",
              fontSize: { xs: "1rem", md: "1.2rem" },
              mb: 2,
            }}
          >
            {post.subtitle}
          </Typography>
          {/* META INFO */}
          <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
            <Box>
              <Typography
                variant="caption"
                sx={{ color: "#999", display: "block" }}
              >
                Tempo de leitura
              </Typography>
              <Typography sx={{ fontWeight: 600, color: colors.text }}>
                {post.readingTime} minutos
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="caption"
                sx={{ color: "#999", display: "block" }}
              >
                Data
              </Typography>
              <Typography
                component="time"
                sx={{ fontWeight: 600, color: colors.text }}
              >
                {post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })
                  : "Data indisponível"}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="caption"
                sx={{ color: "#999", display: "block" }}
              >
                Nível
              </Typography>
              <Typography sx={{ fontWeight: 600, color: colors.text }}>
                {post.difficulty === Difficulty.BEGINNER
                  ? "Fácil"
                  : post.difficulty === Difficulty.INTERMEDIATE
                    ? "Intermediário"
                    : "Avançado"}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container
        component="section"
        maxWidth="lg"
        sx={{ py: { xs: 3, md: 4 } }}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <Typography variant="h3" fontWeight={700} gutterBottom mt={5}>
                {children}
              </Typography>
            ),

            h2: ({ children }) => (
              <Typography variant="h4" fontWeight={700} gutterBottom mt={4}>
                {children}
              </Typography>
            ),

            h3: ({ children }) => (
              <Typography variant="h5" fontWeight={700} gutterBottom mt={3}>
                {children}
              </Typography>
            ),

            p: ({ children }) => (
              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  lineHeight: 1.9,
                }}
              >
                {children}
              </Typography>
            ),

            ul: ({ children }) => (
              <Box component="ul" sx={{ pl: 3, mb: 2 }}>
                {children}
              </Box>
            ),

            ol: ({ children }) => (
              <Box component="ol" sx={{ pl: 3, mb: 2 }}>
                {children}
              </Box>
            ),

            li: ({ children }) => (
              <Typography
                component="li"
                sx={{
                  mb: 1,
                }}
              >
                {children}
              </Typography>
            ),

            blockquote: ({ children }) => (
              <Box
                sx={{
                  borderLeft: 4,
                  borderColor: "primary.main",
                  bgcolor: "grey.100",
                  py: 1,
                  px: 3,
                  my: 3,
                  fontStyle: "italic",
                }}
              >
                {children}
              </Box>
            ),

            code({ children }) {
              return (
                <Box
                  component="code"
                  sx={{
                    bgcolor: "grey.100",
                    px: 0.5,
                    py: 0.2,
                    borderRadius: 1,
                    fontFamily: "monospace",
                  }}
                >
                  {children}
                </Box>
              );
            },

            pre({ children }) {
              return (
                <Box
                  component="pre"
                  sx={{
                    bgcolor: "#1e1e1e",
                    color: "#fff",
                    p: 2,
                    borderRadius: 2,
                    overflowX: "auto",
                    my: 3,
                  }}
                >
                  {children}
                </Box>
              );
            },

            a: ({ href, children }) => (
              <Link
                href={href ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                component={NextLink}
              >
                {children}
              </Link>
            ),

            img: ({ src, alt }) => (
              <Box
                component="img"
                src={src}
                alt={alt}
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  my: 3,
                }}
              />
            ),

            hr: () => <Divider sx={{ my: 4 }} />,
          }}
        >
          {post.content}
        </ReactMarkdown>
      </Container>

      <Container component="footer" maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
        <Paper
          elevation={0}
          sx={{
            p: 4,
            backgroundColor: "rgba(102, 126, 234, 0.05)",
            borderRadius: 2,
            border: `2px solid ${colors.primary}`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography sx={{ color: "#999", mb: 2 }}>
            Gostou deste conteúdo?
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="https://wa.me/5585992910554?text=Ol%C3%A1%2C%20gostaria%20de%20testar%20o%20Difus%C3%A3o%20Core%20por%2014%20dias%20gr%C3%A1tis!"
            sx={{
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
              color: "white",
              fontWeight: 700,
              py: 1.5,
              px: 5,
              fontSize: "1rem",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Compartilhe este Artigo
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}
