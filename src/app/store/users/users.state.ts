export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

export interface UsersState {
  users: User[];
}

export const initialUsersState: UsersState = {
  users: []
};
