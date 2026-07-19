import * as React from "react";
import Link from "next/link";
import NextImage from "next/image";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Container,
  Grid,
  Stack,
  Typography,
  Chip,
} from "@mui/material";
import { AccessTime, CalendarMonth, Speed } from "@mui/icons-material";

import { Post } from "@/generated/prisma";
import { difficultyColor, difficultyLabel } from "@/constants/difficulty";

interface BlogPageProps {
  posts: Post[];
}
export const SectionBlogPage = ({ posts }: BlogPageProps) => (
  <Container
    maxWidth="xxl"
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      py: { xs: 5, md: 7 },
    }}
  >
    <Typography
      component="h2"
      variant="h4"
      gutterBottom
      sx={{
        textAlign: "center",
        fontSize: { xs: "2rem", lg: "3rem" },
        fontWeight: { lg: 400 },
        lineHeight: { lg: 1.167 },
        letterSpacing: { lg: "0em" },
      }}
    >
      Últimos conteúdos
    </Typography>
    <Grid
      container
      spacing={3}
      sx={{
        mb: 3,
      }}
    >
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.slug}>
          <Card
            component={Link}
            href={`/blog/${post.slug}`}
            sx={{
              textDecoration: "none",
              color: "inherit",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              transition: ".2s",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: 6,
              },
            }}
          >
            <NextImage
              src={post.thumbnail}
              width={480}
              height={270}
              alt={`Thumbnail dedicado do Blog Difusão Web sobre ${post.title}`}
              quality={100}
              style={{
                objectFit: "cover",
                width: "100%",
                aspectRatio: "16 / 9",
                objectPosition: "center",
                height: "auto",
              }}
            />
            <CardContent sx={{ flex: 1 }}>
              {/* <Chip
                  label={post.category}
                  size="small"
                  color="primary"
                  sx={{
                    mb: 2,
                    backgroundColor:
                      post.category === "Marketing"
                        ? "#058dc1"
                        : post.category === "Operacional"
                          ? "#cd181f"
                          : post.category === "Financeiro"
                            ? "#f5c130"
                            : "#0e664e",
                    color: "#fff",
                  }}
                /> */}
              <Typography
                variant="h6"
                component="h3"
                fontWeight={700}
                gutterBottom
              >
                {post.title}
              </Typography>
              <Typography color="text.secondary">{post.subtitle}</Typography>
              <Stack direction="row" spacing={2} mt={3}>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <CalendarMonth fontSize="small" />
                  <Typography variant="caption" sx={{ lineHeight: 1 }}>
                    {post.publishedAt
                      ? new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                      : "Data indisponível"}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <AccessTime fontSize="small" />
                  <Typography variant="caption" sx={{ lineHeight: 1 }}>
                    {post.readingTime} minutos
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <Speed fontSize="small" />
                  <Chip
                    size="small"
                    color={difficultyColor[post.difficulty]}
                    label={difficultyLabel[post.difficulty]}
                  />
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    <Button
      component={Link}
      variant="contained"
      href="/blog"
      size="large"
      sx={{
        textTransform: "unset",
      }}
    >
      Ver todos
    </Button>
  </Container>
);
