// types
export type UserProfile = {
  id: string;
  avatar: string | null;
  firstName: string;
  lastName: string;
  joinedAt: Date;
  ledTeam: {
    id: string;
    name: string;
  };
};
