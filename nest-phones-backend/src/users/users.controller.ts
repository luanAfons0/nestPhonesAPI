import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';
import { PhoneService } from '../phones/phone.service';
import { PhoneNumberDto } from '../phones/dto/create-phone-number-dto';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService, private readonly phoneService: PhoneService) { }

  // Get all users paginated
  @Get()
  findAll(@Query('page') page: number) {
    if (page) {
      return this.usersService.findAll({
        page: page,
        take: 5,
        skip: 5 * (page - 1)
      });
    } else {
      return this.usersService.getUsersTotal();
    }

  }

  // get all phones related to user
  @Get(':id/phone_numbers')
  findAllPhones(@Param('id') id: string) {
    return this.phoneService.getAllPhoneNumbers({
      where: { ownerId: +id }
    })
  }

  // Create new user
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  // Create Phone number
  @Post(':id/phone_numbers')
  createPhoneToUser(@Param('id') id: string, @Body() phoneNumberDto: PhoneNumberDto) {
    return this.phoneService.createPhoneNumber(+id, phoneNumberDto);
  }

  // Update user
  @Put(':id')
  updateUser(@Param('id') id, @Body() createUserDto: CreateUserDto) {
    return this.usersService.updateUser({
      where: { id: +id },
      data: {
        name: createUserDto.name,
        email: createUserDto.email
      }
    })
  }

  // Delete user
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser({ id: +id })
  }
}
