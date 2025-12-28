import { User } from "@/domain/user/user.entity";
import { UserRepository } from "@/domain/user/user.repository";

// une action métier, pas une requête HTTP.
export class CreateUserUseCase {
    constructor(private readonly userRepository: UserRepository) {}
    async execute(input:{name: string, email:string}) {
        const user = new User(input.email,input.name)
        return this.userRepository.create(user)
    }
}