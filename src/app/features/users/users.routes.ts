import { Routes } from '@angular/router';

export const USERS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./add-user/add-user')
        .then(m => m.AddUser)
  }
];
