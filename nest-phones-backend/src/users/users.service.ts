import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  // get all users paginated
  async findAll(params: {
    page:number;
    skip: number;
    take: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy} = params;
    return this.prisma.user.findMany({
      take,
      cursor,
      where,
      orderBy,
      skip,
    });
  }

  //get users total
  async getUsersTotal(){
    return (Math.ceil((await this.prisma.user.findMany()).length / 5));
  }

  // create user
  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  // update user
  async updateUser(params:{where:Prisma.UserWhereUniqueInput,
  data: Prisma.UserUpdateInput}){
    const {data,where} = params
    return this.prisma.user.update({
      where,
      data
    })
  }

  //delete user
  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }


}