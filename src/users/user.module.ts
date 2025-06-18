import { Module } from '@nestjs/common';
import { UserController } from './adapters/inbound/user.controller';
import { GetAllUserUseCase } from './core/usecases/getAllUsers.usecase';
import { createGetAllUserUseCase } from './composition-root';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    {
      provide: GetAllUserUseCase,
      useFactory: () => createGetAllUserUseCase(),
      inject: [],
    },
  ],
  exports: [],
})
export class UserModule {}
