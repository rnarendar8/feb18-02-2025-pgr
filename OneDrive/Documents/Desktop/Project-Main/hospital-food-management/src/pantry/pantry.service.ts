import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PantryService {
  constructor(private prisma: PrismaService) {}

  async getAllPantryStaff() {
    return this.prisma.pantryStaff.findMany();
  }

  async getPantryStaffById(id: string) {
    return this.prisma.pantryStaff.findUnique({ where: { id } });
  }

  async createPantryStaff(data: any) {
    return this.prisma.pantryStaff.create({ data });
  }

  async updatePantryStaff(id: string, data: any) {
    return this.prisma.pantryStaff.update({ where: { id }, data });
  }

  async deletePantryStaff(id: string) {
    return this.prisma.pantryStaff.delete({ where: { id } });
  }
}
