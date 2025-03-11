import { Body, Controller, Param, Post, Put, UseGuards } from '@nestjs/common';
import { Role } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RoleGuard } from '../auth/role.guard';
import { Roles } from '../auth/roles.decorator';
import { DietChartService } from './diet-chart.service';

@Controller('diet-charts')
@UseGuards(JwtAuthGuard, RoleGuard)
export class DietChartController {
  constructor(private readonly dietChartService: DietChartService) {}

  // Endpoint to create a diet chart
  @Post()
  @Roles(Role.HOSPITAL_MANAGER) // Only Hospital Managers can create a diet chart
  async createDietChart(@Body() body: {
    patientId: string;
    morningMeal: string;
    afternoonMeal: string;  // ✅ Ensure this is included
    eveningMeal: string;
    nightMeal: string;
    ingredients: string;
    specialInstructions: string;
  }) {
    return this.dietChartService.createDietChart(body);
  }

  // Endpoint to update an existing diet chart
  @Put(':id')
  @Roles(Role.HOSPITAL_MANAGER) // Only Hospital Managers can update
  async updateDietChart(
    @Param('id') id: string,
    @Body() body: {
      morningMeal?: string;
      eveningMeal?: string;
      nightMeal?: string;
      ingredients?: string;
      specialInstructions?: string;
    },
  ) {
    return this.dietChartService.updateDietChart(id, body);
  }
}
