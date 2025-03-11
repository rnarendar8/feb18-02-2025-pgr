import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PantryService } from './pantry.service';

@Controller('pantry-staff')
export class PantryController {
  constructor(private readonly pantryService: PantryService) {}

  @Get()
  async getAllPantryStaff() {
    return this.pantryService.getAllPantryStaff();
  }

  @Get(':id')
  async getPantryStaffById(@Param('id') id: string) {
    return this.pantryService.getPantryStaffById(id);
  }

  @Post()
  async createPantryStaff(@Body() body) {
    return this.pantryService.createPantryStaff(body);
  }

  @Put(':id')
  async updatePantryStaff(@Param('id') id: string, @Body() body) {
    return this.pantryService.updatePantryStaff(id, body);
  }

  @Delete(':id')
  async deletePantryStaff(@Param('id') id: string) {
    return this.pantryService.deletePantryStaff(id);
  }
}
