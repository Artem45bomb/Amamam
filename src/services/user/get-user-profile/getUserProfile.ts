
import { getSession } from 'next-auth/react';

const errorMessage = 'Get user profile failed with unknown error';

export async function getUserProfile() {
  const session = await getSession();
  console.log(session);

  if (session?.userProfile) {
    return session.userProfile;
  }



  throw new Error(errorMessage);
}
