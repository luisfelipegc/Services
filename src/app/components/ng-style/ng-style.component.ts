import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px] = 'size'>
      ng-style works!
    </p>

    <button class="btn btn-primary mr-3" (click)="size = size + 5"> Aumentar </button>
    <button class="btn btn-primary" (click)="size = size - 5"> Disminuir </button>

  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  size = 20;

  constructor() { }

  ngOnInit() {
  }

}
