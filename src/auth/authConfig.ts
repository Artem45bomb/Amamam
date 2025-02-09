import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { SessionApp } from '@/auth/type';
import {userProfile} from "@/auth/mock";

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
  pages: {
    signIn: '/login',
    error: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, account, user, trigger, session }) {

      if (trigger == 'update') user = session.user;
      if ((user && account) || trigger == 'update') {
        return {
          ...token,
          userProfile:user.userProfile,
        };
      } else if (Date.now() < Number(token.exp) * 1000) {
        return token;
      } else {
        return { ...token, error: 'RefreshAccessTokenError' };
      }
    },
    async session(params) {
      const { token, newSession, trigger } = params;
      const session =
        trigger == 'update' ? newSession : (params.session as SessionApp);

      if (token) {
        session.user = {
          ...session.user,
        };
        session.userProfile = token.userProfile as UserProfile;
      }
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        try {

          return {
            id: userProfile._id,
            email: userProfile.email,
            userProfile:userProfile,
          };
        } catch (e) {
          console.error('headers:', e);
          throw new Error('Invalid credentials');
        }
      },
    }),
  ],
};
