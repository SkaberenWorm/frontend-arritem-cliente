import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteIndexComponent } from './cliente-index/cliente-index.component';
import { LoginGuard } from 'src/app/commons/guards/login.guard';
import { RolClienteGuard } from 'src/app/commons/guards/rol-cliente.guard';

const routes: Routes = [
  {
    path: '',
    component: ClienteIndexComponent,
    canActivate: [LoginGuard, RolClienteGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule {}
