import { Module } from '@nestjs/common';
import { UserController } from './adapters/inbound/user.controller';
import { GetAllUserUseCase } from './core/usecases/getAllUsers.usecase';
import {
    createCreateUserUseCase,
    createGetAllUserUseCase,
} from './composition-root';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './adapters/outbound/database/typeorm/entities/userEntity';
import { Repository } from 'typeorm';
import { CreateUserUseCase } from './core/usecases/createUser.usecase';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [UserController],
    providers: [
        {
            provide: GetAllUserUseCase,
            useFactory: (userRepository: Repository<UserEntity>) =>
                createGetAllUserUseCase(userRepository),
            inject: [getRepositoryToken(UserEntity)],
        },
        {
            provide: CreateUserUseCase,
            useFactory: (userRepository: Repository<UserEntity>) =>
                createCreateUserUseCase(userRepository),
            inject: [getRepositoryToken(UserEntity)],
        },
    ],
    exports: [],
})
export class UserModule {}
