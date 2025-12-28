import { router,procedure } from "@/utils/trpc-server";

export const appRouter = router({
  healthchecker: procedure.query(({ ctx }) => {
    return {
      status: "success",
      message: "Welcome to trpc with Next.js 16",
      ctx:ctx
    };
  }),
});

export type AppRouter = typeof appRouter;
