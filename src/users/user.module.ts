import { Module } from '@nestjs/common';
import { UserController } from './adapters/inbound/user.controller';
import { GetAllUserUseCase } from './core/usecases/getAllUsers.usecase';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [GetAllUserUseCase],
  exports: [],
})
export class UserModule {}
