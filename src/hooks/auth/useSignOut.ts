import { useQueryClient } from '@tanstack/react-query';
import { type SignOutParams, signOut } from 'next-auth/react';
import { getUserProfileQueryKey } from '@/services/user/get-user-profile/query';

export function useSignOut() {
  const queryClient = useQueryClient();

  const onSignOut = async (options?: SignOutParams) => {
    await signOut(options);

    // Invalidation of keys so that query data is requested again when logging in
    queryClient.invalidateQueries({ queryKey: getUserProfileQueryKey() });
  };

  return onSignOut;
}
