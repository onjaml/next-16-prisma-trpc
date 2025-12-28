import { trpc } from "@/utils/trpc-server";

export const appRouter = trpc.router({
  healthchecker: trpc.procedure.query(({ ctx }) => {
    return {
      status: "success",
      message: "Welcome to trpc with Next.js 14 and React Query",
      ctx:ctx
    };
  }),
});

export type AppRouter = typeof appRouter;
