'use client';

import main from '@/infrastructure/prisma/seed';
import { trpc } from '@/utils/trpc-client';
import { useEffect } from 'react';

export default function Test() {
  let { data, isLoading, isFetching, isSuccess } = trpc.healthchecker.useQuery({
    text: "hello"
  });
  if (isLoading || isFetching) return <p>Loading...</p>;

  useEffect(() => {
   if(isSuccess) {
     main()
   }
  },[isSuccess])
  return (
    <div className='text-xl font-bold'>
      <h1>Status: {data?.status}</h1>
      <h1>Message: {data?.message}</h1>
    </div>
  );
}
