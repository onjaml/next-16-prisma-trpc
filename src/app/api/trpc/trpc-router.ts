import { createTRPCRouter,baseProcedure } from "@/utils/trpc-server";
import { z } from 'zod'

export const appRouter = createTRPCRouter({
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

export type AppRouter = typeof appRouter;
