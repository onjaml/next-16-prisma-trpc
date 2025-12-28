import { PrismaClient, Prisma } from "./generated/client";

export type PrismaLike =PrismaClient
//   | Prisma.TransactionClient

export type  TransactionClient = Prisma.TransactionClient  
