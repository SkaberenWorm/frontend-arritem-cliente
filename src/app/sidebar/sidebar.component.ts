import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { AuthenticationService } from '../commons/services/authentication.service';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { Logout } from '../store/actions';

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
  selector: 'app-sidebar-cmp',
  templateUrl: 'sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  ps: any;
  nombreUsuario = '--';

  private menu_admin: RouteInfo[] = [
    {
      path: '/',
      title: 'Inicio',
      type: 'link',
      icontype: 'home'
    },
    {
      path: '/departamento',
      title: 'Departamentos',
      type: 'sub',
      icontype: 'grid_on',
      collapse: 'departamentos',
      children: [{ path: 'new', title: 'Nuevo Departamento', ab: '-' }, { path: 'listado', title: 'Listado De Departamentos', ab: '-' }]
    },
    {
      path: '/admin',
      title: 'Administración',
      type: 'sub',
      icontype: 'settings',
      collapse: 'settings',
      children: [
        { path: 'sala', title: 'Salas', ab: '-' },
        { path: 'piso', title: 'Pisos', ab: '-' },
        { path: 'edificio', title: 'Edificios', ab: '-' }
      ]
    }
  ];

  private menu_user: RouteInfo[] = [];

  constructor(
    private _authenticationService: AuthenticationService,
    private store: Store<AppState>,
    private authenticationService: AuthenticationService
  ) {}

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

  ngOnInit() {
    if (this._authenticationService.esRol('Administrador')) {
      ROUTES = this.menu_admin;
    } else if (this._authenticationService.esRol('ROLE_USUARIO')) {
      ROUTES = this.menu_user;
    }

    this._authenticationService.cargarStorage();
    // tslint:disable-next-line: max-line-length
    this.nombreUsuario =
      this._authenticationService.nombre.length > 0 ? this._authenticationService.nombre : this._authenticationService.obtenerName();

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
    if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
      bool = true;
    }
    return bool;
  }
  salir() {
    this.authenticationService.logout();
  }
}
