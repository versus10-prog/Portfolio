/*
  Warnings:

  - You are about to drop the `imageinactivite` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `image_id` to the `Activite` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `activite` ADD COLUMN `image_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `imageinactivite`;

-- CreateTable
CREATE TABLE `ActiviteInAccueil` (
    `activite_id` INTEGER NOT NULL,
    `accueil_id` INTEGER NOT NULL,

    INDEX `ActiviteInAccueil_activite_id_idx`(`activite_id`),
    PRIMARY KEY (`accueil_id`, `activite_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Activite_image_id_idx` ON `Activite`(`image_id`);
