import { User } from '../domain/user';

export interface UserGateway {
    getAllUsers(): Promise<User[]>;
    createUser(user: User): Promise<number>;
}
