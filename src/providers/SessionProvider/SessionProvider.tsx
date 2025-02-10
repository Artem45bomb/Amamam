import type { PropsWithChildren } from 'react';
import { getServerSession } from 'next-auth';

import NextAuthSessionProvider from './NextAuthSessionProvider';
import { ValidateTokenExpiration } from './ValidateTokenExpiration';

export const SessionProvider = async ({ children }: PropsWithChildren) => {
  const session = await getServerSession();

  return (
    <NextAuthSessionProvider session={session}>
        <ValidateTokenExpiration />

      {children}
    </NextAuthSessionProvider>
  );
};
