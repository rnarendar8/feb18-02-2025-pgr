/*
  Warnings:

  - The primary key for the `Meal` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Meal` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `allergies` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `bedNumber` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `diseases` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `emergencyContact` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `floorNumber` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `roomNumber` on the `Patient` table. All the data in the column will be lost.
  - Changed the type of `patientId` on the `Meal` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Meal" DROP CONSTRAINT "Meal_patientId_fkey";

-- AlterTable
ALTER TABLE "Meal" DROP CONSTRAINT "Meal_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "patientId",
ADD COLUMN     "patientId" INTEGER NOT NULL,
ADD CONSTRAINT "Meal_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "allergies",
DROP COLUMN "bedNumber",
DROP COLUMN "createdAt",
DROP COLUMN "diseases",
DROP COLUMN "emergencyContact",
DROP COLUMN "floorNumber",
DROP COLUMN "roomNumber";
