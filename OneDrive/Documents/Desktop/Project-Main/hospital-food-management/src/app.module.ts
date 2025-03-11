import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DietChartModule } from './diet-chart/diet-chart.module';
import { MealsModule } from './meals/meals.module';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [AuthModule, PatientModule, MealsModule, DietChartModule], 
})
export class AppModule {}
