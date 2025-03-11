import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';

// ✅ Import `DietChartDto` only from the correct location
import { DietChartDto } from '../../diet-chart/dto/create-diet-chart.dto';

export class CreatePatientDto {
  @IsString()
  name: string;

  @IsString()
  age: string;

  @IsString()
  gender: string;

  @IsString()
  contact: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => DietChartDto) 
  dietChart?: DietChartDto;  // ✅ Reference it correctly
}

export class DietChartDto {  // ✅ Ensure this is exported properly
  @IsString()
  morningMeal: string;

  @IsString()
  afternoonMeal: string;  // ✅ Ensure this exists

  @IsString()
  eveningMeal: string;

  @IsString()
  @IsOptional()
  specialInstructions?: string;
}