import { User } from 'src/users/core/domain/user';
import { UserGateway } from 'src/users/core/gateways/userGateway';
import { Repository } from 'typeorm';
import { UserEntity } from './database/typeorm/entities/userEntity';
import { UserEntityMapper } from './mappers/userEntityMapper';

export class UserGatewayAdapter implements UserGateway {
    constructor(private readonly userRepository: Repository<UserEntity>) {}

    async getAllUsers(): Promise<User[]> {
        const userEntity = await this.userRepository.find();
        return userEntity.map((user) => UserEntityMapper.toDomain(user));
    }

    async createUser(user: User): Promise<number> {
        const savedUser = await this.userRepository.save(
            UserEntityMapper.toEntity(user),
        );
        return savedUser.id;
    }
}
