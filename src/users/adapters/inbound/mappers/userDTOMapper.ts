import { User } from 'src/users/core/domain/user';
import { CreateUserDTO } from '../dtos/createUserDTO';

export class UserDTOMapper {
    static toDomain(user: CreateUserDTO): User {
        return new User(user.name, user.email, user.password);
    }
}
