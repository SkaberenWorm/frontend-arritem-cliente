import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterClienteRoutingModule } from './footer-cliente-routing.module';
import { FooterClienteComponent } from './footer-cliente/footer-cliente.component';

@NgModule({
  declarations: [FooterClienteComponent],
  imports: [CommonModule, FooterClienteRoutingModule],
  exports: [FooterClienteComponent]
})
export class FooterClienteModule {}
