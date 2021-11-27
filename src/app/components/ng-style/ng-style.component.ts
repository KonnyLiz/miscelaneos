import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <!-- forma no muy elegante de ngstyle, funciona con variables -->
    <!-- <p [ngStyle]="{'font-size': tamanoFuente + 'px', 'color': 'red'}"> -->
    
    <!-- para este uso, en lufar de font-size, se escribe en lugar 
    del guion, una mayuscula -->
    <!-- <p [style.fontSize]="'40px'"> -->

    <!-- Le decimos que valores va a ocupar, funciona tambien con porcentajes
    y otras medidas -->
    <!-- <p [style.fontSize.px]="tamanoFuente"> -->

    <p [style.fontSize.px]="tamanoFuente">
      Esta es una etiqueta para ver el funcionamiento de ngStyle.
    </p>

    <button class="btn btn-primary" (click)="tamanoFuente = tamanoFuente + 5">
      <i class="fa fa-plus"></i>5
    </button>

    <button class="btn btn-primary" (click)="tamanoFuente = tamanoFuente - 5">
      <i class="fa fa-minus"></i>5
    </button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {
  tamanoFuente: number = 30;

  constructor() { }

  ngOnInit(): void {
  }

}
