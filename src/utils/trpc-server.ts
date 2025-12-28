import { initTRPC } from '@trpc/server';
import SuperJSON from 'superjson';

export const trpc = initTRPC.create({
  transformer: SuperJSON,
});


export const {
  router,
  procedure,
} = trpc