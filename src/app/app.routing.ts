import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { LoginGuard } from './commons/guards/login.guard';
import { RolAdminGuard } from './commons/guards/rol-admin.guard';
import { ClienteLayoutComponent } from './layouts/cliente-layout/cliente-layout.component';
import { RolClienteGuard } from './commons/guards/rol-cliente.guard';
import { RolClienteDenyGuard } from './commons/guards/rol-cliente-deny.guard';
import { RolFuncionarioGuard } from './commons/guards/rol-funcionario.guard';
import { FuncionarioLayoutComponent } from './layouts/funcionario-layout/funcionario-layout.component';

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
    path: 'check',
    component: FuncionarioLayoutComponent,
    loadChildren: './paginas/check/check.module#CheckModule',
    canLoad: [LoginGuard, RolClienteDenyGuard]
  },
  {
    path: 'inicio',
    component: ClienteLayoutComponent,
    loadChildren: './paginas/cliente/cliente.module#ClienteModule',
    canLoad: [LoginGuard, RolClienteGuard]
  },
  {
    path: 'departamento',
    component: AdminLayoutComponent,
    loadChildren: './paginas/departamento/departamento.module#DepartamentoModule',
    canLoad: [LoginGuard]
  }
];
