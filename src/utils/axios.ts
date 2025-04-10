import axios from 'axios';
import { getSession, signOut } from 'next-auth/react';
import { getTokens } from '@/utils/cookies/server';
import { newTokens } from '@/services/token/new-access';
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(async (config) => {
  const { access } = await getTokens();
  const session = await getSession();
  if (access && session) {
    config.headers.Authorization = `Bearer ${access}`;
  }
  return config;
});

let isRefreshing = false;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let failedQueue: any[] = [];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const processQueue = (error: any) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve();
    }
  });

  failedQueue = [];
};

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const { refresh } = await getTokens();

    const session = await getSession();
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(() => instance(originalRequest))
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      if (refresh && session) {
        try {
          const data = await newTokens(refresh);
          instance.defaults.headers.common['Authorization'] =
            `Bearer ${data.accessToken}`;
          originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
          processQueue(null);
          return instance(originalRequest);
        } catch (error) {
          processQueue(error);
          return userOut();
        } finally {
          isRefreshing = false;
        }
      }
      return await userOut();
    }
    return Promise.reject(error);
  },
);

async function userOut() {
  try {
    await signOut({ redirect: false });
    window.location.href = '/login';
  } catch (error) {
    return Promise.reject(error);
  }
}

export { instance as axios };
