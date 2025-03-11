import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class DeliveryService {
  constructor(private prisma: PrismaService) {}

  async getAllDeliveryPersonnel() {
    return this.prisma.deliveryPersonnel.findMany();
  }

  async getDeliveryPersonnelById(id: string) {
    return this.prisma.deliveryPersonnel.findUnique({ where: { id } });
  }

  async createDeliveryPersonnel(data: any) {
    return this.prisma.deliveryPersonnel.create({ data });
  }

  async updateDeliveryPersonnel(id: string, data: any) {
    return this.prisma.deliveryPersonnel.update({ where: { id }, data });
  }

  async deleteDeliveryPersonnel(id: string) {
    return this.prisma.deliveryPersonnel.delete({ where: { id } });
  }
  async updateStatus(id: string, status: string) {
    const delivery = await this.prisma.delivery.findUnique({ where: { id } });
    if (!delivery) {
      throw new NotFoundException('Delivery not found');
    }

    return this.prisma.delivery.update({
      where: { id },
      data: { status, deliveredAt: new Date() },
    });
  }
  async updateDeliveryStatus(deliveryId: string) {
    return this.prisma.delivery.update({
      where: { id: deliveryId },
      data: { status: "Delivered", deliveredAt: new Date() }, // ✅ Status is required
    });
  }
  
}
