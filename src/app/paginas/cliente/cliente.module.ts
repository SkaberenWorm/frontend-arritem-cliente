import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteIndexComponent } from './cliente-index/cliente-index.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ClienteIndexComponent],
  imports: [CommonModule, ClienteRoutingModule, NgbCarouselModule]
})
export class ClienteModule {}
