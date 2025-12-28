import { PrismaLike } from "@/infrastructure/prisma/prisma.type";
import { UserCreateInput } from "@/infrastructure/prisma/generated/models";
import { CreateUserInput } from "../schema";
export interface UserRepository {
    findById(id: string): Promise<any>
    create(user: UserCreateInput): Promise<Partial<UserCreateInput>>
    createMany(users: Array<CreateUserInput>,skipDuplicates:boolean): Promise<any>
}

export class UserRepositoryImpl implements UserRepository {
    constructor(private readonly prisma: PrismaLike) { }

    findById(id: string) {
        return  this.prisma.user.findUnique({
            where: {
                id: id
            }
        })
    }

     create(user: UserCreateInput): Promise<Partial<UserCreateInput>> {
        const restult =   this.prisma.user.create({
            data: user,
        })

       return restult
    }

    createMany(users: Array<CreateUserInput>,skipDuplicates?:boolean): Promise<any> {
       return this.prisma.user.createMany({
        data: users,
        skipDuplicates: skipDuplicates ?? false
       })    
    }
}