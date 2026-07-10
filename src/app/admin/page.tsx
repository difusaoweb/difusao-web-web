import Link from "next/link";
import {
  AccessTime,
  Add,
  CalendarMonth,
  Edit,
  Visibility,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

import { prisma } from "@/lib/prisma";

const difficultyLabel = {
  BEGINNER: "Iniciante",
  INTERMEDIATE: "Intermediário",
  ADVANCED: "Avançado",
};

const difficultyColor = {
  BEGINNER: "success",
  INTERMEDIATE: "warning",
  ADVANCED: "error",
} as const;

export default async function AdminPostsPage() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Box>
          <Typography variant="h4" fontWeight={700}>
            Posts
          </Typography>

          <Typography color="text.secondary">
            Gerencie os artigos do blog.
          </Typography>
        </Box>

        <Button
          component={Link}
          href="/admin/new"
          variant="contained"
          startIcon={<Add />}
        >
          Novo Post
        </Button>
      </Stack>

      <Paper sx={{ p: 3, mb: 3 }}>
        <TextField fullWidth placeholder="Pesquisar..." disabled />
      </Paper>

      <Card>
        <CardContent sx={{ p: 0 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Título</TableCell>
                <TableCell>Slug</TableCell>
                <TableCell>Leitura</TableCell>
                <TableCell>Dificuldade</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Publicação</TableCell>
                <TableCell align="center">Ações</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {posts.map((post) => (
                <TableRow key={post.id} hover>
                  <TableCell>
                    <Typography fontWeight={600}>{post.title}</Typography>

                    <Typography variant="body2" color="text.secondary">
                      {post.subtitle}
                    </Typography>
                  </TableCell>

                  <TableCell>{post.slug}</TableCell>

                  <TableCell>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <AccessTime fontSize="small" />
                      {post.readingTime} min
                    </Stack>
                  </TableCell>

                  <TableCell>
                    <Chip
                      size="small"
                      color={difficultyColor[post.difficulty]}
                      label={difficultyLabel[post.difficulty]}
                    />
                  </TableCell>

                  <TableCell>
                    <Chip
                      size="small"
                      color={post.published ? "success" : "default"}
                      label={post.published ? "Publicado" : "Rascunho"}
                    />
                  </TableCell>

                  <TableCell>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <CalendarMonth fontSize="small" />

                      {post.publishedAt?.toLocaleDateString("pt-BR")}
                    </Stack>
                  </TableCell>

                  <TableCell align="center">
                    <IconButton component={Link} href={`/blog/${post.slug}`}>
                      <Visibility />
                    </IconButton>

                    <IconButton
                      component={Link}
                      href={`/admin/posts/${post.id}`}
                    >
                      <Edit />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}

              {posts.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} align="center" sx={{ py: 6 }}>
                    <Typography color="text.secondary">
                      Nenhum post cadastrado.
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Container>
  );
}
