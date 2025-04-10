'use server';
import { cookies } from 'next/headers';
import {
  ACCESS_TOKEN_NAME,
  REFRESH_TOKEN_NAME,
} from '@/utils/cookies/constant';

export const setTokens = async (tokens: Tokens) => {
  if (tokens.access) {
    (await cookies()).set(ACCESS_TOKEN_NAME, tokens.access, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      expires: new Date(Date.now() + 60 * 60 * 24 * 365 * 1000),
    });
  }

  if (tokens.refresh) {
    (await cookies()).set(REFRESH_TOKEN_NAME, tokens.refresh, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      expires: new Date(Date.now() + 60 * 60 * 24 * 365 * 1000),
    });
  }
};

export const getAccessToken = async () => {
  return ( await cookies()).get(ACCESS_TOKEN_NAME)?.value;
};

export const getRefreshToken = async () => {
  return (await cookies()).get(REFRESH_TOKEN_NAME)?.value;
};

export const getTokens = async (): Promise<Tokens> => {
  return {
    access: await getAccessToken(),
    refresh: await getRefreshToken(),
  };
};
