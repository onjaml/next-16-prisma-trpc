'use client';

import {
  HydrationBoundary,
  type DehydratedState,
} from '@tanstack/react-query';

type Props = {
  state: DehydratedState;
  children: React.ReactNode;
};

function QHydrate({ state, children }: Props) {
  return (
    <HydrationBoundary state={state}>
      {children}
    </HydrationBoundary>
  );
}

export default QHydrate;


// 'use client';

// //@ts-ignore
// import { Hydrate, HydrateProps } from '@tanstack/react-query';

// function QHydrate(props: HydrateProps) {
//   return <Hydrate {...props} />;
// }

// export default QHydrate;
