import { container } from "../lib/di/containter"
import { CreateUserInput } from "../schema"

export const createUserHandler = async(input:CreateUserInput) => {
 
    try {
        const userRepository = container?.cradle?.userRepository
        const user = await  userRepository.create(input)
    } catch (e) {
        
    }
    
}