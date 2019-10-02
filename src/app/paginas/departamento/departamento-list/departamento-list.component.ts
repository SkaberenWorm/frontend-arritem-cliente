import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/commons/models/departamento.model';
import { DepartamentoService } from '../departamento.service';
import { Router } from '@angular/router';
import { UtilAlertService } from 'src/app/commons/util/util-alert.service';

@Component({
  selector: 'app-departamento-list',
  templateUrl: './departamento-list.component.html',
  styleUrls: ['./departamento-list.component.css']
})
export class DepartamentoListComponent implements OnInit {
  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  public listaDepartamentos: Array<Departamento>;
  public loading = true;
  public departamentoFilter = '';

  constructor(private departamentoService: DepartamentoService, private router: Router, private alert: UtilAlertService) {}

  ngOnInit() {
    this.cargarData();
  }

  cargarData() {
    this.departamentoService.listado().subscribe(result => {
      this.loading = false;
      if (!result.error) {
        console.log(result.resultado);
        this.listaDepartamentos = result.resultado;
      } else {
        this.alert.warningSwal(result.mensaje);
      }
    });
  }

  filtrarDepartamento(input: string) {
    console.log(input);
  }
}
