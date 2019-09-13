import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-cliente',
  templateUrl: './footer-cliente.component.html',
  styles: []
})
export class FooterClienteComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goLike() {
    this.router.navigate(['/']);
  }
}
