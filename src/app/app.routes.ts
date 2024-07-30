import { Routes } from '@angular/router';
import { TestListComponent } from './test-list/test-list.component';
import { NewTestComponent } from './new-test/new-test.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: TestListComponent, canActivate: [AuthGuard] },
  { path: 'new-test', component: NewTestComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];
