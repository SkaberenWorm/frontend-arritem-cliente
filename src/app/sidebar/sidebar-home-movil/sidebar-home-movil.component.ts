import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { AuthenticationService } from '../../commons/services/authentication.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';

declare const $: any;

// Metadata
export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  children?: ChildrenItems[];
}
export interface ChildrenItems {
  path: string;
  title: string;
  ab: string;
  type?: string;
}

// Menu Items
export let ROUTES: RouteInfo[] = [];

@Component({
  selector: 'app-sidebar-home-movil',
  templateUrl: './sidebar-home-movil.component.html',
  styleUrls: ['./sidebar-home-movil.component.css']
})
export class SidebarHomeMovilComponent implements OnInit {
  public menuItems: any[];
  ps: any;
  nombreUsuario = '--';

  private menu_cliente: RouteInfo[] = [
    {
      path: '/reservas',
      title: 'Mis Reservas',
      type: 'link',
      icontype: 'grid_on'
    }
  ];

  constructor(
    private _authenticationService: AuthenticationService,
    private store: Store<AppState>,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    ROUTES = this.menu_cliente;

    this._authenticationService.cargarStorage();
    // tslint:disable-next-line: max-line-length
    this.nombreUsuario =
      this._authenticationService.nombre.length > 0
        ? this._authenticationService.nombre
        : this._authenticationService.obtenerName();

    this.menuItems = ROUTES.filter(menuItem => menuItem);
    //console.log(this.menuItems);
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
      this.ps = new PerfectScrollbar(elemSidebar);
    }
  }
  updatePS(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      this.ps.update();
    }
  }

  isMac(): boolean {
    let bool = false;
    if (
      navigator.platform.toUpperCase().indexOf('MAC') >= 0 ||
      navigator.platform.toUpperCase().indexOf('IPAD') >= 0
    ) {
      bool = true;
    }
    return bool;
  }
  salir() {
    this.authenticationService.logout();
  }
}
