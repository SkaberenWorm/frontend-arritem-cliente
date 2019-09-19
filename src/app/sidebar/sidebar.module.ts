import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { SidebarHomeMovilComponent } from './sidebar-home-movil/sidebar-home-movil.component';
import { SidebarProfileMovilComponent } from './sidebar-profile-movil/sidebar-profile-movil.component';

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [SidebarComponent, SidebarHomeMovilComponent, SidebarProfileMovilComponent],
  exports: [SidebarComponent, SidebarHomeMovilComponent, SidebarProfileMovilComponent]
})
export class SidebarModule {}
