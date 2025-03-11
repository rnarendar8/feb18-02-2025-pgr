/*
  Warnings:

  - You are about to drop the column `contact` on the `DeliveryPersonnel` table. All the data in the column will be lost.
  - Added the required column `afternoonMeal` to the `DietChart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomNumber` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Delivery_deliveryPersonnelId_key";

-- DropIndex
DROP INDEX "Delivery_patientId_key";

-- AlterTable
ALTER TABLE "DeliveryPersonnel" DROP COLUMN "contact";

-- AlterTable
ALTER TABLE "DietChart" ADD COLUMN     "afternoonMeal" TEXT NOT NULL,
ALTER COLUMN "ingredients" DROP NOT NULL,
ALTER COLUMN "specialInstructions" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Meal" ALTER COLUMN "patientId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Patient" ADD COLUMN     "roomNumber" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Meal" ADD CONSTRAINT "Meal_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
