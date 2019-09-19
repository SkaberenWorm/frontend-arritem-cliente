import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/commons/services/authentication.service';

@Component({
  selector: 'app-search-layout',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchLayoutComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {}

  esCliente() {
    return this.authenticationService.esRol('Cliente');
  }
}
