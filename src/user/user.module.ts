import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { UserRepository } from './repositories/user.repository';
import { CreateUserHandler } from './handlers/create-user.handler';
import { GetUsersHandler } from './handlers/get-users.handler';
import { UserService } from './user.service';
import { UpdateUserNameHandler } from './handlers/update-user-name.handler';

@Module({
  imports: [CqrsModule],
  providers: [
    UserRepository,
    CreateUserHandler,
    UpdateUserNameHandler,
    GetUsersHandler,
    UserService,
  ],
  controllers: [UserController],
})
export class UserModule {}
