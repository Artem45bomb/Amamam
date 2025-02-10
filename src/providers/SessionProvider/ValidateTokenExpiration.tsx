'use client';

import { memo, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useSignOut } from '@/hooks/auth/useSignOut';
import { useGetUserProfileQuery } from '@/services/user/get-user-profile';

const ExpiredTokenRedirect = memo(function ExpiredTokenRedirect() {
  const onSignOut = useSignOut();

  const onValidateToken = async () => {
    await onSignOut({ callbackUrl: '/login' });
  };

  useEffect(() => {
    onValidateToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
});

// This validation is additional in case next-auth cannot correctly validate token expiration
const expiredTokenErrorMessage =
  'Your signed-in session has expired.  Please sign-in again.';
const ExpiredRefreshTokenRedirect = memo(
  function ExpiredRefreshTokenRedirect() {
    const { error } = useGetUserProfileQuery();

    if (error?.message === expiredTokenErrorMessage) {
      return <ExpiredTokenRedirect />;
    }

    return null;
  },
);

export const ValidateTokenExpiration = () => {
  const { data: session, status } = useSession();


  if (
    status === 'authenticated' &&
    session?.error === 'RefreshAccessTokenError'
  ) {
    return <ExpiredTokenRedirect />;
  }

  return <ExpiredRefreshTokenRedirect />;
};
