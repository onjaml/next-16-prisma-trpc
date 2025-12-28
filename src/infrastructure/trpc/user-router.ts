import { createUserHandler, getUsersHandler } from "@/server/controller/user-controler";
import { createUserSchema, filterQuery } from "@/server/schema";
import {createTRPCRouter ,baseProcedure} from "@/utils/trpc-server"


const userRouter = createTRPCRouter({
  createUser: baseProcedure
    .input(createUserSchema)
    .mutation(({ input }) => createUserHandler(input)),
  getUsers:baseProcedure
    .input(filterQuery)
    .query(({ input }) => getUsersHandler({ filterQuery: input })),
});

export default userRouter;
