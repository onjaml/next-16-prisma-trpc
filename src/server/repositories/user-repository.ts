import { PrismaLike } from "@/infrastructure/prisma/prisma.type";
import { UserCreateInput } from "@/infrastructure/prisma/generated/prisma/models";
import { CreateUserInput } from "../schema";
import { UserRepository } from "@/domain/user/user.repository";
import { User } from "@/domain/user/user.entity";

export class UserRepositoryImpl implements UserRepository {
    private readonly prisma: PrismaLike
    constructor({ prisma }: { prisma: PrismaLike }) {
      this.prisma = prisma
    }

    findAll(): Promise<Array<User>> {
        return this.prisma.user.findMany()
    }

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

    delete(id: string) {
       return this.prisma.user.delete({
            where: {
              id:id
            }
        })
    }

    deleteMany(ids: Array<string>) {
    return this.prisma.user.deleteMany({
        where: {
            id: { in: ids}
        }
     })   
    }
}