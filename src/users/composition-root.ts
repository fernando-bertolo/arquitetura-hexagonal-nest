import { UserGatewayAdapter } from './adapters/outbound/userGatewayAdapter';
import { GetAllUserUseCase } from './core/usecases/getAllUsers.usecase';

export class UserCompositionRoot {
  private userGateway: UserGatewayAdapter;

  constructor() {
    this.userGateway = new UserGatewayAdapter();
  }

  createGetAllUserUseCase() {
    return new GetAllUserUseCase(this.userGateway);
  }
}

export const createGetAllUserUseCase = () =>
  new UserCompositionRoot().createGetAllUserUseCase();
