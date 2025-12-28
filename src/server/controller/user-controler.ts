import { TRPCError } from "@trpc/server"
import { container } from "../../infrastructure/di/containter"
import { CreateUserInput, FilterQueryInput } from "../schema"

export const createUserHandler = async(input:CreateUserInput) => {
 
    try {
        const userRepository = container?.resolve('userRepository')
        const user = await  userRepository.create(input)
        return {
            status: 'success',
            data: {
                user
            }
        }
    } catch (e:any) {
        throw new TRPCError({
           code: 'INTERNAL_SERVER_ERROR',
           message: e?.message,
        });
    }
    
}

export const getUsersHandler = async ({
  filterQuery,
}: {
  filterQuery: FilterQueryInput;
}) => {
  try {
    const { limit, page } = filterQuery;
    const take = limit || 10;
    const skip = (page - 1) * limit;
    const scope = container.createScope()
    const prisma = scope?.resolve('prisma')

    const users = await prisma.user.findMany({
      skip,
      take,
    });

    return {
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    };
  } catch (err: any) {
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: err.message,
    });
  }
}