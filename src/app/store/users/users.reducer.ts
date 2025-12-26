import { createReducer, on } from '@ngrx/store';
import { initialUsersState } from './users.state';
import * as UsersActions from './users.actions';

export const usersFeatureKey = 'users';

export const usersReducer = createReducer(
  initialUsersState,

  on(UsersActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users
  })),

  on(UsersActions.deleteUser, (state, { id }) => ({
    ...state,
    users: state.users.filter(u => u.id !== id)
  }))
);
