import { Routes } from '@angular/router';

import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { LoginGuard } from './commons/guards/login.guard';
import { RolClienteGuard } from './commons/guards/rol-cliente.guard';
import { HomeLayoutComponent } from './layouts/home/home.component';
import { SearchLayoutComponent } from './layouts/search/search.component';
import { MapLayoutComponent } from './layouts/map/map.component';
import { ProfileLayoutComponent } from './layouts/profile/profile.component';
import { InicioComponent } from './paginas/welcome/inicio/inicio.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: InicioComponent,
    loadChildren: './paginas/welcome/welcome.module#WelcomeModule'
  },
  {
    path: 'welcome',
    component: InicioComponent,
    loadChildren: './paginas/welcome/welcome.module#WelcomeModule'
  },
  {
    path: 'login',
    component: AuthLayoutComponent,
    loadChildren: './paginas/login/login.module#LoginModule'
  },
  {
    path: 'inicio',
    component: HomeLayoutComponent,
    loadChildren: './paginas/cliente/cliente.module#ClienteModule',
    canLoad: [LoginGuard, RolClienteGuard]
  },
  {
    path: 'departamento',
    component: SearchLayoutComponent,
    loadChildren: './paginas/departamento/departamento.module#DepartamentoModule',
    canLoad: [LoginGuard, RolClienteGuard]
  },
  {
    path: 'departamento',
    component: SearchLayoutComponent,
    loadChildren: './paginas/departamento/departamento.module#DepartamentoModule'
  },
  {
    path: 'cliente',
    component: ProfileLayoutComponent,
    loadChildren: './paginas/cliente/cliente.module#ClienteModule'
  }
];
