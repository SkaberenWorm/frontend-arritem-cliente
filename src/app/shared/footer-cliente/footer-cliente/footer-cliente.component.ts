import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-cliente',
  templateUrl: './footer-cliente.component.html',
  styles: [
    `
      .fas:hover {
        color: #97ca3f;
      }
    `
  ]
})
export class FooterClienteComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
}
