ALTER TABLE "Post"
ADD COLUMN "thumbnailFull" TEXT NOT NULL DEFAULT '';

UPDATE "Post"
SET "thumbnailFull" = "thumbnail"
WHERE "thumbnailFull" = '' OR "thumbnailFull" IS NULL;
