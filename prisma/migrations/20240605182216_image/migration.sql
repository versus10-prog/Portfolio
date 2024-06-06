/*
  Warnings:

  - You are about to drop the column `lien` on the `image` table. All the data in the column will be lost.
  - Added the required column `image` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `image` DROP COLUMN `lien`,
    ADD COLUMN `image` LONGBLOB NOT NULL;
