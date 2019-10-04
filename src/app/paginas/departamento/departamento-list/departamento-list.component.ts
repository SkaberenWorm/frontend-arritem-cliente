import { Component, OnInit, HostListener } from '@angular/core';
import { Departamento } from 'src/app/commons/models/departamento.model';
import { DepartamentoService } from '../departamento.service';
import { Router } from '@angular/router';
import { UtilAlertService } from 'src/app/commons/util/util-alert.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-departamento-list',
  templateUrl: './departamento-list.component.html',
  styleUrls: ['./departamento-list.component.css']
})
export class DepartamentoListComponent implements OnInit {
  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  public listaDepartamentos: Array<Departamento> = [];
  public loading = true;
  public departamentoFilter: Departamento = new Departamento();

  public page = 1;
  public pageSize = 10;
  public totalElements = 0;

  private listaTemporal: Array<Departamento> = [];

  closeResult: string;
  constructor(private departamentoService: DepartamentoService, private router: Router, private alert: UtilAlertService) {}

  ngOnInit() {
    this.cargarData();
  }

  /**
   * Método que recibe el evento desde el navBar
   * @param depto
   */
  fintrarDepartamento(depto: string) {
    //this.departamentoFilter = new Departamento({ direccion: depto });
    if (depto.length == 0) {
      console.log('Esta vacio');
      this.listaDepartamentos = this.listaTemporal;
    } else {
      let coincidencias: Array<Departamento> = [];

      this.listaTemporal.forEach(element => {
        console.log(element.direccion.toLowerCase());
        console.log(depto.toLowerCase());
        if (element.direccion.toLowerCase().indexOf(depto.toLowerCase()) != -1) {
          coincidencias.push(element);
        }
      });
      this.listaDepartamentos = coincidencias;

      /*  if (this.listaDepartamentos.length == 0) {
        this.alert.warningSwal('No existen departamentos que coincidan con la dirección: "' + depto + '"');
      } */
    }
  }
  cargarData() {
    this.departamentoService.listWithSearchAndPagination(this.departamentoFilter, this.page, this.pageSize).subscribe(result => {
      if (!result.error) {
        let listaDepartamentosTmp: Array<Departamento> = [];
        listaDepartamentosTmp = result.resultado.content;
        this.agregarDepartamentos(listaDepartamentosTmp);
        this.totalElements = result.resultado.totalElements;
        if (listaDepartamentosTmp.length !== 0) {
          this.page++;
          this.cargarData();
        } else {
          this.loading = false;
          /* if (this.listaDepartamentos.length == 0) {
            this.alert.warningSwal('No se encuentran departamentos que coincidan con la dirección: "' + this.departamentoFilter.direccion + '"');
          } */
        }
      } else {
        this.alert.warningSwal(result.mensaje);
      }
    });
  }

  /**
   * Agrega los departamentos de la lista temporal a la lista que se mostrará por pantalla
   */
  agregarDepartamentos(departamentos: Array<Departamento>) {
    departamentos.forEach(depto => {
      this.listaDepartamentos.push(depto);
      this.listaTemporal.push(depto);
    });
  }

  filtrarDepartamento(input: string) {
    console.log(input);
  }
  departamentoSeleccionado(departamentoSeleccionado: Departamento) {
    console.log(departamentoSeleccionado);
  }
}
