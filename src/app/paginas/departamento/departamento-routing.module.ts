import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartamentoListComponent } from './departamento-list/departamento-list.component';
import { LoginGuard } from 'src/app/commons/guards/login.guard';
import { RolClienteGuard } from 'src/app/commons/guards/rol-cliente.guard';

const routes: Routes = [
  {
    path: '',
    component: DepartamentoListComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'listado',
    component: DepartamentoListComponent,
    canActivate: [LoginGuard]
  },
  {
    path: ':id/view',
    component: DepartamentoListComponent,
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentoRoutingModule {}
