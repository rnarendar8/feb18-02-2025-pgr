import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class DietChartService {
  constructor(private readonly prisma: PrismaService) {}

  async createDietChart(data: {
    patientId: string;
    morningMeal: string;
    afternoonMeal: string;  // ✅ Add this required field
    eveningMeal: string;
    nightMeal: string;
    ingredients: string;
    specialInstructions: string;
  }) {
    return this.prisma.dietChart.create({
      data,
    });
  }
  

  async updateDietChart(id: string, data: {
    morningMeal?: string;
    eveningMeal?: string;
    nightMeal?: string;
    ingredients?: string;
    specialInstructions?: string;
  }) {
    return this.prisma.dietChart.update({
      where: { id },
      data,
    });
  }
}
