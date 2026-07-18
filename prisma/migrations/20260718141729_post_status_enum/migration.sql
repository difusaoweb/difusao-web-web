/*
  Warnings:

  - You are about to drop the column `published` on the `Post` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "PostStatus" AS ENUM ('publish', 'draft', 'future');

-- AlterTable
ALTER TABLE "Post"
ADD COLUMN "status" "PostStatus" NOT NULL DEFAULT 'draft';

UPDATE "Post"
SET "status" = CASE
  WHEN "published" = true THEN 'publish'::"PostStatus"
  ELSE 'draft'::"PostStatus"
END;

ALTER TABLE "Post"
DROP COLUMN "published",
ALTER COLUMN "publishedAt" DROP NOT NULL,
ALTER COLUMN "publishedAt" DROP DEFAULT,
ALTER COLUMN "thumbnailFull" DROP DEFAULT;
