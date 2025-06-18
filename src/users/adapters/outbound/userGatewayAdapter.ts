import { User } from 'src/users/core/domain/user';
import { UserGateway } from 'src/users/core/gateways/userGateway';

export class UserGatewayAdapter implements UserGateway {
  async getAllUsers(): Promise<User[]> {
    return new Promise((resolve) => {
      resolve([
        new User('João', 'joao@email.com', '123456'),
        new User('Fernando', 'fernando@email.com', '123456'),
      ]);
    });
  }
}
