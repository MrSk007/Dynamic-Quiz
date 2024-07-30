import { Routes } from '@angular/router';
import { AuthGuard } from '../guards';
import {LoginComponent} from '../components';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./../components').then((m) => m.TestDashboardComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'new-test',
    loadComponent: () =>
      import('./../components').then((m) => m.NewTestComponent),
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
];
