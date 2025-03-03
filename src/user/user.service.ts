import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './commands/create-user.command';
import { GetUsersQuery } from './queries/get-users.query';
import { User } from './entities/user.entity';
import { UpdateUserNameCommand } from './commands/update-user-name.command';

@Injectable()
export class UserService {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

  async createUser(id: string, name: string, email: string): Promise<void> {
    return this.commandBus.execute(new CreateUserCommand(id, name, email));
  }

  async updateUserName(id: string, newName: string): Promise<void> {
    return this.commandBus.execute(new UpdateUserNameCommand(id, newName));
  }

  async getUsers(): Promise<User[]> {
    return this.queryBus.execute(new GetUsersQuery());
  }
}
