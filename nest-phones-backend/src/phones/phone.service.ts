import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Phone_numbers, Prisma } from '@prisma/client';

@Injectable()
export class PhoneService {
  constructor(private prisma: PrismaService) { }

  // get phone number
  async getPhoneNumber(
    postWhereUniqueInput: Prisma.Phone_numbersWhereUniqueInput,
  ): Promise<Phone_numbers | null> {
    return this.prisma.phone_numbers.findUnique({
      where: postWhereUniqueInput,
    });
  }

  // get all phone numbers
  async getAllPhoneNumbers(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.Phone_numbersWhereUniqueInput;
    where?: Prisma.Phone_numbersWhereInput;
    orderBy?: Prisma.Phone_numbersOrderByWithRelationInput;
  }): Promise<Phone_numbers[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.phone_numbers.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  // create phone number
  async createPhoneNumber(id:number,data: Prisma.Phone_numbersCreateInput): Promise<Phone_numbers> {
    return this.prisma.phone_numbers.create({
      data,
    });
  }

  // update phone number
  async updatePost(params: {
    where: Prisma.Phone_numbersWhereUniqueInput;
    data: Prisma.Phone_numbersUpdateInput;
  }): Promise<Phone_numbers> {
    const { data, where } = params;
    return this.prisma.phone_numbers.update({
      data,
      where,
    });
  }

  // delete phone number
  async deletePost(where: Prisma.Phone_numbersWhereUniqueInput): Promise<Phone_numbers> {
    return this.prisma.phone_numbers.delete({
      where,
    });
  }
}