"use client";
import * as React from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
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
  publishedAt?: string | Date | null;
}

function toDateTimeLocalValue(value?: string | Date | null) {
  if (!value) {
    return "";
  }

  const date = value instanceof Date ? value : new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  const hours = `${date.getHours()}`.padStart(2, "0");
  const minutes = `${date.getMinutes()}`.padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
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
  const publishedAtDefault = toDateTimeLocalValue(defaultValues?.publishedAt);

  const [postTitle, setPostTitle] = React.useState(defaultValues?.title ?? "");
  const [slug, setSlug] = React.useState(defaultValues?.slug ?? "");
  const [slugEdited, setSlugEdited] = React.useState(
    !!defaultValues?.slug?.length,
  );
  const [schedule, setSchedule] = React.useState(false);
  const [publishedAtTemp, setPublishedAtTemp] =
    React.useState(publishedAtDefault);
  const [publishedAt, setPublishedAt] = React.useState(publishedAtDefault);
  const [published, setPublished] = React.useState(
    String(defaultValues?.published ?? true),
  );

  const handleScheduleOpen = () => {
    setSchedule(true);
    if (publishedAtTemp === "") {
      const now = new Date();
      const year = now.getFullYear();
      const month = `${now.getMonth() + 1}`.padStart(2, "0");
      const day = `${now.getDate()}`.padStart(2, "0");
      const hours = `${now.getHours()}`.padStart(2, "0");
      const minutes = `${now.getMinutes()}`.padStart(2, "0");

      setPublishedAtTemp(`${year}-${month}-${day}T${hours}:${minutes}`);
    }
  };

  function handleScheduleOk() {
    setPublished(String(publishedAt === publishedAtTemp));
    setPublishedAt(publishedAtTemp);
    setSchedule(false);
  }

  function handleScheduleCancel() {
    setPublishedAtTemp(publishedAtDefault);
    setPublishedAt(publishedAtDefault);
    setSchedule(false);
    setPublished("true");
  }

  React.useEffect(() => {
    if (!slugEdited) {
      setSlug(slugify(postTitle));
    }
  }, [postTitle, slugEdited]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Typography variant="h5" fontWeight={700}>
        {title}
      </Typography>
      <Grid container spacing={3} component="form" action={action}>
        <Grid
          item
          xs={12}
          sm={6}
          md={8}
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          <Paper
            sx={{ p: 2, gap: 2, display: "flex", flexDirection: "column" }}
          >
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
          </Paper>
          <Paper sx={{ p: 2 }}>
            <TextField
              label="Conteúdo"
              name="content"
              required
              multiline
              rows={15}
              fullWidth
              defaultValue={defaultValues?.content}
              inputProps={{
                minLength: 100,
              }}
            />
          </Paper>
          <Paper sx={{ p: 2 }}>
            <Box>
              <Stack spacing={3}>
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
              </Stack>
            </Box>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Typography variant="h6" sx={{ lineHeight: 1 }}>
              Publicar
            </Typography>
            <Divider sx={{ my: 2 }} />
            <TextField
              label="Status"
              name="published"
              select
              required
              fullWidth
              value={published}
              onChange={(e) => setPublished(e.target.value)}
              sx={{
                mb: 2,
              }}
            >
              <MenuItem value="true">Publicado</MenuItem>
              <MenuItem value="false">Rascunho</MenuItem>
            </TextField>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                <Typography>
                  Publicar{" "}
                  {publishedAt === publishedAtDefault
                    ? "imediatamente"
                    : `em ${publishedAt}`}
                </Typography>
                {!schedule && (
                  <Button
                    variant="text"
                    size="small"
                    onClick={handleScheduleOpen}
                  >
                    Editar
                  </Button>
                )}
              </Box>
              {schedule && (
                <>
                  <TextField
                    name="publishedAt"
                    type="datetime-local"
                    fullWidth
                    value={publishedAtTemp}
                    onChange={(event) => setPublishedAtTemp(event.target.value)}
                    sx={{
                      mt: 0.5,
                      mb: 1,
                    }}
                  />
                  <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={handleScheduleOk}
                    >
                      OK
                    </Button>
                    <Button
                      variant="text"
                      size="small"
                      onClick={handleScheduleCancel}
                    >
                      Cancelar
                    </Button>
                  </Box>
                </>
              )}
            </Box>
            <Divider
              sx={{
                my: 2,
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Button type="submit" variant="contained">
                {submitText}
              </Button>
            </Box>
          </Paper>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Typography variant="h6" sx={{ lineHeight: 1 }}>
              Imagem
            </Typography>
            <Divider sx={{ my: 2 }} />
            <TextField
              label="Thumbnail"
              name="thumbnail"
              required
              fullWidth
              defaultValue={defaultValues?.thumbnail}
              sx={{
                mb: 2,
              }}
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
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
