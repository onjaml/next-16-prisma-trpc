import {createContainer,asClass, asValue} from 'awilix'
import prisma from '@/infrastructure/prisma/prisma-client'
import { UserRepositoryImpl } from '@/server/repositories/user-repository'
import { PrismaClient } from '@/infrastructure/prisma/generated/prisma/client'

const container = createContainer<{
    userRepository:UserRepositoryImpl,
    prisma:PrismaClient
}>({
    injectionMode: "PROXY"
})

container.register({
    prisma: asValue(prisma),
    userRepository: asClass(UserRepositoryImpl).scoped()
})


export {
    container,
}