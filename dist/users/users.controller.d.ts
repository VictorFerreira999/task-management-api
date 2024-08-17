import { UsersService } from './users.service';
import { User } from './user.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(user: User): User;
    findAll(): User[];
    findOne(id: string): User;
    update(id: string, updatedUser: User): User;
    delete(id: string): boolean;
}
