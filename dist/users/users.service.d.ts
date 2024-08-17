import { User } from './user.entity';
export declare class UsersService {
    private users;
    create(user: User): User;
    findAll(): User[];
    findOne(id: number): User;
    update(id: number, updatedUser: User): User;
    delete(id: number): boolean;
}
