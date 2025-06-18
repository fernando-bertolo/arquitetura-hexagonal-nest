import { User } from "src/users/core/domain/user";
import { Repository } from "typeorm";

export interface UserRepository extends Repository<User>