import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';
import { HomeNavbarComponent } from './home/home.component';
import { ProfileNavbarComponent } from './profile/profile.component';
import { SearchNavbarComponent } from './search/search.component';
@NgModule({
  imports: [RouterModule, CommonModule, MatButtonModule],
  declarations: [HomeNavbarComponent, ProfileNavbarComponent, SearchNavbarComponent],
  exports: [HomeNavbarComponent, SearchNavbarComponent, ProfileNavbarComponent]
})
export class NavbarModule {}
