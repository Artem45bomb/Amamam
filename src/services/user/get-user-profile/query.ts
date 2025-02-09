'use client';

import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';

import { getUserProfile } from './getUserProfile';

const GET_USER_PROFILE_KEY = 'GET_USER_PROFILE_KEY';

export const getUserProfileQueryKey = () => [GET_USER_PROFILE_KEY];

export const useGetUserProfileQuery = () => {
  const { data: session } = useSession();

  return useQuery({
    enabled: !!session,
    queryFn: () => getUserProfile(),
    queryKey: getUserProfileQueryKey(),
  });
};
