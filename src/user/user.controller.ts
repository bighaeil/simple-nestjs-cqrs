import { Controller, Get, Post, Body, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() body: { id: string; name: string; email: string }) {
    return this.userService.createUser(body.id, body.name, body.email);
  }

  @Put()
  async updateUserName(@Body() body: { id: string; newName: string }) {
    return this.userService.updateUserName(body.id, body.newName);
  }

  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }
}
