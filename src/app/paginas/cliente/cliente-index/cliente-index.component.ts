import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cliente-index',
  templateUrl: './cliente-index.component.html',
  styles: []
})
export class ClienteIndexComponent implements OnInit {
  constructor(config: NgbCarouselConfig) {}

  ngOnInit() {}
}
