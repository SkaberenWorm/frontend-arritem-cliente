import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentoRoutingModule } from './departamento-routing.module';
import { DepartamentoListComponent } from './departamento-list/departamento-list.component';
import { DepartamentoViewComponent } from './departamento-view/departamento-view.component';
import { CommonsServiceModule } from 'src/app/commons/commons-service.module';
import { NavbarModule } from 'src/app/shared/navbar/navbar.module';

@NgModule({
  declarations: [DepartamentoListComponent, DepartamentoViewComponent],
  imports: [CommonModule, DepartamentoRoutingModule, CommonsServiceModule, NavbarModule]
})
export class DepartamentoModule {}
