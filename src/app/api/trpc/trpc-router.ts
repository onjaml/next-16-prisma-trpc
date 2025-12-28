import userRouter from "@/infrastructure/trpc/user-router";
import { createTRPCRouter,baseProcedure,mergeRouters,trpc } from "@/utils/trpc-server";
import { createServerSideHelpers } from '@trpc/react-query/server';
import SuperJSON from "superjson";
import { z } from 'zod'


export const healthCheckerRouter = createTRPCRouter({
  healthchecker: baseProcedure
    .input(
        z.object({
            text: z.string().optional().nullish().nullable()
        }).nullish()
    )
    .query(( parametter ) => {
    return {
      status: "success",
      message: "Welcome to trpc with Next.js 16",
      ctx: parametter
    };
  }),
});
export const appRouter = mergeRouters(
  userRouter,
  healthCheckerRouter
);

export const createSSRHelper = () =>
  createServerSideHelpers({
    router: appRouter,
    transformer: SuperJSON,
    ctx: () => {},
  });

export type AppRouter = typeof appRouter;
