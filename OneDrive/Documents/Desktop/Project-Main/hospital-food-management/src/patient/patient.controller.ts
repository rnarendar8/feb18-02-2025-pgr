import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreatePatientDto } from './dto/create-patient.dto';
import { PatientService } from './patient.service';

@Controller('patients')
@UseGuards(JwtAuthGuard) // Protect routes with authentication
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  // ✅ Fixing GET /patients route
  @Get()
  async getAllPatients() {
    return this.patientService.getAllPatients(); // Call the service to fetch patients
  }

  // ✅ Fixing POST /patients route
  @Post()
  createPatient(@Body() createPatientDto: CreatePatientDto) {
    return this.patientService.createPatient(createPatientDto); // ✅ Use correct method name
  }
}
