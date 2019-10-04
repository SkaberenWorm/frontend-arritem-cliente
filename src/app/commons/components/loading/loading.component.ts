import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  @Input()
  public size: string;

  public sizes: any = {
    width: '',
    height: ''
  };

  constructor() {}

  ngOnInit() {
    if (this.size !== undefined) {
      this.sizes.width = this.size + 'px';
      this.sizes.height = this.size + 'px';
    }
  }
}
