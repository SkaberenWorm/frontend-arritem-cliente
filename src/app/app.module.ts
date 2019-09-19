import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule
} from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppComponent } from './app.component';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FixedpluginModule } from './shared/fixedplugin/fixedplugin.module';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

import { AppRoutes } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BlockUIModule } from 'ng-block-ui';
import { BlockUIHttpModule } from 'ng-block-ui/http';
import { CommonsServiceModule } from './commons/commons-service.module';
import { EffectsModule } from '@ngrx/effects';
import { appEffect } from './store/effects';
import localeES from '@angular/common/locales/es-CL';
import { FooterClienteModule } from './shared/footer-cliente/footer-cliente.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeLayoutComponent } from './layouts/home/home.component';
import { SearchLayoutComponent } from './layouts/search/search.component';
import { MapLayoutComponent } from './layouts/map/map.component';
import { ProfileLayoutComponent } from './layouts/profile/profile.component';
import { LikeLayoutComponent } from './layouts/like/like.component';
import { ClienteModule } from './paginas/cliente/cliente.module';

registerLocaleData(localeES, 'es-CL');

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  imports: [],
  declarations: []
})
export class MaterialModule {}

@NgModule({
  imports: [
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: false
    }),
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FooterClienteModule,
    FixedpluginModule,
    CommonsServiceModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(appEffect),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    BlockUIModule.forRoot(),
    ClienteModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-CL'
    }
  ],
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    HomeLayoutComponent,
    SearchLayoutComponent,
    MapLayoutComponent,
    ProfileLayoutComponent,
    LikeLayoutComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
