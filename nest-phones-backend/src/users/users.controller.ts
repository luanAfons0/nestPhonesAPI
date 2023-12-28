import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Get all users
  @Get()
  findAll() {
    return this.usersService.findAll({});
  }

  // Create new user
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  // Update user
  @Put(':id')
  updateUser(@Param('id')id,@Body() createUserDto:CreateUserDto){
    return this.usersService.updateUser({
      where:{id:+id},
      data:{
        name:createUserDto.name,
        email:createUserDto.email
      }
    })
  }

  // Delete user
  @Delete(':id')
  deleteUser(@Param('id')id:string){
    return this.usersService.deleteUser({ id:+id})
  }
}
