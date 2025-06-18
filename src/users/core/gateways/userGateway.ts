import { User } from '../domain/user';

export interface UserGateway {
  getAllUsers(): Promise<User[]>;
}
