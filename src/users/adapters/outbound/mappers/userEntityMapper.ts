import { User } from 'src/users/core/domain/user';
import { UserEntity } from '../database/typeorm/entities/userEntity';

export class UserEntityMapper {
    static toDomain(userEntity: UserEntity): User {
        return new User(userEntity.nome, userEntity.email, userEntity.password);
    }
}
