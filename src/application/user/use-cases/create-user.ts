import { UserRepository } from "@/domain/user/user.repository";

export class CreateUserUseCase {
    constructor(private readonly userRepository: UserRepository) {}
    async execute(name: string, email:string) {
        return this.userRepository.create({
            email:email,
            name: name
        })
    }
}