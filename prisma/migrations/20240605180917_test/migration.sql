-- CreateTable
CREATE TABLE `Technologie` (
    `techno_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `image_id` INTEGER NOT NULL,

    UNIQUE INDEX `Technologie_nom_key`(`nom`),
    INDEX `Technologie_image_id_idx`(`image_id`),
    PRIMARY KEY (`techno_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TechnoInProjet` (
    `techno_id` INTEGER NOT NULL,
    `projet_id` INTEGER NOT NULL,

    INDEX `TechnoInProjet_projet_id_idx`(`projet_id`),
    PRIMARY KEY (`techno_id`, `projet_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Projet` (
    `projet_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `lien` VARCHAR(191) NULL,
    `presentation` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `titre` VARCHAR(191) NOT NULL,
    `image_id` INTEGER NOT NULL,

    INDEX `Projet_image_id_idx`(`image_id`),
    PRIMARY KEY (`projet_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Image` (
    `image_id` INTEGER NOT NULL AUTO_INCREMENT,
    `lien` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`image_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ImageInActivite` (
    `image_id` INTEGER NOT NULL,
    `activite_id` INTEGER NOT NULL,

    INDEX `ImageInActivite_activite_id_idx`(`activite_id`),
    PRIMARY KEY (`image_id`, `activite_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Parcours` (
    `parcours_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `date_debut` DATETIME(3) NOT NULL,
    `date_fin` DATETIME(3) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `type` ENUM('scolaire', 'professionnel') NOT NULL,
    `svg_id` INTEGER NOT NULL,

    INDEX `Parcours_svg_id_idx`(`svg_id`),
    PRIMARY KEY (`parcours_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Activite` (
    `activite_id` INTEGER NOT NULL AUTO_INCREMENT,
    `titre` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`activite_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Accueil` (
    `accueil_id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,
    `image_id` INTEGER NOT NULL,

    INDEX `Accueil_image_id_idx`(`image_id`),
    PRIMARY KEY (`accueil_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetailProjet` (
    `detail_projet_id` INTEGER NOT NULL AUTO_INCREMENT,
    `titre` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `image_id` INTEGER NOT NULL,

    INDEX `DetailProjet_image_id_idx`(`image_id`),
    PRIMARY KEY (`detail_projet_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetailInProjet` (
    `detail_projet_id` INTEGER NOT NULL,
    `projet_id` INTEGER NOT NULL,

    INDEX `DetailInProjet_projet_id_idx`(`projet_id`),
    PRIMARY KEY (`detail_projet_id`, `projet_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
