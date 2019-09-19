import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentoRoutingModule } from './departamento-routing.module';
import { DepartamentoListComponent } from './departamento-list/departamento-list.component';
import { DepartamentoViewComponent } from './departamento-view/departamento-view.component';

@NgModule({
  declarations: [DepartamentoListComponent, DepartamentoViewComponent],
  imports: [CommonModule, DepartamentoRoutingModule]
})
export class DepartamentoModule {}
