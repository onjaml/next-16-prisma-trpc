'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink, getFetch, loggerLink } from '@trpc/client';
import { useState } from 'react';
import superjson from 'superjson';
import { trpc } from './trpc-client';
import queryClient from './query-client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function getUrl() {
  const base = (() => {
    if (typeof window !== 'undefined') return '';
   // if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    return 'http://localhost:3000';
  })();
  return `${base}/api/trpc`;
}

export const TrpcProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links:[
         loggerLink({
          enabled: () =>true
         }),
         httpBatchLink({
          transformer:superjson,
          url:getUrl()
         })
      ]
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </trpc.Provider>
  );
};
