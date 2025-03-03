import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  private users: User[] = [];

  createUser(user: User): void {
    this.users.push(user);
  }

  findAll(): User[] {
    return this.users;
  }
}
