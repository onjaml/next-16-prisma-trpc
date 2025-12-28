import { createTRPCRouter,baseProcedure } from "@/utils/trpc-server";

export const appRouter = createTRPCRouter({
  healthchecker: baseProcedure.query(({ ctx }) => {
    return {
      status: "success",
      message: "Welcome to trpc with Next.js 16",
    };
  }),
});

export type AppRouter = typeof appRouter;
