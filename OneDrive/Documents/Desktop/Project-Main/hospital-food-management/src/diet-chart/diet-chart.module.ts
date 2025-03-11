import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { DietChartController } from './diet-chart.controller';
import { DietChartService } from './diet-chart.service';

@Module({
  controllers: [DietChartController],
  providers: [DietChartService, PrismaService],
})
export class DietChartModule {}
