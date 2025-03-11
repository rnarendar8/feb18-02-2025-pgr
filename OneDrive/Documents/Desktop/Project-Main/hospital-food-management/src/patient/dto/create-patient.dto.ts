import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, ValidateNested } from 'class-validator';
import { DietChartDto } from '../../diet-chart/dto/create-diet-chart.dto';


export class CreatePatientDto {
  @IsString()
  name: string;

  @IsInt()  // ✅ Ensure this is a number
  age: number;

  @IsString()
  gender: string;

  @IsString()
  contact: string;

  @IsString()
  roomNumber: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => DietChartDto)
  dietChart?: DietChartDto;
}

 class DietChartDto {
  @IsString()
  morningMeal: string;

  @IsString()
  afternoonMeal: string;  // ✅ Add this required field

  @IsString()
  eveningMeal: string;

  @IsString()
  nightMeal: string;
}
