import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserUseCase } from 'src/users/core/usecases/createUser.usecase';
import { GetAllUserUseCase } from 'src/users/core/usecases/getAllUsers.usecase';
import { CreateUserDTO } from './dtos/createUserDTO';
import { UserDTOMapper } from './mappers/userDTOMapper';

@Controller('/api/v1/users')
export class UserController {
    constructor(
        private readonly getAllUserUseCase: GetAllUserUseCase,
        private readonly createUserUseCase: CreateUserUseCase,
    ) {}

    @Get()
    async getAllUsers() {
        return await this.getAllUserUseCase.execute();
    }

    @Post()
    async createUser(@Body() user: CreateUserDTO) {
        return await this.createUserUseCase.execute(
            UserDTOMapper.toDomain(user),
        );
    }
}
