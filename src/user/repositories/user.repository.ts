import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  private users: User[] = [];

  createUser(user: User): void {
    this.users.push(user);
  }

  updateUserName(id: string, newName: string): User | null {
    const user = this.users.find((user) => user.id === id);
    if (user) {
      user.name = newName;
      return user;
    }
    return null;
  }

  findAll(): User[] {
    return this.users;
  }

  findById(id: string) {
    return this.users.find((user) => user.id === id);
  }
}
