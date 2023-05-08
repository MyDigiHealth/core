-- CreateTable
CREATE TABLE `User` (
    `address` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `dob` DATETIME(3) NULL,
    `nonce` VARCHAR(191) NOT NULL,
    `type` ENUM('unregistered', 'patient', 'doctor', 'drugStore', 'validator') NOT NULL DEFAULT 'unregistered',

    PRIMARY KEY (`address`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Doctor` (
    `address` VARCHAR(191) NOT NULL,
    `verified` BOOLEAN NOT NULL DEFAULT false,
    `document` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`address`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DrugStore` (
    `address` VARCHAR(191) NOT NULL,
    `verified` BOOLEAN NOT NULL DEFAULT false,
    `document` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`address`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Patient` (
    `address` VARCHAR(191) NOT NULL,
    `verified` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`address`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Validator` (
    `address` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`address`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Admin` (
    `address` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`address`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Medicine` (
    `medicineId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`medicineId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PrescriptionMedicine` (
    `medicineId` INTEGER NOT NULL,
    `prescriptionId` INTEGER NOT NULL,
    `doses` INTEGER NOT NULL DEFAULT 1,
    `description` VARCHAR(191) NOT NULL,
    `days` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`medicineId`, `prescriptionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Prescription` (
    `prescriptionId` INTEGER NOT NULL AUTO_INCREMENT,
    `doctorAddress` VARCHAR(191) NOT NULL,
    `patientAddress` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `generatedDoc` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`prescriptionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Doctor` ADD CONSTRAINT `Doctor_address_fkey` FOREIGN KEY (`address`) REFERENCES `User`(`address`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DrugStore` ADD CONSTRAINT `DrugStore_address_fkey` FOREIGN KEY (`address`) REFERENCES `User`(`address`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Patient` ADD CONSTRAINT `Patient_address_fkey` FOREIGN KEY (`address`) REFERENCES `User`(`address`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Validator` ADD CONSTRAINT `Validator_address_fkey` FOREIGN KEY (`address`) REFERENCES `User`(`address`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Admin` ADD CONSTRAINT `Admin_address_fkey` FOREIGN KEY (`address`) REFERENCES `User`(`address`) ON DELETE CASCADE ON UPDATE CASCADE;
