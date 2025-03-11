import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service'; // ✅ Import PrismaService
import { PantryController } from './pantry.controller';
import { PantryService } from './pantry.service';

@Module({
  controllers: [PantryController],
  providers: [PantryService, PrismaService],  // ✅ Add PrismaService
})
export class PantryModule {}
