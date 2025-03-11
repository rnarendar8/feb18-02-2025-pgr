import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DeliveryService } from './delivery.service';

@Controller('delivery-personnel')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Get()
  async getAllDeliveryPersonnel() {
    return this.deliveryService.getAllDeliveryPersonnel();
  }

  @Get(':id')
  async getDeliveryPersonnelById(@Param('id') id: string) {
    return this.deliveryService.getDeliveryPersonnelById(id);
  }

  @Post()
  async createDeliveryPersonnel(@Body() body) {
    return this.deliveryService.createDeliveryPersonnel(body);
  }

  @Put(':id')
  async updateDeliveryPersonnel(@Param('id') id: string, @Body() body) {
    return this.deliveryService.updateDeliveryPersonnel(id, body);
  }

  @Delete(':id')
  async deleteDeliveryPersonnel(@Param('id') id: string) {
    return this.deliveryService.deleteDeliveryPersonnel(id);
  }
}
