'use client';

import { signIn, getSession } from 'next-auth/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getUserProfileQueryKey } from '@/services/user/get-user-profile';
import { LoginFetcherParams } from './types';
import {SessionApp} from "@/auth";

async function loginFetcher({ username, password }: LoginFetcherParams) {
  const result = await signIn('credentials', {
    username,
    password,
    redirect: false,
  });

  if (result?.ok) {
    const session = await getSession() as SessionApp;
    return { ...result, userProfile: session.userProfile };
  }

  window.location.href = '/';
}

export const useLoginMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: LoginFetcherParams) => loginFetcher(params),
    onSuccess: async (data) => {
      const { search } = window.location;
      const params = new URLSearchParams(search);
      let strParams = '';
      params.forEach((value, key) => {
        strParams += `${key}=${value}&`;
      });
      strParams = strParams.slice(0, -1);

      if (data?.ok && data?.userProfile) {
        queryClient.setQueryData(getUserProfileQueryKey(),data.userProfile );
        window.location.href = '/' + (strParams ? `?${strParams}` : '');
      }
    },
  });
};
