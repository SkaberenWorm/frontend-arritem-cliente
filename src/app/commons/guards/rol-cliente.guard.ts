import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanLoad,
  Route,
  UrlSegment
} from '@angular/router';
import { Observable } from 'rxjs';
import swal from 'sweetalert2';
import { AuthenticationService } from '../services/authentication.service';
@Injectable()
export class RolClienteGuard implements CanActivate {
  constructor(public _authService: AuthenticationService, public router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this._authService.esRol('Cliente')) {
      return true;
    }
    swal.fire({
      title: 'Error',
      text: 'No tienes permisos para ingresar a la página solicitada',
      type: 'error',
      allowOutsideClick: false,
      allowEscapeKey: false
    });
    return false;
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    if (this._authService.esRol('Cliente')) {
      return true;
    }

    swal.fire({
      title: 'Error',
      text: 'No tienes permisos para ingresar a la página solicitada',
      type: 'error',
      allowOutsideClick: false,
      allowEscapeKey: false
    });
    this.router.navigate(['/']);
    return false;
  }
}
