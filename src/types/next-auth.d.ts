import 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string;
    userProfile: UserProfile;
  }

  interface Session {
    error?: 'RefreshAccessTokenError';
    userProfile?: UserProfile;
    user: {
      id?: string;
    };
  }
}

declare module 'next-auth/react' {
  interface SignInResponse {
    userProfile?: UserProfile;
  }
}
