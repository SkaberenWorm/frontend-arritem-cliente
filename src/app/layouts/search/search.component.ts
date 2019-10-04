import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/commons/services/authentication.service';

@Component({
  selector: 'app-search-layout',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchLayoutComponent implements OnInit {
  departamentoFiltrado: string;
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
    // console.log(this.departamentoFiltrado);
  }

  esCliente() {
    return this.authenticationService.esRol('Cliente');
  }

  fintrarDepartamento(depto: string) {
    if (depto != undefined) {
      console.log(depto);
      this.departamentoFiltrado = depto;
    }
  }
}
