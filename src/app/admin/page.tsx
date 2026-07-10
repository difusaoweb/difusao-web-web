import Link from "next/link";
import {
  Add,
  Article,
  Drafts,
  Language,
  Launch,
  Visibility,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import { prisma } from "@/lib/prisma";

export default async function AdminPage() {
  const [totalPosts, publishedPosts, draftPosts, latestPosts] =
    await Promise.all([
      prisma.post.count(),

      prisma.post.count({
        where: {
          published: true,
        },
      }),

      prisma.post.count({
        where: {
          published: false,
        },
      }),

      prisma.post.findMany({
        orderBy: {
          updatedAt: "desc",
        },
        take: 5,
      }),
    ]);

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Typography variant="h3" fontWeight={700}>
        Dashboard
      </Typography>

      <Typography color="text.secondary" mb={4}>
        Bem-vindo ao painel administrativo da Difusão Web.
      </Typography>

      <Grid container spacing={3} mb={5}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography color="text.secondary">Total de posts</Typography>

                  <Typography variant="h3" fontWeight={700}>
                    {totalPosts}
                  </Typography>
                </Box>

                <Article color="primary" fontSize="large" />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography color="text.secondary">Publicados</Typography>

                  <Typography variant="h3" fontWeight={700}>
                    {publishedPosts}
                  </Typography>
                </Box>

                <Language color="success" fontSize="large" />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography color="text.secondary">Rascunhos</Typography>

                  <Typography variant="h3" fontWeight={700}>
                    {draftPosts}
                  </Typography>
                </Box>

                <Drafts color="warning" fontSize="large" />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography color="text.secondary">Visualizações</Typography>

                  <Typography variant="h3" fontWeight={700}>
                    —
                  </Typography>
                </Box>

                <Visibility color="action" fontSize="large" />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography variant="h5" fontWeight={700} mb={2}>
        Ações rápidas
      </Typography>

      <Grid container spacing={2} mb={5}>
        <Grid item xs={12} sm={6} md={3}>
          <Button
            component={Link}
            href="/admin/posts/add"
            variant="contained"
            startIcon={<Add />}
            fullWidth
            size="large"
            sx={{ py: 2 }}
          >
            Novo Post
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Button
            component={Link}
            href="/admin/posts"
            variant="outlined"
            startIcon={<Article />}
            fullWidth
            size="large"
            sx={{ py: 2, backgroundColor: "#fff" }}
          >
            Gerenciar Posts
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Button
            component={Link}
            href="/blog"
            variant="outlined"
            startIcon={<Visibility />}
            fullWidth
            size="large"
            sx={{ py: 2, backgroundColor: "#fff" }}
          >
            Ver Blog
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Button
            component={Link}
            href="/"
            variant="outlined"
            startIcon={<Launch />}
            fullWidth
            size="large"
            sx={{ py: 2, backgroundColor: "#fff" }}
          >
            Ver Site
          </Button>
        </Grid>
      </Grid>

      <Typography variant="h5" fontWeight={700} mb={2}>
        Últimos posts
      </Typography>

      <Stack spacing={2}>
        {latestPosts.map((post) => (
          <Card
            key={post.id}
            component={Link}
            href={`/admin/posts/${post.id}`}
            sx={{
              textDecoration: "none",
              color: "inherit",
              transition: ".2s",
              "&:hover": {
                boxShadow: 4,
              },
            }}
          >
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography fontWeight={700}>{post.title}</Typography>

                  <Typography variant="body2" color="text.secondary">
                    /blog/{post.slug}
                  </Typography>
                </Box>

                <Chip
                  label={post.published ? "Publicado" : "Rascunho"}
                  color={post.published ? "success" : "warning"}
                />
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}
