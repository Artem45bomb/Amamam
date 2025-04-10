import { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { SessionApp } from '@/auth/type';
import {authService} from "@/services/impl/AuthService";
import {setTokens} from "@/utils/cookies/server";

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
      type: "credentials",
      name: 'Credentials',
      credentials: {
        username: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials)
          throw new Error('Invalid credentials');
        try {
          const {username,password} = credentials;
          console.log(credentials)
          const tokens = await authService.login(username,password)
          const userProfile = await authService.getUserProfile(tokens.access)
          await setTokens({
            access:tokens.access,
            refresh:tokens.refresh
          })

          return {
            id: ""+userProfile.id,
            email: userProfile.email,
            userProfile:userProfile,
          };
        } catch {
          throw new Error('Invalid credentials');
        }
      }
    }),
  ],
};
