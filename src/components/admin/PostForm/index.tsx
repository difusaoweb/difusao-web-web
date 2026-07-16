"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { slugify } from "@/utils/slugify";

export interface PostFormValues {
  id?: string;
  title: string;
  slug: string;
  subtitle: string;
  readingTime: number;
  difficulty: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  thumbnail: string;
  thumbnailFull: string;
  content: string;
  published: boolean;
}

interface PostFormProps {
  title: string;
  submitText: string;
  action: (formData: FormData) => void | Promise<void>;
  defaultValues?: Partial<PostFormValues>;
  showPublished?: boolean;
}

export function PostForm({
  title,
  submitText,
  action,
  defaultValues,
  showPublished = false,
}: PostFormProps) {
  const [postTitle, setPostTitle] = useState(defaultValues?.title ?? "");
  const [slug, setSlug] = useState(defaultValues?.slug ?? "");
  const [slugEdited, setSlugEdited] = useState(!!defaultValues?.slug?.length);

  useEffect(() => {
    if (!slugEdited) {
      setSlug(slugify(postTitle));
    }
  }, [postTitle, slugEdited]);

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight={700} mb={4}>
        {title}
      </Typography>

      <Box component="form" action={action}>
        <Stack spacing={3}>
          {showPublished && (
            <TextField
              label="Status"
              name="published"
              select
              required
              fullWidth
              defaultValue={String(defaultValues?.published)}
            >
              <MenuItem value="true">Publicado</MenuItem>
              <MenuItem value="false">Rascunho</MenuItem>
            </TextField>
          )}

          <TextField
            label="Título"
            name="title"
            required
            fullWidth
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            inputProps={{
              minLength: 5,
              maxLength: 150,
            }}
          />

          <TextField
            label="Slug"
            name="slug"
            required
            fullWidth
            value={slug}
            onChange={(e) => {
              setSlug(e.target.value);
              setSlugEdited(true);
            }}
            helperText="Ex.: publicos-personalizados-no-meta-ads"
            inputProps={{
              pattern: "^[a-z0-9]+(?:-[a-z0-9]+)*$",
            }}
          />

          <TextField
            label="Subtítulo"
            name="subtitle"
            required
            fullWidth
            defaultValue={defaultValues?.subtitle}
            inputProps={{
              minLength: 10,
              maxLength: 250,
            }}
          />

          <TextField
            label="Tempo de leitura (min)"
            name="readingTime"
            type="number"
            required
            fullWidth
            defaultValue={defaultValues?.readingTime}
            inputProps={{
              min: 1,
              max: 120,
            }}
          />

          <TextField
            label="Dificuldade"
            name="difficulty"
            select
            required
            fullWidth
            defaultValue={defaultValues?.difficulty ?? ""}
          >
            <MenuItem value="">Selecione...</MenuItem>

            <MenuItem value="BEGINNER">Iniciante</MenuItem>

            <MenuItem value="INTERMEDIATE">Intermediário</MenuItem>

            <MenuItem value="ADVANCED">Avançado</MenuItem>
          </TextField>

          <TextField
            label="Thumbnail"
            name="thumbnail"
            required
            fullWidth
            defaultValue={defaultValues?.thumbnail}
          />

          <TextField
            label="Thumbnail Full"
            name="thumbnailFull"
            fullWidth
            defaultValue={
              defaultValues?.thumbnailFull ?? defaultValues?.thumbnail
            }
            helperText="Opcional. Se vazio, será usado o thumbnail principal."
          />

          <TextField
            label="Conteúdo"
            name="content"
            required
            multiline
            rows={20}
            fullWidth
            defaultValue={defaultValues?.content}
            inputProps={{
              minLength: 100,
            }}
          />

          <Button type="submit" variant="contained" size="large">
            {submitText}
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}
