import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckRoutingModule } from './check-routing.module';
import { CheckIndexComponent } from './check-index/check-index.component';
import { CheckInComponent } from './check-in/check-in.component';
import { CheckOutComponent } from './check-out/check-out.component';

@NgModule({
  declarations: [CheckIndexComponent, CheckInComponent, CheckOutComponent],
  imports: [
    CommonModule,
    CheckRoutingModule
  ]
})
export class CheckModule { }
