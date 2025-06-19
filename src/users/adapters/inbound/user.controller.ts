import { Controller, Get } from '@nestjs/common';
import { GetAllUserUseCase } from 'src/users/core/usecases/getAllUsers.usecase';

@Controller('/api/v1/users')
export class UserController {
    constructor(private readonly getAllUserUseCase: GetAllUserUseCase) {}

    @Get()
    async getAllUsers() {
        return await this.getAllUserUseCase.execute();
    }
}
