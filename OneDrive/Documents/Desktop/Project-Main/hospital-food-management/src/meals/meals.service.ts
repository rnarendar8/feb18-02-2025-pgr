import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MealsService {
  constructor(private readonly prisma: PrismaService) {}

  async updateStatus(mealId: number, status: string) {
    return this.prisma.meal.update({
      where: { id: mealId }, // ✅ Ensure mealId is a number
      data: { status },
    });
  }

  async getMeals() {
    return this.prisma.meal.findMany({
      select: {
        id: true,
        status: true,
        patientId: true,
      },
    });
  }
}
