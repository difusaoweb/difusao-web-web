"use client";
import * as React from "react";
import {
  Box,
  Button,
  Container,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { slugify } from "@/utils/slugify";
import { createPost } from "@/services/NewPost";

export default function NewPostPage() {
  const [title, setTitle] = React.useState("");
  const [slug, setSlug] = React.useState("");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setTitle(value);
    setSlug(slugify(value));
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" fontWeight={700} mb={4}>
          Novo Post
        </Typography>

        <Box component="form" action={createPost}>
          <Stack spacing={3}>
            <TextField
              name="title"
              label="Título"
              required
              fullWidth
              value={title}
              onChange={handleTitleChange}
            />

            <TextField
              name="slug"
              label="Slug"
              required
              fullWidth
              value={slug}
              onChange={(e) => {
                setSlug(e.target.value);
              }}
            />

            <TextField name="subtitle" label="Subtítulo" fullWidth />

            <TextField
              name="readingTime"
              label="Tempo de Leitura"
              fullWidth
              type="number"
            />

            <TextField
              name="difficulty"
              label="Dificuldade"
              select
              required
              fullWidth
              defaultValue=""
            >
              <MenuItem value="BEGINNER" selected>
                Iniciante
              </MenuItem>
              <MenuItem value="INTERMEDIATE">Intermediário</MenuItem>
              <MenuItem value="ADVANCED">Avançado</MenuItem>
            </TextField>

            <TextField name="thumbnail" label="Thumbnail" fullWidth />

            <TextField
              name="content"
              label="Conteúdo"
              multiline
              rows={15}
              fullWidth
            />

            <Button type="submit" variant="contained" size="large">
              Publicar
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
}
