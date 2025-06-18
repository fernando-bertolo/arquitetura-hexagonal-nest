import { User } from '../domain/user';
import { UserGateway } from '../gateways/userGateway';
import { UseCaseNoParams } from '../interfaces/usecaseNoParams';

export class GetAllUserUseCase implements UseCaseNoParams<User[]> {
  constructor(private readonly userGateway: UserGateway) {}

  async execute(): Promise<User[]> {
    return await this.userGateway.getAllUsers();
  }
}
