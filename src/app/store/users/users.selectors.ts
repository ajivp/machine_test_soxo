import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from './users.state';
import { usersFeatureKey } from './users.reducer';

/**
 * ✅ Feature selector
 * This is what you were missing
 */
export const selectUsersState =
  createFeatureSelector<UsersState>(usersFeatureKey);

/**
 * ✅ Selector for users list
 */
export const selectUsers = createSelector(
  selectUsersState,
  (state) => state.users
);
