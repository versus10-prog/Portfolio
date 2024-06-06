/*
  Warnings:

  - You are about to drop the column `image` on the `image` table. All the data in the column will be lost.
  - Added the required column `nom` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `image` DROP COLUMN `image`,
    ADD COLUMN `nom` VARCHAR(191) NOT NULL;
