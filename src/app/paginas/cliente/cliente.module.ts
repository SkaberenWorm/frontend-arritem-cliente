import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteIndexComponent } from './cliente-index/cliente-index.component';
import { ResertPasswordComponent } from './resert-password/resert-password.component';

@NgModule({
  declarations: [ClienteIndexComponent, ResertPasswordComponent],
  imports: [CommonModule, ClienteRoutingModule]
})
export class ClienteModule {}
