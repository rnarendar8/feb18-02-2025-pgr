import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service'; // ✅ Import PrismaService
import { DeliveryController } from './delivery.controller';
import { DeliveryService } from './delivery.service';

@Module({
  controllers: [DeliveryController],
  providers: [DeliveryService, PrismaService],  // ✅ Add PrismaService
})
export class DeliveryModule {}
