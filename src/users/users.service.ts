// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private users: User[] = []; // Array para armazenar os usuários

  // Criar um novo usuário
  create(user: User): User {
    user.id = this.users.length + 1;
    this.users.push(user);
    return user;
  }

  // Retornar todos os usuários
  findAll(): User[] {
    return this.users;
  }

  // Encontrar um usuário pelo ID
  findOne(id: number): User {
    return this.users.find(user => user.id === id);
  }

  // Atualizar um usuário
  update(id: number, updatedUser: User): User {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
      return this.users[userIndex];
    }
    return null;
  }

  // Deletar um usuário pelo ID
  delete(id: number): boolean {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
      return true;
    }
    return false;
  }
}
