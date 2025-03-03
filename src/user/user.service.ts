import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './commands/create-user.command';
import { GetUsersQuery } from './queries/get-users.query';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

  async createUser(id: string, name: string, email: string): Promise<void> {
    return this.commandBus.execute(new CreateUserCommand(id, name, email));
  }

  async getUsers(): Promise<User[]> {
    return this.queryBus.execute(new GetUsersQuery());
  }
}
