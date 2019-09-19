import { Routes } from '@angular/router';

import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { LoginGuard } from './commons/guards/login.guard';
import { ClienteLayoutComponent } from './layouts/cliente-layout/cliente-layout.component';
import { RolClienteGuard } from './commons/guards/rol-cliente.guard';
import { GeneralLayoutComponent } from './layouts/general/general-layout.component';

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
    path: 'inicio',
    component: ClienteLayoutComponent,
    loadChildren: './paginas/cliente/cliente.module#ClienteModule',
    canLoad: [LoginGuard, RolClienteGuard]
  },
  {
    path: 'departamento',
    component: GeneralLayoutComponent,
    loadChildren: './paginas/departamento/departamento.module#DepartamentoModule'
  }
];
