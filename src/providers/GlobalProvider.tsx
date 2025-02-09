import type { PropsWithChildren } from 'react';
import { SessionProvider } from './SessionProvider';
import { ReactQueryProvider } from './ReactQueryProvider';


export const GlobalProvider = ({ children }: PropsWithChildren) => {
  return (
      <ReactQueryProvider>
        <SessionProvider>
            {children}
        </SessionProvider>
      </ReactQueryProvider>
  );
};
