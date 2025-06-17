import { UserGateway } from 'src/users/core/gateways/userGateway';

export class UserGatewayAdapter implements UserGateway {
  async getAllUsers(): Promise<any> {
    return new Promise((resolve) => {
      resolve([
        {
          nome: 'João',
          email: 'joao@gmail.com',
          senha: '123456',
        },
        {
          nome: 'Maria',
          email: 'maria@gmail.com',
          senha: '123456',
        },
      ]);
    });
  }
}
