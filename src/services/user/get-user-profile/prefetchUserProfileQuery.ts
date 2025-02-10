import type { QueryClient } from '@tanstack/react-query';

import { getUserProfile } from './getUserProfile';
import { getUserProfileQueryKey } from './query';

export async function prefetchUserProfileQuery(queryClient: QueryClient) {
  await queryClient.prefetchQuery({
    queryFn: getUserProfile,
    queryKey: getUserProfileQueryKey(),
  });
}
