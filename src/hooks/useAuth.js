import { useStores } from '../store';

export function useAuth() {
  const { userStore } = useStores();

  return {
    isAuth: !!userStore.email,
    email: userStore.email,
    token: userStore.token,
    id: userStore.id,
  };
}
