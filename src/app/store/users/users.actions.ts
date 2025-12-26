import { createAction, props } from '@ngrx/store';
import { User } from './users.state';

/** Load users */
export const loadUsers = createAction('[Users] Load Users');

/** Load users success */
export const loadUsersSuccess = createAction(
  '[Users] Load Users Success',
  props<{ users: User[] }>()
);

/** Delete user */
export const deleteUser = createAction(
  '[Users] Delete User',
  props<{ id: number }>()
);
