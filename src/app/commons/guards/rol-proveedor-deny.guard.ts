import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import swal from 'sweetalert2';
import { AuthenticationService } from '../services/authentication.service';
@Injectable()
export class RolProveedorDenyGuard implements CanActivate {
  constructor(
    public _authService: AuthenticationService,
    public router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    if (this._authService.esRol('ROLE_PROVEEDOR')) {
      return false;
    }
    return true;
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    if (this._authService.esRol('ROLE_PROVEEDOR')) {
      return false;
    }
    return true;
  }

}
