"use client";
import * as React from "react";

import { slugify } from "@/utils/slugify";

export type PostStatus = "publish" | "draft" | "future";

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
  status: PostStatus;
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

const inputClass =
  "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-sm";
const labelClass = "block text-sm font-medium text-gray-700 mb-1";

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
  const [status, setStatus] = React.useState<PostStatus>(
    defaultValues?.status ?? "draft",
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
    if (publishedAt === publishedAtTemp) {
      setStatus("future");
    }
    setPublishedAt(publishedAtTemp);
    setSchedule(false);
  }

  function handleScheduleCancel() {
    setPublishedAtTemp(publishedAtDefault);
    setPublishedAt(publishedAtDefault);
    setSchedule(false);
  }

  React.useEffect(() => {
    if (!slugEdited) {
      setSlug(slugify(postTitle));
    }
  }, [postTitle, slugEdited]);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-bold">{title}</h1>
      <form action={action} className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left column */}
        <div className="md:col-span-8 flex flex-col gap-6">
          <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col gap-4">
            <div>
              <label htmlFor="title" className={labelClass}>
                Título
              </label>
              <input
                id="title"
                name="title"
                required
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                minLength={5}
                maxLength={150}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="slug" className={labelClass}>
                Slug
              </label>
              <input
                id="slug"
                name="slug"
                required
                value={slug}
                onChange={(e) => {
                  setSlug(e.target.value);
                  setSlugEdited(true);
                }}
                pattern="^[a-z0-9]+(?:-[a-z0-9]+)*$"
                className={inputClass}
              />
              <p className="mt-1 text-xs text-gray-500">
                Ex.: publicos-personalizados-no-meta-ads
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4">
            <label htmlFor="content" className={labelClass}>
              Conteúdo
            </label>
            <textarea
              id="content"
              name="content"
              required
              rows={15}
              defaultValue={defaultValues?.content}
              minLength={100}
              className={inputClass}
            />
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4 space-y-4">
            <div>
              <label htmlFor="subtitle" className={labelClass}>
                Subtítulo
              </label>
              <input
                id="subtitle"
                name="subtitle"
                required
                defaultValue={defaultValues?.subtitle}
                minLength={10}
                maxLength={250}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="readingTime" className={labelClass}>
                Tempo de leitura (min)
              </label>
              <input
                id="readingTime"
                name="readingTime"
                type="number"
                required
                defaultValue={defaultValues?.readingTime}
                min={1}
                max={120}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="difficulty" className={labelClass}>
                Dificuldade
              </label>
              <select
                id="difficulty"
                name="difficulty"
                required
                defaultValue={defaultValues?.difficulty ?? ""}
                className={inputClass}
              >
                <option value="">Selecione...</option>
                <option value="BEGINNER">Iniciante</option>
                <option value="INTERMEDIATE">Intermediário</option>
                <option value="ADVANCED">Avançado</option>
              </select>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col">
            <h2 className="text-lg font-semibold leading-none">Publicar</h2>
            <hr className="my-4 border-gray-200" />

            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-sm w-20">Status</span>
              <select
                name="status"
                required
                value={status}
                onChange={(e) => setStatus(e.target.value as PostStatus)}
                className="px-2 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="draft">Rascunho</option>
                <option value="future">Futuro</option>
                <option value="publish">Publicado</option>
              </select>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm w-20">Publicar</span>
              <input type="hidden" name="publishedAt" value={publishedAt} />
              <button
                type="button"
                onClick={handleScheduleOpen}
                className={`px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors ${
                  schedule ? "opacity-0 pointer-events-none" : ""
                }`}
              >
                {defaultValues
                  ? publishedAt || "Imediatamente"
                  : publishedAt === publishedAtDefault
                    ? "Imediatamente"
                    : publishedAt}
              </button>
            </div>

            {schedule && (
              <div className="mt-2 space-y-2">
                <input
                  type="datetime-local"
                  value={publishedAtTemp}
                  onChange={(event) => setPublishedAtTemp(event.target.value)}
                  className={inputClass}
                />
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleScheduleOk}
                    className="px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    OK
                  </button>
                  <button
                    type="button"
                    onClick={handleScheduleCancel}
                    className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}

            <hr className="my-4 border-gray-200" />
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-primary text-white font-medium hover:opacity-90 transition-opacity"
              >
                {submitText}
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col">
            <h2 className="text-lg font-semibold leading-none">Imagem</h2>
            <hr className="my-4 border-gray-200" />
            <div className="mb-4">
              <label htmlFor="thumbnail" className={labelClass}>
                Thumbnail
              </label>
              <input
                id="thumbnail"
                name="thumbnail"
                required
                defaultValue={defaultValues?.thumbnail}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="thumbnailFull" className={labelClass}>
                Thumbnail Full
              </label>
              <input
                id="thumbnailFull"
                name="thumbnailFull"
                defaultValue={
                  defaultValues?.thumbnailFull ?? defaultValues?.thumbnail
                }
                className={inputClass}
              />
              <p className="mt-1 text-xs text-gray-500">
                Opcional. Se vazio, será usado o thumbnail principal.
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
