import { Repository } from 'typeorm';
import { UserGatewayAdapter } from './adapters/outbound/userGatewayAdapter';
import { GetAllUserUseCase } from './core/usecases/getAllUsers.usecase';
import { UserEntity } from './adapters/outbound/database/typeorm/entities/userEntity';
import { CreateUserUseCase } from './core/usecases/createUser.usecase';

export class UserCompositionRoot {
    private userGateway: UserGatewayAdapter;

    constructor(userRepository: Repository<UserEntity>) {
        this.userGateway = new UserGatewayAdapter(userRepository);
    }

    createGetAllUserUseCase() {
        return new GetAllUserUseCase(this.userGateway);
    }

    createCreateUserUseCase() {
        return new CreateUserUseCase(this.userGateway);
    }
}

export const createGetAllUserUseCase = (
    userRepository: Repository<UserEntity>,
) => new UserCompositionRoot(userRepository).createGetAllUserUseCase();

export const createCreateUserUseCase = (
    userRepository: Repository<UserEntity>,
) => new UserCompositionRoot(userRepository).createCreateUserUseCase();
