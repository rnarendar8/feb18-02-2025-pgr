import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { Role } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RoleGuard } from '../auth/role.guard';
import { Roles } from '../auth/roles.decorator';
import { MealsService } from './meals.service';

@Controller('meals')
@UseGuards(JwtAuthGuard) // Protect all meal routes with JWT auth
export class MealsController {
  constructor(private readonly mealsService: MealsService) {}

  @Patch(':id/status')
  @UseGuards(RoleGuard) // Use our role guard
  @Roles(Role.PANTRY_STAFF) // Only Pantry Staff can update status via this endpoint
  async updateMealStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMealStatusDto: { status: string },
  ) {
    try {
      const result = await this.mealsService.updateStatus(
        id,
        updateMealStatusDto.status,
      );
      if (!result) {
        throw new Error('Failed to update meal status');
      }
      return result;
    } catch (error) {
      throw new Error(`Failed to update meal status: ${error.message}`);
    }
  }

  @Patch(':id/deliver')
  @UseGuards(RoleGuard)
  @Roles(Role.DELIVERY_PERSONNEL) // Only Delivery Personnel can mark as delivered
  async deliverMeal(@Param('id', ParseIntPipe) id: number) {
    try {
      const result = await this.mealsService.updateStatus(id, 'Delivered');
      if (!result) {
        throw new Error('Failed to mark meal as delivered');
      }
      return result;
    } catch (error) {
      throw new Error(`Failed to mark meal as delivered: ${error.message}`);
    }
  }
}
