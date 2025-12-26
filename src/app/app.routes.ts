import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [

  // ✅ DEFAULT ENTRY → LOGIN
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // ✅ LOGIN (PUBLIC)
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login').then(m => m.Login)
  },

  // ✅ PROTECTED AREA
  {
    path: '',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./shared/layout/layout.component')
        .then(m => m.LayoutComponent),
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard.routes')
            .then(m => m.DASHBOARD_ROUTES)
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./features/users/users.routes')
            .then(m => m.USERS_ROUTES)
      }
    ]
  },

  // ✅ FALLBACK
  {
    path: '**',
    redirectTo: 'login'
  }
];
