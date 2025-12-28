import { User } from "./user.entity"

export interface UserRepository {
    findAll(): Promise<Array<User>>
    findById(id: string): Promise<User | null>
    delete(id:string): Promise<User>
    deleteMany(ids: Array<string>): Promise<{count:number}>
    create(user: User): Promise<Partial<User>>
    createMany(users: Array<User>,skipDuplicates:boolean): Promise<any>
}