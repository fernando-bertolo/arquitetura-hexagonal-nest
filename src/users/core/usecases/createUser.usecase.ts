import { User } from '../domain/user';
import { UserGateway } from '../gateways/userGateway';
import { UseCase } from '../interfaces/usecase';

export class CreateUserUseCase implements UseCase<User, number> {
    constructor(private readonly userGateway: UserGateway) {}

    async execute(request: User): Promise<number> {
        return await this.userGateway.createUser(request);
    }
}
