-- CreateTable
CREATE TABLE "Meal" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Pending',

    CONSTRAINT "Meal_pkey" PRIMARY KEY ("id")
);
