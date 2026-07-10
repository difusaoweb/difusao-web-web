import * as React from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { AccessTime, CalendarMonth } from "@mui/icons-material";

import { Post } from "@/generated/prisma";

interface BlogPageProps {
  posts: Post[];
}
export const SectionBlogPage = ({ posts }: BlogPageProps) => (
  <Container
    maxWidth="xxl"
    sx={{
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
    <Grid container spacing={3}>
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
            <Box
              sx={{
                height: 180,
                background: post.thumbnail
                  ? `url(${post.thumbnail})`
                  : "linear-gradient(135deg,#667eea,#764ba2)",
                backgroundSize: "cover",
                backgroundPosition: "center",
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
              <Typography variant="h6" fontWeight={700} gutterBottom>
                {post.title}
              </Typography>
              <Typography color="text.secondary">{post.subtitle}</Typography>
              <Stack direction="row" spacing={2} mt={3}>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <CalendarMonth fontSize="small" />
                  <Typography variant="caption">
                    {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <AccessTime fontSize="small" />
                  <Typography variant="caption">
                    {post.readingTime} minutos
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
            <CardActions sx={{ p: 2 }}>
              <Button
                fullWidth
                variant="contained"
                tabIndex={-1}
                disableRipple
                sx={{ pointerEvents: "none" }}
              >
                Ler artigo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);
