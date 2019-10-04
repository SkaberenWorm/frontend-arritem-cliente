import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchNavbarComponent implements OnInit {
  @Output()
  depto: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  filtrarDepartamento(departamento: string) {
    //console.log(departamento);
    this.depto.emit(departamento);
  }
}
