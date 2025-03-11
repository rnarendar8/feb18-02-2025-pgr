import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service'; // Ensure Prisma is imported
import { CreatePatientDto } from './dto/create-patient.dto';

@Injectable()
export class PatientService {
  constructor(private prisma: PrismaService) {}

  async getAllPatients() {
    return this.prisma.patient.findMany(); // Fetch all patients from DB
  }

  async createPatient(createPatientDto: CreatePatientDto) {
    return this.prisma.patient.create({
      data: {
        ...createPatientDto,
        age: Number(createPatientDto.age), // ✅ Convert age to number
        dietChart: createPatientDto.dietChart
          ? {
              create: {
                morningMeal: createPatientDto.dietChart.morningMeal,
                afternoonMeal: createPatientDto.dietChart.afternoonMeal,
                eveningMeal: createPatientDto.dietChart.eveningMeal,
                nightMeal: createPatientDto.dietChart.nightMeal,
              },
            }
          : undefined, // ✅ Properly handle relation
      },
    });
  }
}
  
