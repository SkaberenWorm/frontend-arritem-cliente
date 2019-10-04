import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './services/authentication.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { TokenInterceptor } from './interceptors/token.interceptor';
import { JwtInterceptor } from './interceptors/jwt.interceptor';

import { LoginGuard } from './guards/login.guard';
import { AuthGuard } from './guards/auth.guard';
import { Util } from './util/util';
import { UtilFormating } from './util/util.formating';
import { UtilValidation } from './util/util.validation';
import { FieldErrorDisplayComponent } from './components/field-error-display/field-error-display.component';
import { BlockUIModule } from 'ng-block-ui';
import { BlockUIHttpModule } from 'ng-block-ui/http';
import { NgbPaginationModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSelectModule, MatInputModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RolClienteGuard } from './guards/rol-cliente.guard';
import { LoadingComponent } from './components/loading/loading.component';
@NgModule({
  declarations: [FieldErrorDisplayComponent, LoadingComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BlockUIModule,
    BlockUIHttpModule,
    NgbPaginationModule,
    NgbModalModule,
    NgxPaginationModule,
    NgxPaginationModule,
    MatSelectModule,
    MatInputModule,
    NgbModule
  ],
  providers: [
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    LoginGuard,
    RolClienteGuard,
    AuthGuard,
    Util,
    UtilFormating,
    UtilValidation
  ],
  exports: [FieldErrorDisplayComponent, LoadingComponent]
})
export class CommonsServiceModule {}
