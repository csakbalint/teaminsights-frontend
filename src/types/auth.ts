// project imports
import { UserProfile } from 'types/user-profile';

export type JWTContextType = {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: UserProfile | null | undefined;
  logout: () => void;
  login: (username: string, password: string) => Promise<void>;
  updateProfile: VoidFunction;
};
