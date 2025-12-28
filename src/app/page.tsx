import { trpc } from '@/utils/trpc-client';
import { createSSRHelper } from './api/trpc/trpc-router';
import QHydrate from '@/presentation/utils/hydrate-client';
import UserForm from '@/presentation/components/user-form';
import ListUsers from '@/presentation/components/list-users';
import { dehydrate } from '@tanstack/react-query';

export default async function Home() {
  const helpers = createSSRHelper();
  await helpers.getUsers.prefetch({ limit: 10, page: 1 });
  
  return (
    <QHydrate state={dehydrate(helpers.queryClient)}>
      <main style={{ maxWidth: 1200, marginInline: 'auto', padding: 20 }}>
        <div className='w-full flex justify-center mb-8'>
          <UserForm />
        </div>
        <ListUsers />
      </main>
    </QHydrate>
  );
}
