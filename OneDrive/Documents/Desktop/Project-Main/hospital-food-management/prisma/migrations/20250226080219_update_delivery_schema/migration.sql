-- CreateTable
CREATE TABLE "Delivery" (
    "id" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "deliveryPersonnelId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "deliveredAt" TIMESTAMP(3),

    CONSTRAINT "Delivery_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Delivery_patientId_key" ON "Delivery"("patientId");

-- CreateIndex
CREATE UNIQUE INDEX "Delivery_deliveryPersonnelId_key" ON "Delivery"("deliveryPersonnelId");

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_deliveryPersonnelId_fkey" FOREIGN KEY ("deliveryPersonnelId") REFERENCES "DeliveryPersonnel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
