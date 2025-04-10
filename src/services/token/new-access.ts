'use client';
import { setTokens } from '@/utils/cookies/server';
import axios from 'axios';

export const newTokens = async (refresh: string) => {
  const response = await axios.post<{ access: string }>(
    'http://localhost:8000/token/refresh/',
    {refresh},
  );
  const data = {
    accessToken: response.data.access,
  };
  await setTokens({
    access: data.accessToken,
  });

  return data;
};
