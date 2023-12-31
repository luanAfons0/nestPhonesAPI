import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma.service';
import { PhoneService } from 'src/phones/phone.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService,PrismaService,PhoneService]
})
export class UsersModule {}
