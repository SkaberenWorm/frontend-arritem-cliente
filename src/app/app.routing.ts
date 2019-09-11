import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { LoginGuard } from './commons/guards/login.guard';
import { RolAdminGuard } from './commons/guards/rol-admin.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: AuthLayoutComponent,
    loadChildren: './paginas/login/login.module#LoginModule'
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    loadChildren: './paginas/admin/admin.module#AdminModule',
    canLoad: [LoginGuard, RolAdminGuard]
  },
  {
    path: 'user',
    component: AdminLayoutComponent,
    loadChildren: './paginas/admin/admin.module#AdminModule',
    canLoad: [LoginGuard, RolAdminGuard]
  },
  {
    path: 'departamento',
    component: AdminLayoutComponent,
    loadChildren: './paginas/departamento/departamento.module#DepartamentoModule',
    canLoad: [LoginGuard, RolAdminGuard]
  }
];
