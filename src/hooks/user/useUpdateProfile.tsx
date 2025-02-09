'use client';
import { useSession } from 'next-auth/react';
import { useQueryClient } from '@tanstack/react-query';
import {
  getUserProfileQueryKey,
  useGetUserProfileQuery,
} from '@/services/user/get-user-profile';
import { SetStateAction, useCallback } from 'react';

export const useUpdateProfile = () => {
  const { data } = useGetUserProfileQuery();
  const { update } = useSession();
  const query = useQueryClient();
  return useCallback(
    async (state: SetStateAction<UserProfile>) => {
      if (data) {
        const profile = typeof state === 'function' ? state(data) : state;

        query.setQueryData(getUserProfileQueryKey(), profile);
        await update({
          user: {
            ...data,
            userProfile: profile,
          },
        });
      }
    },
    [data, update, query],
  );
};
