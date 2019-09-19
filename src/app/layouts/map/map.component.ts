import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/commons/services/authentication.service';

@Component({
  selector: 'app-map-layout',
  templateUrl: './map.component.html',
  styles: []
})
export class MapLayoutComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {}

  esCliente() {
    return this.authenticationService.esRol('Cliente');
  }
}
