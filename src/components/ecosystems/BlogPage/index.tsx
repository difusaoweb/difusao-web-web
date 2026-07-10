import * as React from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  Search,
  AccessTime,
  CalendarMonth,
  WhatsApp as WhatsAppIcon,
} from "@mui/icons-material";

import { Post } from "@/generated/prisma";

const colors = {
  primary: "#667eea",
  secondary: "#764ba2",
  background: "#f9f9f9",
  text: "#333333",
};

interface BlogPageProps {
  posts: Post[];
}
export const BlogPage = ({ posts }: BlogPageProps) => (
  <Box sx={{ backgroundColor: colors.background, minHeight: "100vh" }}>
    <Box
      sx={{
        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
        color: "white",
        py: { xs: 7, md: 9 },
      }}
    >
      <Container maxWidth="md">
        <Chip
          label="Blog"
          sx={{ mb: 2, bgcolor: "rgba(255,255,255,.15)", color: "#fff" }}
        />
        <Typography variant="h2" fontWeight={700}>
          Blog Difusão Web
        </Typography>
        <Typography mt={2} maxWidth={700}>
          Conteúdo sobre marketing, operações, gestão e finanças para pequenos
          lojistas.
        </Typography>
      </Container>
    </Box>

    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* <Paper sx={{ p: 3, mb: 4 }}>
        <Stack spacing={2}>
          <TextField
            fullWidth
            placeholder="Pesquisar artigos..."
            InputProps={{ startAdornment: <Search sx={{ mr: 1 }} /> }}
          />
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {["Todos", "Marketing", "Operações", "Financeiro", "Gestão"].map(
              (c) => (
                <Chip
                  key={c}
                  label={c}
                  clickable
                  color={c === "Todos" ? "primary" : "default"}
                />
              ),
            )}
          </Stack>
        </Stack>
      </Paper> */}

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
                      {post.readingTime}
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

      <Paper
        sx={{
          mt: 6,
          p: 5,
          textAlign: "center",
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
          color: "#fff",
        }}
      >
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Receba novos conteúdos
        </Typography>
        <Typography mb={3}>
          Em breve você poderá assinar nossa newsletter.
        </Typography>
        <Button
          variant="contained"
          size="large"
          startIcon={<WhatsAppIcon />}
          href="https://wa.me/5585992910554?text=Ol%C3%A1%2C%20gostaria%20de%20testar%20o%20Difus%C3%A3o%20Core%20por%2014%20dias%20gr%C3%A1tis!"
          sx={{
            backgroundColor: "white",
            color: colors.primary,
            fontWeight: 700,
            fontSize: "1rem",
            py: 1.5,
            px: 5,
            "&:hover": {
              backgroundColor: "#f0f0f0",
              transform: "translateY(-2px)",
              boxShadow: "0 6px 16px rgba(0, 0, 0, 0.3)",
            },
            transition: "all 0.3s ease",
          }}
        >
          Inscrever-se
        </Button>
      </Paper>
    </Container>
  </Box>
);
